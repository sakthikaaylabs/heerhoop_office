import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Package, Truck, Calendar, Download, ArrowRight, Phone, Mail, Home, ShoppingBag } from 'lucide-react';
import { Order } from '@/types';
import ReceiptGenerator from '@/components/receipt/ReceiptGenerator';

const OrderSuccess = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const location = useLocation();
  const order = location.state?.order as Order;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!order) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <Link to="/">
          <Button className="btn-primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        {/* Success Animation */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 mb-6 transition-all duration-1000 ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
            <CheckCircle className={`h-12 w-12 text-green-600 transition-all duration-1000 delay-500 ${isAnimating ? 'scale-0' : 'scale-100'}`} />
          </div>
          
          <div className={`transition-all duration-1000 delay-1000 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              Order Confirmed! 🎉
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Thank you for your purchase!
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Order #{order.id}
            </p>
            
            {/* Order Confirmation Message */}
            <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-4">We've Received Your Order!</h2>
              <div className="space-y-3 text-center">
                <p className="text-lg">
                  <strong>We will call you</strong> to confirm your order details and delivery arrangements.
                </p>
                <p className="text-lg">
                  <strong>We will let you know</strong> when your order is ready for delivery.
                </p>
                <p className="text-muted-foreground">
                  Please keep your phone handy for our call.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-1500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          {/* Order Details */}
          <Card className="card-product">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Package className="h-6 w-6 mr-2 text-primary" />
                Order Details
              </h2>
              
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card className="card-product">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-primary" />
                Delivery Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-semibold">Expected Delivery</p>
                    <p className="text-muted-foreground">
                      {order.orderDetails.deliveryDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-semibold">Delivery Address</p>
                    <p className="text-muted-foreground">{order.orderDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Order Status</p>
                    <Badge variant="secondary" className="mt-1">
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Receipt Download */}
          <ReceiptGenerator order={order} />
        </div>

        {/* Contact Information */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-2000 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <Card className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Contact Us for Reference</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">support@heerhoop.com</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Feel free to contact us if you have any questions about your order.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className={`text-center mt-12 space-y-4 transition-all duration-1000 delay-2500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-primary" size="lg">
                <Home className="h-5 w-5 mr-2" />
                Go to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Go to Products
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Thank you for choosing Heer Hoop! We appreciate your business.
          </p>
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full transition-all duration-2000 delay-2500 ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-pulse'}`} />
          <div className={`absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full transition-all duration-2000 delay-3000 ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-pulse'}`} />
          <div className={`absolute bottom-40 left-20 w-3 h-3 bg-secondary/30 rounded-full transition-all duration-2000 delay-3500 ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-pulse'}`} />
          <div className={`absolute bottom-20 right-10 w-5 h-5 bg-primary/15 rounded-full transition-all duration-2000 delay-4000 ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-pulse'}`} />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;