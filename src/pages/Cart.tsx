import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2, Heart, ShoppingBag, Truck, Shield, Clock, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/data/mockData';
import { Product } from '@/types';

const Cart = () => {
  const { items, updateQuantity, removeItem, itemCount, clearCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const [savedItems, setSavedItems] = useState<typeof items>([]);

  // Get recommended products (excluding items in cart)
  const cartProductIds = items.map(item => item.product.id);
  const recommendedProducts = products
    .filter(product => !cartProductIds.includes(product.id))
    .slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Start shopping to discover amazing products!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="btn-primary">
                Start Shopping
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button size="lg" variant="outline">
                View Wishlist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleSaveForLater = (item: typeof items[0]) => {
    setSavedItems(prev => [...prev, item]);
    removeItem(item.product.id);
    toast({
      title: "Saved for later",
      description: `${item.product.name} has been moved to your saved items.`,
    });
  };

  const handleMoveToCart = (savedItem: typeof items[0]) => {
    // Add back to cart
    updateQuantity(savedItem.product.id, savedItem.quantity);
    setSavedItems(prev => prev.filter(item => item.product.id !== savedItem.product.id));
    toast({
      title: "Moved to cart",
      description: `${savedItem.product.name} has been added back to your cart.`,
    });
  };

  const handleRemoveSaved = (productId: string) => {
    setSavedItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleAddToWishlist = (product: Product) => {
    addToWishlist(product);
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <p className="text-muted-foreground mt-2">
          {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cart Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Cart Items ({itemCount})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 border rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{item.product.name}</h3>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {item.product.category}
                        </Badge>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-primary">
                            ${item.product.price}
                          </span>
                          {item.product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.product.originalPrice}
                            </span>
                          )}
                          {item.product.discountPercentage && (
                            <Badge variant="destructive" className="text-xs">
                              Save {item.product.discountPercentage}%
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSaveForLater(item)}
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-sm text-muted-foreground">
                            ${item.product.price} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Saved for Later */}
          {savedItems.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Saved for Later ({savedItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {savedItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-4 border rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {item.product.category}
                      </Badge>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold text-primary">
                          ${item.product.price}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${item.product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMoveToCart(item)}
                      >
                        Move to Cart
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveSaved(item.product.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>You might also like</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="group">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.discountPercentage && (
                          <Badge className="absolute top-2 left-2 bg-destructive">
                            -{product.discountPercentage}%
                          </Badge>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
                          onClick={() => handleAddToWishlist(product)}
                        >
                          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current text-destructive' : ''}`} />
                        </Button>
                      </div>
                      <div className="mt-2">
                        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-primary text-sm">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{product.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Summary Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">30-day return policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">2-3 business days delivery</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link to="/checkout" className="w-full">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>

              {/* Security Badge */}
              <div className="text-center text-sm text-muted-foreground">
                🔒 Secure checkout powered by SSL
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;