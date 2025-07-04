import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PrivacyPolicy = () => {
  const privacyFeatures = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your personal information is protected with industry-standard security measures"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect and how we use it"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your data is stored securely and never shared without permission"
    },
    {
      icon: Users,
      title: "Your Control",
      description: "You have full control over your personal information"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link> */}
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
            <Shield className="h-10 w-10 text-purple-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Privacy Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="card-product hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Policy */}
        <Card className="card-product">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Privacy Policy</h2>
        
            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Information We Collect</h3>
                <p className="text-muted-foreground mb-4">
                  At Heer Hoop, we collect information that you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Create an account or make a purchase</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us with questions or feedback</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">How We Use Your Information</h3>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your account and orders</li>
                  <li>Send you promotional materials (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Information Sharing</h3>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Service providers who assist us in operating our website and conducting business</li>
                  <li>Law enforcement or regulatory authorities when required by law</li>
                  <li>Other parties with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Data Security</h3>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Your Rights</h3>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Cookies</h3>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Updates to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the effective date.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-purple-50 dark:bg-purple-950/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="font-medium">Email: privacy@heerhoop.com</p>
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

export default PrivacyPolicy;