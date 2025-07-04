import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Users, Scale, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TermsOfService = () => {
  const termsSections = [
    {
      icon: Shield,
      title: "Acceptance of Terms",
      content: "By accessing and using Heer Hoop's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
      icon: Users,
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use."
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and images, is the property of Heer Hoop and is protected by copyright and other intellectual property laws."
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: "Heer Hoop shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or products."
    },
    {
      icon: Clock,
      title: "Order Processing",
      content: "Orders are processed on a first-come, first-served basis. We reserve the right to refuse or cancel orders at our discretion."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link> */}
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
            <FileText className="h-10 w-10 text-blue-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By using Heer Hoop, you agree to these terms and conditions.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {termsSections.map((section, index) => (
            <Card key={index} className="card-product hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Terms */}
        <Card className="card-product">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Terms of Service</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">1. Service Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heer Hoop provides handmade jewelry and accessories through our online platform. We offer a curated selection of unique, handcrafted items made with care and attention to detail.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">2. Payment Terms</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• All prices are listed in USD and include applicable taxes</p>
                  <p>• Payment is due at the time of order placement</p>
                  <p>• We accept major credit cards and digital payment methods</p>
                  <p>• Orders are not confirmed until payment is received</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">3. Shipping & Delivery</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Free shipping on orders over $50</p>
                  <p>• Standard delivery: 3-5 business days</p>
                  <p>• Express delivery: 1-2 business days (additional fee)</p>
                  <p>• Delivery dates are estimates and may vary</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">4. Returns & Refunds</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• 30-day return policy for unused items</p>
                  <p>• Return shipping costs are the responsibility of the customer</p>
                  <p>• Refunds are processed within 5-7 business days</p>
                  <p>• Custom or personalized items are non-refundable</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">5. Privacy & Data Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. We collect and process your personal information in accordance with our Privacy Policy. By using our services, you consent to our data practices as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">6. Prohibited Uses</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Using our services for any illegal purpose</p>
                  <p>• Attempting to gain unauthorized access to our systems</p>
                  <p>• Interfering with the proper functioning of our website</p>
                  <p>• Reselling our products without authorization</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">7. Modifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">8. Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of the United States. Any disputes arising from these terms or your use of our services shall be resolved in the courts of the United States.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-blue-50 dark:bg-blue-950/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="font-medium">Email: legal@heerhoop.com</p>
                <p className="font-medium">Phone: +1 (555) 123-4567</p>
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

export default TermsOfService; 