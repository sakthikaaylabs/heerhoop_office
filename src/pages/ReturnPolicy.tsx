import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Package, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReturnPolicy = () => {
  const returnSteps = [
    {
      icon: Package,
      title: "Package Your Item",
      description: "Ensure the item is in its original condition and packaging"
    },
    {
      icon: RefreshCw,
      title: "Initiate Return",
      description: "Contact us within 30 days of purchase to start the return process"
    },
    {
      icon: Clock,
      title: "Ship Back",
      description: "Ship the item back to us using a trackable shipping method"
    },
    {
      icon: CheckCircle,
      title: "Receive Refund",
      description: "Get your refund processed within 5-7 business days"
    }
  ];

  const returnConditions = [
    {
      icon: CheckCircle,
      title: "What We Accept",
      items: [
        "Items in original condition",
        "Unused products",
        "Original packaging intact",
        "Within 30 days of purchase"
      ]
    },
    {
      icon: AlertCircle,
      title: "What We Don't Accept",
      items: [
        "Used or damaged items",
        "Custom or personalized products",
        "Items without original packaging",
        "Items purchased more than 30 days ago"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link> */}
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <RefreshCw className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Return Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We want you to love your Heer Hoop purchase. If you're not completely satisfied, we're here to help with easy returns.
          </p>
        </div>

        {/* Return Process Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How to Return Your Item</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <Card key={index} className="card-product hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Return Conditions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {returnConditions.map((condition, index) => (
            <Card key={index} className="card-product">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <condition.icon className={`h-6 w-6 ${index === 0 ? 'text-green-600' : 'text-red-600'}`} />
                  <h3 className="text-xl font-semibold">{condition.title}</h3>
                </div>
                <ul className="space-y-2">
                  {condition.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${index === 0 ? 'bg-green-600' : 'bg-red-600'}`} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Policy */}
        <Card className="card-product mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Return Policy</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Return Window</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You have <strong>30 days</strong> from the date of purchase to return your item. Returns initiated after this period will not be accepted.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Return Shipping</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Return shipping costs are the responsibility of the customer</p>
                  <p>• We recommend using a trackable shipping method</p>
                  <p>• Items must be shipped to our return address (provided upon return initiation)</p>
                  <p>• We are not responsible for items lost in transit</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Refund Process</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Refunds are processed within 5-7 business days of receiving your return</p>
                  <p>• Refunds are issued to the original payment method</p>
                  <p>• Original shipping costs are non-refundable</p>
                  <p>• You will receive an email confirmation when your refund is processed</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Exchanges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We currently do not offer direct exchanges. If you'd like a different item, please return your current item and place a new order. This ensures you get the most current pricing and availability.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Damaged or Defective Items</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• If you receive a damaged or defective item, contact us immediately</p>
                  <p>• Include photos of the damage in your email</p>
                  <p>• We will provide a prepaid return label for damaged items</p>
                  <p>• Damaged items are eligible for full refund including shipping costs</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Custom and Personalized Items</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom or personalized items are non-refundable unless they arrive damaged or defective. These items are made specifically for you and cannot be resold.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-green-50 dark:bg-green-950/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Need Help with a Return?</h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help you with any return questions:
              </p>
              <div className="space-y-2">
                <p className="font-medium">Email: returns@heerhoop.com</p>
                <p className="font-medium">Phone: +1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Please include your order number when contacting us about returns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <Badge variant="outline" className="text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy; 