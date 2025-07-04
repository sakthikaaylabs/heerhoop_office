import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Award, Truck, Shield, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Handmade with Love",
      description: "Every piece is crafted with care and attention to detail, ensuring unique and meaningful creations."
    },
    {
      icon: Star,
      title: "Quality First",
      description: "We never compromise on quality, using only the finest materials and techniques."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting local artisans and building meaningful connections with our customers."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our business, from design to customer service."
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick and reliable delivery to your doorstep"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data and payments are always protected"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "We're here to help whenever you need us"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face",
      bio: "Passionate about bringing unique handmade creations to life."
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Ensuring smooth operations and exceptional customer experience."
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Creating beautiful designs that tell meaningful stories."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop&crop=center"
            alt="Young girl working with embroidery and needlework"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-800/70 to-orange-700/80"></div> */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Heart className="h-5 w-5 text-pink-200" />
            <Badge variant="secondary" className="bg-white/20 text-white border-0">About Heer Hoop</Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-200 to-orange-200 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Where passion meets craftsmanship, and every piece tells a story of love, creativity, and meaningful connections
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-pink-200">
              <Star className="h-5 w-5" />
              <span className="text-sm font-medium">Handcrafted with Love</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-orange-200">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Community Driven</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full opacity-20"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Heer Hoop, we believe that every piece of jewelry should be more than just an accessory. 
                It should be a reflection of your personality, a celebration of your journey, and a connection 
                to something meaningful.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We started with a simple idea: to create beautiful, handmade pieces that bring joy and meaning 
                to everyday life. Today, we're proud to offer a curated collection of unique creations, each 
                crafted with love and attention to detail.
              </p>
              <Link to="/products">
                <Button size="lg" className="btn-primary">
                  Explore Our Collection
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Handmade jewelry workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-product hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Heer Hoop?</h2>
            <p className="text-muted-foreground text-lg">We're committed to providing the best experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-product hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">The passionate people behind Heer Hoop</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-product hover-lift text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Piece?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Discover our collection of handmade wonders and find the piece that speaks to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="btn-primary">
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 