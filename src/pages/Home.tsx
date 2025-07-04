import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Clock, Percent, Truck, Sparkles, X, Send } from 'lucide-react';
import ProductGrid from '@/components/product/ProductGrid';
import { products, categories } from '@/data/mockData';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 0,
    comment: '',
    product: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  const featuredProducts = products.filter(product => product.featured);

  // Review form handlers
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.rating === 0) {
      alert('Please select a rating');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newReview = {
        id: testimonials.length + 1,
        name: reviewForm.name,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        product: reviewForm.product,
        date: 'Just now',
        verified: false,
        helpful: 0,
        image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?w=100&h=100&fit=crop&crop=face`
      };
      
      // In a real app, you would send this to your API
      console.log('New review submitted:', newReview);
      
      // Reset form and close modal
      setReviewForm({
        name: '',
        rating: 0,
        comment: '',
        product: '',
        email: ''
      });
      setShowReviewModal(false);
      setIsSubmitting(false);
      
      // Show success message
      alert('Thank you for your review! It will be published after moderation.');
    }, 1500);
  };

  const handleRatingChange = (rating: number) => {
    setReviewForm(prev => ({ ...prev, rating }));
  };

  // Newsletter handlers
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    setIsNewsletterSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsNewsletterSubmitting(false);
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setSelectedInterests([]);
      
      // Reset success message after 5 seconds
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }, 1500);
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const heroContent = [
    {
      heading: "Handmade Wonders, From Our Heart to Yours",
      subheading: "Unique, meaningful creations made with love — just for you."
    },
    {
      heading: "Every Product Tells a Story",
      subheading: "Crafted with care, rooted in heritage, and ready to inspire."
    },
    {
      heading: "Crafted by Hands, Guided by Heart",
      subheading: "Each piece is a blend of tradition, soul, and intentional design."
    },
    {
      heading: "Connecting Hearts Through Handmade Stories",
      subheading: "Every product is a thread that binds creators and seekers."
    },
    {
      heading: "Small Beginnings. Big Meaning.",
      subheading: "From local hands to global homes — each piece carries purpose."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroContent.length]);
  
  const promotions = [
    {
      id: 1,
      title: "Summer Sale",
      subtitle: "Up to 50% off on selected items",
      description: "Limited time offer on our best-selling summer collection",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      cta: "Shop Now",
      discount: "50% OFF",
      endDate: "2024-08-31",
      icon: Percent,
      link: "/products?sale=summer"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Discover the latest trends",
      description: "Fresh styles just in - be the first to explore",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      cta: "Explore",
      badge: "NEW",
      icon: Sparkles,
      link: "/products?new=true"
    },
    {
      id: 3,
      title: "Free Shipping",
      subtitle: "On orders over $50",
      description: "No hidden fees, just pure savings on every order",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
      cta: "Learn More",
      badge: "FREE",
      icon: Truck,
      link: "/shipping"
    }
  ];

  // Auto-play functionality for promotions carousel
  const [promoIndex, setPromoIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  useEffect(() => {
    if (!isAutoPlaying || !carouselApi) return;
    
    const interval = setInterval(() => {
      const nextIndex = (promoIndex + 1) % promotions.length;
      setPromoIndex(nextIndex);
      carouselApi.scrollTo(nextIndex);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, promotions.length, promoIndex, carouselApi]);

  const handlePromoHover = () => setIsAutoPlaying(false);
  const handlePromoLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselApi) return;
      
      if (e.key === 'ArrowLeft') {
        const prevIndex = (promoIndex - 1 + promotions.length) % promotions.length;
        setPromoIndex(prevIndex);
        carouselApi.scrollTo(prevIndex);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (promoIndex + 1) % promotions.length;
        setPromoIndex(nextIndex);
        carouselApi.scrollTo(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [promotions.length, promoIndex, carouselApi]);

  // Listen to carousel state changes to keep promoIndex in sync
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const newIndex = carouselApi.selectedScrollSnap();
      setPromoIndex(newIndex);
      // Reset auto-play timer when user manually navigates
      if (isAutoPlaying) {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 100);
      }
    };

    carouselApi.on('select', onSelect);
    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi, isAutoPlaying]);

  const formatTimeLeft = (endDate: string) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return "Expired";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h left`;
    return `${hours}h left`;
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing quality and fast shipping! I love my new dress. The fabric is so soft and the fit is perfect. Will definitely shop here again!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&h=100&fit=crop&crop=face",
      date: "2 days ago",
      verified: true,
      product: "Summer Floral Dress",
      helpful: 12
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment: "Great customer service and the products are exactly as described. The team was very helpful when I had questions about sizing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "1 week ago",
      verified: true,
      product: "Casual Denim Jacket",
      helpful: 8
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      comment: "Heer Hoop has become my go-to store for trendy fashion. The quality is consistently excellent and prices are reasonable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "3 days ago",
      verified: true,
      product: "Elegant Evening Gown",
      helpful: 15
    },
    {
      id: 4,
      name: "David Wilson",
      rating: 4,
      comment: "Very satisfied with my purchase. The shirt fits perfectly and the material is high quality. Shipping was a bit slow but worth the wait.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "5 days ago",
      verified: true,
      product: "Classic Oxford Shirt",
      helpful: 6
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      rating: 5,
      comment: "Absolutely love the accessories I ordered! The jewelry is beautiful and the handbag is exactly what I was looking for.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      date: "1 day ago",
      verified: true,
      product: "Designer Handbag",
      helpful: 9
    },
    {
      id: 6,
      name: "Alex Thompson",
      rating: 5,
      comment: "Outstanding experience! The customer support team was incredibly helpful and the product exceeded my expectations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "4 days ago",
      verified: true,
      product: "Premium Leather Wallet",
      helpful: 11
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 animate-text-glow animate-text-change"
            key={currentIndex}
          >
            {heroContent[currentIndex].heading}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 animate-pulse-slow animate-text-change"
            key={`sub-${currentIndex}`}
          >
            {heroContent[currentIndex].subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-6" style={{ animationDelay: '0.4s' }}>
            <Link to="/products">
              <Button size="lg" className="btn-accent text-lg px-8 py-3 animate-bounce-gentle hover:animate-none">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" className="text-white border-2 border-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent hover:shadow-lg transition-all duration-300 animate-bounce-gentle hover:animate-none" style={{ animationDelay: '0.2s' }}>
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Progress Indicators */}
          {/* <div className="flex justify-center gap-2">
            {heroContent.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 scale-100'
                }`}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Promotions Carousel */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Time
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-muted-foreground text-lg">Don't miss out on our amazing deals</p>
          </div>
          
          <div 
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={handlePromoHover}
            onMouseLeave={handlePromoLeave}
          >
            <Carousel 
              className="w-full"
              setApi={setCarouselApi}
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {promotions.map((promo) => {
                  const IconComponent = promo.icon;
                  return (
                    <CarouselItem key={promo.id} className="md:basis-1/1">
                      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative h-64 md:h-80">
                            {/* Loading state for image */}
                            <div className="absolute inset-0 bg-muted animate-pulse" />
                            <img
                              src={promo.image}
                              alt={promo.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            
                            {/* Overlay with gradient for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                              <div className="w-full p-6 md:p-8">
                                {/* Badge/Discount */}
                                <div className="flex items-center gap-2 mb-3">
                                  {promo.discount && (
                                    <Badge variant="destructive" className="text-sm font-bold">
                                      <IconComponent className="w-3 h-3 mr-1" />
                                      {promo.discount}
                                    </Badge>
                                  )}
                                  {promo.badge && (
                                    <Badge variant="secondary" className="text-sm font-bold">
                                      <IconComponent className="w-3 h-3 mr-1" />
                                      {promo.badge}
                                    </Badge>
                                  )}
                                  {promo.endDate && (
                                    <Badge variant="outline" className="text-white border-white/30 bg-black/20">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {formatTimeLeft(promo.endDate)}
                                    </Badge>
                                  )}
                                </div>
                                
                                {/* Content */}
                                <div className="text-white">
                                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                                    {promo.title}
                                  </h3>
                                  <p className="text-lg md:text-xl mb-2 font-medium">
                                    {promo.subtitle}
                                  </p>
                                  <p className="text-sm md:text-base text-white/80 mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                    {promo.description}
                                  </p>
                                  
                                  {/* CTA Button */}
                                  <Link to={promo.link}>
                                    <Button 
                                      size="lg" 
                                      className="btn-accent group-hover:scale-105 transition-transform duration-200"
                                      aria-label={`${promo.cta} - ${promo.title}`}
                                    >
                                      {promo.cta}
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              {/* Navigation Controls */}
              <div className="flex items-center justify-center mt-6 gap-4">
                <CarouselPrevious className="relative static translate-y-0 w-12 h-12" />
                
                {/* Progress Indicators */}
                <div className="flex gap-2">
                  {promotions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setPromoIndex(index);
                        carouselApi?.scrollTo(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === promoIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <CarouselNext className="relative static translate-y-0 w-12 h-12" />
              </div>
            </Carousel>
            
            {/* Auto-play indicator and slide counter */}
            {/* <div className="text-center mt-4">
              <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'
                  }`} />
                  <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                </div>
                <span className="text-xs">
                  {promoIndex + 1} of {promotions.length}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Explore
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.name}`}
                className="group block"
              >
                <Card className="hover:shadow-xl transition-all duration-500 animate-scale-in group-hover:scale-105 min-h-[280px] relative group" 
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    {/* Background Image */}
                    <div className="relative h-48 group-hover:h-32 transition-all duration-500 overflow-hidden">
                      {/* Default Image */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                        loading="lazy"
                      />
                      
                      {/* Hover Image */}
                      {category.hoverImage && (
                        <img
                          src={category.hoverImage}
                          alt={`${category.name} - Hover view`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                          loading="lazy"
                        />
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-2xl transition-transform duration-300 group-hover:scale-110">
                          {category.icon}
                        </div>
                      </div>
                      
                      {/* Product Count Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 transition-transform duration-300 group-hover:scale-105">
                          {category.productCount} items
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-6 relative">
                      {/* Default Content */}
                      <div className="space-y-3 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                        {/* Category Name */}
                        <h3 className="text-xl font-bold text-foreground">
                          {category.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          {category.description}
                        </p>
                      </div>
                      
                      {/* Hover Content */}
                      <div className="absolute inset-0 p-6 pb-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 z-20">
                        <div className="text-center space-y-4">
                          {/* Category Icon */}
                          <div className="text-3xl mb-2">{category.icon}</div>
                          
                          {/* Category Name */}
                          <h3 className="text-lg font-bold text-primary">
                            {category.name}
                          </h3>
                          
                          {/* Quick Stats */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-primary/10 rounded-lg p-3 text-center">
                              <div className="font-bold text-sm text-primary">{category.productCount}</div>
                              <div className="text-xs text-muted-foreground">Products</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-3 text-center">
                              <div className="font-bold text-sm text-primary">{category.popularTags?.length || 0}</div>
                              <div className="text-xs text-muted-foreground">Subcategories</div>
                            </div>
                          </div>
                          {/* Action Button */}
                          <Button 
                            size="lg" 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-3 h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                          >
                            Explore {category.name}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Category Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-bold text-lg">{category.productCount}</div>
                <div className="text-sm text-muted-foreground">{category.name} Products</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Featured</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked favorites from our collection</p>
          </div>
          
          <ProductGrid products={featuredProducts} />
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="btn-primary">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Customer Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg mb-8">Real feedback from our happy customers</p>
            
            {/* Overall Rating Summary */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Based on {testimonials.length} reviews</div>
              </div>
              <div className="h-16 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Would recommend</div>
              </div>
              <div className="h-16 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Avg. response time</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, showAllReviews ? testimonials.length : 3).map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Header with Avatar and Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span>•</span>
                          <span>{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.product}
                    </Badge>
                  </div>
                  
                  {/* Review Content */}
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-primary/30 absolute -top-1 -left-1" />
                    <p className="text-muted-foreground pl-6 leading-relaxed">
                      {testimonial.comment}
                    </p>
                  </div>
                  
                  {/* Helpful Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>Helpful ({testimonial.helpful})</span>
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Reply
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Show More/Less Button */}
          {testimonials.length > 3 && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllReviews(!showAllReviews)}
                variant="outline"
                size="lg"
                className="group transition-all duration-300 hover:shadow-lg"
              >
                <span className="mr-2">
                  {showAllReviews ? 'Show Less' : `Show ${testimonials.length - 3} More Reviews`}
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${showAllReviews ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
              <p className="text-muted-foreground mb-6">
                Help other customers by sharing your thoughts about our products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => setShowReviewModal(true)}
                >
                  Write a Review
                </Button>
                <Button size="lg" variant="outline">
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-muted/20 to-primary/10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Newsletter
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Discover Handmade Magic First
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get behind-the-scenes glimpses of our artisans at work, early access to one-of-a-kind pieces, 
              and heartfelt stories that make each creation special. Because every stitch tells a story.
            </p>
          </div>

          {/* Success Message */}
          {newsletterSuccess && (
            <div className="max-w-md mx-auto mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-green-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Successfully subscribed! Check your email for confirmation.</span>
              </div>
            </div>
          )}

          {/* Enhanced Newsletter Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-lg border-2 border-border/50 rounded-xl bg-background/80 backdrop-blur-sm focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/60"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Interest Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-center text-muted-foreground">
                  What interests you? (Optional)
                </label>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { id: 'new-products', label: 'New Products', icon: '🆕' },
                    { id: 'sales', label: 'Sales & Discounts', icon: '💰' },
                    { id: 'fashion-tips', label: 'Fashion Tips', icon: '💡' },
                    { id: 'exclusive', label: 'Exclusive Offers', icon: '⭐' },
                    { id: 'trends', label: 'Trending Styles', icon: '🔥' }
                  ].map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => toggleInterest(interest.id)}
                      className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm font-medium ${
                        selectedInterests.includes(interest.id)
                          ? 'border-primary bg-primary text-primary-foreground shadow-lg scale-105'
                          : 'border-border/50 bg-background/50 hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <span className="mr-2">{interest.icon}</span>
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isNewsletterSubmitting || !newsletterEmail}
                  size="lg"
                  className="px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {isNewsletterSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Subscribe Now
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive content</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Join thousands of satisfied subscribers</p>
              <div className="flex items-center justify-center gap-8 text-2xl font-bold text-primary">
                <div className="text-center">
                  <div className="text-3xl">15K+</div>
                  <div className="text-sm text-muted-foreground font-normal">Subscribers</div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl">98%</div>
                  <div className="text-sm text-muted-foreground font-normal">Satisfaction</div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl">24h</div>
                  <div className="text-sm text-muted-foreground font-normal">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Writing Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Write a Review</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowReviewModal(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleReviewSubmit} className="p-6 space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Product */}
              <div>
                <label className="block text-sm font-medium mb-2">Product *</label>
                <select
                  required
                  value={reviewForm.product}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, product: e.target.value }))}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a product</option>
                  {featuredProducts.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium mb-2">Rating *</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star 
                        className={`h-8 w-8 ${
                          star <= reviewForm.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300 hover:text-yellow-400'
                        }`} 
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-sm text-muted-foreground">
                    {reviewForm.rating > 0 && `${reviewForm.rating} out of 5 stars`}
                  </span>
                </div>
              </div>

              {/* Review Comment */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Review *</label>
                <textarea
                  required
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Share your experience with this product..."
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum 10 characters. Be honest and helpful to other customers.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || reviewForm.rating === 0}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Review
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowReviewModal(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;