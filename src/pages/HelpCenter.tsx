import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  RefreshCw, 
  Shield, 
  User,
  ChevronRight,
  Star
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'ordering',
      title: 'Ordering & Payment',
      icon: ShoppingBag,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      questions: [
        {
          question: "How do I place an order?",
          answer: "Browse our products, add items to your cart, and proceed to checkout. You can pay using credit/debit cards, PayPal, or other available payment methods."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details on our servers."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can modify or cancel your order within 1 hour of placing it. Contact our customer service team immediately for assistance."
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
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days, express shipping takes 1-2 business days, and overnight shipping is available for select locations."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days."
        },
        {
          question: "How much does shipping cost?",
          answer: "Standard shipping is free for orders over $50. Express shipping costs $15, and overnight shipping costs $25."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you'll receive a tracking number via email once your order ships. You can also track your order in your account dashboard."
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
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Items must be unused, in original packaging, and with all tags attached."
        },
        {
          question: "How do I return an item?",
          answer: "Log into your account, go to 'My Orders', select the order you want to return, and follow the return process. You'll receive a prepaid shipping label."
        },
        {
          question: "How long does it take to process returns?",
          answer: "Returns are typically processed within 3-5 business days of receiving the item. Refunds are issued to your original payment method."
        },
        {
          question: "Can I exchange an item for a different size?",
          answer: "Yes, you can exchange items for different sizes or colors. Exchanges are processed the same way as returns."
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
          question: "How do I create an account?",
          answer: "Click 'Sign Up' in the top right corner, fill in your details, and verify your email address to create your account."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email."
        },
        {
          question: "How do I update my account information?",
          answer: "Log into your account, go to 'Account Settings', and update your personal information, shipping addresses, or payment methods."
        },
        {
          question: "Can I save items to a wishlist?",
          answer: "Yes, you can save items to your wishlist by clicking the heart icon on any product. Access your wishlist from your account dashboard."
        }
      ]
    }
  ];

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

  const filteredCategories = helpCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  const filteredQuestions = filteredCategories.flatMap(category =>
    category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions, get support, and learn more about our products and services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
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
            All Topics
          </Button>
          {helpCategories.map((category) => (
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

        {/* Help Categories */}
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
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.questions.map((item, index) => (
                    <div key={index} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Still Need Help?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our customer support team is available 24/7 to assist you with any questions or concerns.
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

export default HelpCenter; 