import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  ShoppingBag, 
  User, 
  HelpCircle, 
  Truck, 
  Shield, 
  FileText, 
  Heart,
  ShoppingCart,
  CreditCard,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  Ruler,
  RefreshCw,
  Globe,
  Search,
  Info,
  Settings
} from 'lucide-react';

const SiteMap = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome page with featured products and promotions' },
        { name: 'About Us', path: '/about', description: 'Learn about our brand story and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our customer service team' }
      ]
    },
    {
      category: 'Shopping',
      icon: ShoppingBag,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      pages: [
        { name: 'All Products', path: '/products', description: 'Browse our complete collection of handmade items' },
        { name: 'Shopping Cart', path: '/cart', description: 'View and manage items in your cart' },
        { name: 'Checkout', path: '/checkout', description: 'Complete your purchase securely' },
        { name: 'Wishlist', path: '/wishlist', description: 'Save and organize your favorite items' },
        { name: 'Order Success', path: '/order-success', description: 'Confirmation page after successful order' }
      ]
    },
    {
      category: 'Customer Service',
      icon: HelpCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      pages: [
        { name: 'Help Center', path: '/help-center', description: 'Find answers to common questions and get support' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions and quick answers' },
        { name: 'Shipping Information', path: '/shipping', description: 'Shipping options, costs, and delivery times' },
        { name: 'Size Guide', path: '/size-guide', description: 'Find your perfect fit with our size charts' },
        { name: 'Returns & Exchanges', path: '/return-policy', description: 'Return policy and exchange procedures' }
      ]
    },
    {
      category: 'Legal & Policies',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect and use your personal information' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions for using our website' },
        { name: 'Return Policy', path: '/return-policy', description: 'Detailed return and refund policies' }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Start Shopping',
      description: 'Browse our handmade collection',
      icon: ShoppingBag,
      path: '/products',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Get Help',
      description: 'Find answers and support',
      icon: HelpCircle,
      path: '/help-center',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Contact Us',
      description: 'Reach our customer service',
      icon: MessageCircle,
      path: '/contact',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Size Guide',
      description: 'Find your perfect fit',
      icon: Ruler,
      path: '/size-guide',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const contactInfo = [
    {
      title: 'Email Support',
      value: 'hello@heerhoop.com',
      icon: Mail,
      description: 'Get help via email'
    },
    {
      title: 'Phone Support',
      value: '+1 (555) 123-4567',
      icon: Phone,
      description: 'Call us for immediate assistance'
    },
    {
      title: 'Live Chat',
      value: 'Available 24/7',
      icon: MessageCircle,
      description: 'Chat with our support team'
    },
    {
      title: 'Office Address',
      value: '123 Craft Street, Artisan City',
      icon: MapPin,
      description: 'Visit our workshop'
    }
  ];

  const popularPages = [
    { name: 'All Products', path: '/products', visits: '15K+' },
    { name: 'Help Center', path: '/help-center', visits: '8K+' },
    { name: 'Size Guide', path: '/size-guide', visits: '6K+' },
    { name: 'Shipping Info', path: '/shipping', visits: '5K+' },
    { name: 'FAQ', path: '/faq', visits: '4K+' },
    { name: 'About Us', path: '/about', visits: '3K+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Search className="w-4 h-4 mr-2" />
            Site Map
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Site Navigation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find everything you need on our website with this comprehensive site map. 
            Navigate easily to any page or section.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.path}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${action.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Main Site Structure */}
        <div className="space-y-8 mb-16">
          {siteStructure.map((section) => (
            <Card key={section.category} className="overflow-hidden">
              <CardHeader className={`${section.bgColor} border-b`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${section.bgColor} rounded-lg flex items-center justify-center`}>
                    <section.icon className={`w-5 h-5 ${section.color}`} />
                  </div>
                  <CardTitle className={section.color}>{section.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page) => (
                    <Link key={page.name} to={page.path}>
                      <div className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {page.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Pages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Most Popular Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPages.map((page, index) => (
              <Link key={page.name} to={page.path}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{page.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {page.visits} visits
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>Popular destination</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact) => (
              <Card key={contact.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{contact.value}</p>
                  <p className="text-xs text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Site Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Website Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Easy Shopping</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Browse by categories</li>
                  <li>• Advanced search filters</li>
                  <li>• Wishlist functionality</li>
                  <li>• Secure checkout process</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Customer Support</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 24/7 live chat support</li>
                  <li>• Comprehensive help center</li>
                  <li>• Size guide and fit tips</li>
                  <li>• FAQ section</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Security & Trust</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure payment processing</li>
                  <li>• Privacy protection</li>
                  <li>• 30-day return policy</li>
                  <li>• Quality guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search Tips */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Search className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Can't Find What You're Looking For?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Use our search function or contact our customer service team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  <Search className="w-4 h-4 mr-2" />
                  Search Products
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SiteMap; 