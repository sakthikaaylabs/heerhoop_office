import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowUp, MessageCircle, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-muted/30 via-muted/20 to-muted/40 border-t relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Heer Hoop</span>
                <span className="text-xs text-muted-foreground -mt-1">Your Style, Your Story</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover amazing handmade products and find your perfect style with our curated collection. 
              Every piece tells a unique story crafted with love and care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@heerhoop.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Craft Street, Artisan City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Home
              </Link>
              <Link to="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                All Products
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Contact
              </Link>
              <Link to="/cart" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Shopping Cart
              </Link>
              <Link to="/wishlist" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Wishlist
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-3">
              <Link to="/help-center" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Help Center
              </Link>
              <Link to="/shipping" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Shipping Info
              </Link>
              <Link to="/return-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Returns & Exchanges
              </Link>
              <Link to="/size-guide" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Size Guide
              </Link>
              <Link to="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                FAQ
              </Link>
              <Link to="/sitemap" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                Site Map
              </Link>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Get updates about new collections and exclusive offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-border/50 rounded-lg bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <Button size="sm" className="px-4">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center gap-3 p-4 bg-background/30 rounded-lg border border-border/30">
            <Truck className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background/30 rounded-lg border border-border/30">
            <Shield className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-medium">Secure Payment</p>
              <p className="text-xs text-muted-foreground">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background/30 rounded-lg border border-border/30">
            <Clock className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-medium">24/7 Support</p>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background/30 rounded-lg border border-border/30">
            <Heart className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-medium">Handmade with Love</p>
              <p className="text-xs text-muted-foreground">Quality guaranteed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-xs">
                Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> in India
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Heer Hoop. All rights reserved. | Crafted with care for handmade enthusiasts worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;