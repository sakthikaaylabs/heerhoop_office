import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  HelpCircle, 
  ShoppingBag, 
  Truck, 
  RefreshCw, 
  User, 
  Shield, 
  CreditCard,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      id: 'ordering',
      title: 'Ordering & Payment',
      icon: ShoppingBag,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      questions: [
        {
          id: 1,
          question: "How do I place an order?",
          answer: "Browse our products, add items to your cart, and proceed to checkout. You can pay using credit/debit cards, PayPal, Apple Pay, Google Pay, or bank transfers. Make sure to review your order details before confirming."
        },
        {
          id: 2,
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our encrypted payment system."
        },
        {
          id: 3,
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details on our servers. All transactions are processed through secure payment gateways."
        },
        {
          id: 4,
          question: "Can I modify or cancel my order?",
          answer: "You can modify or cancel your order within 1 hour of placing it. Contact our customer service team immediately for assistance. After 1 hour, orders are processed and cannot be changed."
        },
        {
          id: 5,
          question: "Do you offer gift cards?",
          answer: "Yes, we offer digital gift cards in various denominations. Gift cards can be used for any purchase on our website and never expire. They make perfect gifts for any occasion."
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      icon: Truck,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      questions: [
        {
          id: 6,
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days, express shipping takes 1-2 business days, and overnight shipping is available for select locations. International shipping typically takes 7-14 business days."
        },
        {
          id: 7,
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days. Customs duties and taxes may apply depending on your country."
        },
        {
          id: 8,
          question: "How much does shipping cost?",
          answer: "Standard shipping is free for orders over $50. Express shipping costs $15, and overnight shipping costs $25. International shipping costs vary by destination and are calculated at checkout."
        },
        {
          id: 9,
          question: "Can I track my order?",
          answer: "Yes, you'll receive a tracking number via email once your order ships. You can also track your order in your account dashboard. Real-time updates are provided throughout the delivery process."
        },
        {
          id: 10,
          question: "What if my package is lost or damaged?",
          answer: "If your package is lost or damaged, contact us immediately. We'll work with the shipping carrier to resolve the issue and arrange a replacement or refund as appropriate."
        }
      ]
    },
    {
      id: 'returns',
      title: 'Returns & Exchanges',
      icon: RefreshCw,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      questions: [
        {
          id: 11,
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Items must be unused, in original packaging, and with all tags attached. Some items may have different return policies due to their nature."
        },
        {
          id: 12,
          question: "How do I return an item?",
          answer: "Log into your account, go to 'My Orders', select the order you want to return, and follow the return process. You'll receive a prepaid shipping label. Pack the item securely and drop it off at any authorized shipping location."
        },
        {
          id: 13,
          question: "How long does it take to process returns?",
          answer: "Returns are typically processed within 3-5 business days of receiving the item. Refunds are issued to your original payment method and may take 5-10 business days to appear on your statement."
        },
        {
          id: 14,
          question: "Can I exchange an item for a different size?",
          answer: "Yes, you can exchange items for different sizes or colors. Exchanges are processed the same way as returns. Simply select 'exchange' instead of 'return' when initiating the process."
        },
        {
          id: 15,
          question: "Are there any items that cannot be returned?",
          answer: "Yes, some items cannot be returned for hygiene or safety reasons. These include personalized items, intimate apparel, and items marked as final sale. Check the product page for specific return policies."
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Profile',
      icon: User,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      questions: [
        {
          id: 16,
          question: "How do I create an account?",
          answer: "Click 'Sign Up' in the top right corner, fill in your details, and verify your email address to create your account. You can also create an account during checkout."
        },
        {
          id: 17,
          question: "I forgot my password. How do I reset it?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email. You'll receive a secure link to reset your password."
        },
        {
          id: 18,
          question: "How do I update my account information?",
          answer: "Log into your account, go to 'Account Settings', and update your personal information, shipping addresses, or payment methods. Changes are saved automatically."
        },
        {
          id: 19,
          question: "Can I save items to a wishlist?",
          answer: "Yes, you can save items to your wishlist by clicking the heart icon on any product. Access your wishlist from your account dashboard. You can also share your wishlist with friends and family."
        },
        {
          id: 20,
          question: "How do I delete my account?",
          answer: "To delete your account, contact our customer service team. We'll help you through the process and ensure all your data is properly removed from our systems."
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      questions: [
        {
          id: 21,
          question: "How do you protect my personal information?",
          answer: "We use industry-standard security measures including SSL encryption, secure servers, and strict access controls. We never share your personal information with third parties without your consent."
        },
        {
          id: 22,
          question: "Do you store my credit card information?",
          answer: "No, we never store your complete credit card details on our servers. All payment information is processed securely through our payment partners and encrypted during transmission."
        },
        {
          id: 23,
          question: "How can I protect my account?",
          answer: "Use a strong, unique password, enable two-factor authentication if available, and never share your login credentials. Always log out when using shared devices."
        },
        {
          id: 24,
          question: "What should I do if I suspect fraud?",
          answer: "If you suspect fraudulent activity on your account, contact us immediately. We'll investigate and take appropriate action to protect your account and information."
        }
      ]
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredCategories = faqCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  const filteredQuestions = filteredCategories.flatMap(category =>
    category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: Phone,
      action: "Call Now",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our products, services, and policies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-border/50 focus:ring-4 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="rounded-full"
          >
            All Questions
          </Button>
          {faqCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => (
            <Card key={method.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader className={`${category.bgColor} border-b`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <CardTitle className={category.color}>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {category.questions
                    .filter(q =>
                      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item) => (
                    <div key={item.id} className="p-6 hover:bg-muted/30 transition-colors">
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h4 className="font-semibold text-foreground pr-4">{item.question}</h4>
                        {expandedItems.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {expandedItems.includes(item.id) && (
                        <div className="mt-4 pl-4 border-l-2 border-primary/20">
                          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Questions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-semibold">How do I track my order?</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  You'll receive a tracking number via email once your order ships. You can also track your order in your account dashboard.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-semibold">What is your return policy?</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day return policy for most items. Items must be unused, in original packaging, and with all tags attached.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-semibold">Do you ship internationally?</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-semibold">Is my payment information secure?</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Yes, we use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Still Need Help?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 