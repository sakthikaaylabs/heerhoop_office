import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Truck, 
  Clock, 
  MapPin, 
  Package, 
  Globe, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Star,
  Zap,
  Plane,
  Ship
} from 'lucide-react';

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      icon: Truck,
      duration: '3-5 business days',
      price: 'Free on orders over $50',
      priceDetails: '$5.99 for orders under $50',
      features: [
        'Tracked shipping',
        'Email notifications',
        'Signature confirmation available',
        'Insurance included'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'express',
      name: 'Express Shipping',
      icon: Zap,
      duration: '1-2 business days',
      price: '$15.99',
      priceDetails: 'Available for most locations',
      features: [
        'Priority handling',
        'Real-time tracking',
        'Signature confirmation',
        'Insurance included',
        'Saturday delivery available'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      icon: Plane,
      duration: 'Next business day',
      price: '$25.99',
      priceDetails: 'Order by 2 PM for next-day delivery',
      features: [
        'Premium priority handling',
        'Real-time tracking',
        'Signature confirmation required',
        'Full insurance coverage',
        'Guaranteed delivery time'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const internationalShipping = [
    {
      region: 'Canada',
      duration: '5-7 business days',
      cost: '$12.99',
      restrictions: 'Some items may be restricted'
    },
    {
      region: 'Europe',
      duration: '7-10 business days',
      cost: '$19.99',
      restrictions: 'Duties and taxes may apply'
    },
    {
      region: 'Asia Pacific',
      duration: '8-12 business days',
      cost: '$24.99',
      restrictions: 'Customs clearance required'
    },
    {
      region: 'Rest of World',
      duration: '10-15 business days',
      cost: '$29.99',
      restrictions: 'Varies by country'
    }
  ];

  const trackingInfo = [
    {
      step: 'Order Placed',
      description: 'Your order has been confirmed and is being processed',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      step: 'Processing',
      description: 'We\'re preparing your items for shipment',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      step: 'Shipped',
      description: 'Your order is on its way to you',
      icon: Truck,
      color: 'text-orange-600'
    },
    {
      step: 'Delivered',
      description: 'Your order has been successfully delivered',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Truck className="w-4 h-4 mr-2" />
            Shipping Information
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fast & Reliable Shipping
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer multiple shipping options to get your handmade treasures to you quickly and safely.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {shippingOptions.map((option) => (
            <Card key={option.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className={`${option.bgColor} border-b`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${option.bgColor} rounded-lg flex items-center justify-center`}>
                    <option.icon className={`w-5 h-5 ${option.color}`} />
                  </div>
                  <div>
                    <CardTitle className={option.color}>{option.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{option.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-foreground">{option.price}</p>
                  <p className="text-sm text-muted-foreground">{option.priceDetails}</p>
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs for Different Information */}
        <Tabs defaultValue="domestic" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="domestic" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Free Shipping Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium">Free on orders over $50</p>
                          <p className="text-sm text-muted-foreground">Standard shipping included</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium">3-5 business days</p>
                          <p className="text-sm text-muted-foreground">Typical delivery time</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                        <Shield className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="font-medium">Fully insured</p>
                          <p className="text-sm text-muted-foreground">Protection included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Shipping Restrictions</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Fragile Items</p>
                          <p className="text-sm text-muted-foreground">Extra packaging and handling may apply</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Large Items</p>
                          <p className="text-sm text-muted-foreground">Oversized items may have additional fees</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Remote Areas</p>
                          <p className="text-sm text-muted-foreground">Extended delivery times may apply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="international" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">International Shipping</h3>
                  <p className="text-muted-foreground mb-6">
                    We ship to most countries worldwide. Please note that customs duties, taxes, and import fees may apply.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {internationalShipping.map((region) => (
                    <div key={region.region} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">{region.region}</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Duration:</span> {region.duration}</p>
                        <p><span className="font-medium">Cost:</span> {region.cost}</p>
                        <p><span className="font-medium">Note:</span> {region.restrictions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Order Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your order from our workshop to your doorstep with real-time updates.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Tracking Process</h4>
                    <div className="space-y-4">
                      {trackingInfo.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full ${step.color.replace('text-', 'bg-')} bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1`}>
                            <step.icon className={`w-4 h-4 ${step.color}`} />
                          </div>
                          <div>
                            <p className="font-medium">{step.step}</p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Tracking Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Real-time tracking updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Email notifications at each step</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">SMS alerts for delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Estimated delivery times</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Signature confirmation options</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">When will my order ship?</h4>
                <p className="text-muted-foreground text-sm">
                  Most orders ship within 1-2 business days. Handmade items may take 3-5 business days to prepare.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Can I change my shipping address?</h4>
                <p className="text-muted-foreground text-sm">
                  You can update your shipping address within 1 hour of placing your order by contacting customer service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">What if my package is damaged?</h4>
                <p className="text-muted-foreground text-sm">
                  Contact us immediately with photos of the damage. We'll arrange a replacement or refund.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Do you ship to PO boxes?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we ship to PO boxes using standard shipping. Express and overnight options are not available for PO boxes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Need Shipping Help?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our shipping experts are here to help with any questions about delivery, tracking, or international shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Track My Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shipping; 