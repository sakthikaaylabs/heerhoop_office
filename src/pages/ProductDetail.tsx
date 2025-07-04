import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Truck, Shield, Clock, CheckCircle, Share2, Eye, ShoppingCart, Package, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/mockData';
import QuantitySelector from '@/components/ui/quantity-selector';
import ProductImageCarousel from '@/components/product/ProductImageCarousel';
import CartActions from '@/components/ui/cart-actions';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState('description');
  
  const product = products.find(p => p.id === id);

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Product link has been copied to clipboard.",
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="hover:text-foreground transition-colors">
          Products
        </Link>
        <span>/</span>
        <Link to={`/products?category=${product.category}`} className="hover:text-foreground transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image Carousel */}
        <div>
          <ProductImageCarousel
            product={product}
            showWishlistButton={true}
            onWishlistToggle={handleWishlistToggle}
            isInWishlist={isInWishlist(product.id)}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category and Title */}
          <div>
            <Badge variant="secondary" className="mb-3">
              {product.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4 leading-tight">{product.name}</h1>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <Badge variant="destructive" className="text-sm">
                  Save {product.discountPercentage}%
                </Badge>
              )}
            </div>
            
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground">
                You save ${(product.originalPrice - product.price).toFixed(2)}
              </p>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              size="sm"
            >
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>

          {/* Product Actions */}
          <div className="space-y-4 pt-6">
            <QuantitySelector product={product} variant="detail" />
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full text-lg py-3"
              onClick={handleWishlistToggle}
            >
              <Heart 
                className={`h-5 w-5 mr-2 transition-colors ${
                  isInWishlist(product.id) 
                    ? 'text-destructive fill-current' 
                    : 'text-muted-foreground'
                }`} 
              />
              {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </Button>
            
            <CartActions product={product} variant="detail" />
          </div>

          {/* Shipping & Returns Info */}
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Easy Returns</p>
                    <p className="text-sm text-muted-foreground">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Fast Delivery</p>
                    <p className="text-sm text-muted-foreground">2-3 business days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                {/* Key Features */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Premium quality materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Handcrafted with care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Unique design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Perfect gift option</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium">Category:</span>
                      <p className="text-muted-foreground">{product.category}</p>
                    </div>
                    <div>
                      <span className="font-medium">Material:</span>
                      <p className="text-muted-foreground">Premium quality</p>
                    </div>
                    <div>
                      <span className="font-medium">Weight:</span>
                      <p className="text-muted-foreground">Lightweight</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium">Dimensions:</span>
                      <p className="text-muted-foreground">Standard size</p>
                    </div>
                    <div>
                      <span className="font-medium">Care Instructions:</span>
                      <p className="text-muted-foreground">Handle with care</p>
                    </div>
                    <div>
                      <span className="font-medium">Warranty:</span>
                      <p className="text-muted-foreground">1 year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button variant="outline" size="sm">
                    Write a Review
                  </Button>
                </div>
                
                {product.rating ? (
                  <div className="space-y-6">
                    {/* Overall Rating */}
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{product.rating}</div>
                        <div className="flex items-center gap-1 mt-1">
                          {renderStars(product.rating)}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {product.reviews} reviews
                        </p>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center gap-2">
                              <span className="text-sm w-8">{star}★</span>
                              <div className="flex-1 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full"
                                  style={{ width: `${(star / 5) * 100}%` }}
                                />
                              </div>
                              <span className="text-sm text-muted-foreground w-12">
                                {Math.round((star / 5) * product.reviews)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Sample Reviews */}
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(5)}
                          <span className="font-medium">Amazing quality!</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          "Absolutely love this product! The quality is outstanding and it arrived quickly. Highly recommend!"
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">- Sarah M.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(4)}
                          <span className="font-medium">Great purchase</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          "Very satisfied with my purchase. The craftsmanship is excellent and it's exactly as described."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">- Mike R.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Shipping & Returns</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Shipping Information</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Free shipping on orders over $50</li>
                      <li>• Standard delivery: 2-3 business days</li>
                      <li>• Express delivery: 1-2 business days (additional fee)</li>
                      <li>• International shipping available</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Return Policy</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 30-day return policy</li>
                      <li>• Return shipping is free</li>
                      <li>• Full refund or exchange</li>
                      <li>• Contact customer service for returns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <Link to={`/products?category=${product.category}`}>
              <Button variant="outline">
                View All {product.category}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover-lift">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    {relatedProduct.discountPercentage && (
                      <Badge className="absolute top-2 left-2 bg-destructive">
                        -{relatedProduct.discountPercentage}%
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-primary">${relatedProduct.price}</span>
                    {relatedProduct.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${relatedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {relatedProduct.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(relatedProduct.rating)}
                      <span className="text-sm text-muted-foreground">
                        ({relatedProduct.reviews})
                      </span>
                    </div>
                  )}
                  
                  <Link to={`/product/${relatedProduct.id}`}>
                    <Button size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <Card className="bg-muted/30">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Premium materials</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Customer First</h3>
              <p className="text-sm text-muted-foreground">24/7 support</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground">SSL protected</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">2-3 days</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;