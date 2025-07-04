import { Link } from 'react-router-dom';
import { Star, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import QuantitySelector from '@/components/ui/quantity-selector';
import CartActions from '@/components/ui/cart-actions';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  return (
    <Card className="group card-product hover-lift overflow-hidden h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative h-48 flex-shrink-0">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          {product.discountPercentage && (
            <Badge className="absolute top-2 left-2 bg-destructive">
              -{product.discountPercentage}%
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
            onClick={handleWishlistToggle}
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isInWishlist(product.id) 
                  ? 'text-destructive fill-current' 
                  : 'text-muted-foreground'
              }`} 
            />
          </Button>
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>
          
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg mb-2 line-clamp-3 hover:text-primary transition-colors h-20 flex items-start">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {product.rating && (
            <div className="flex items-center gap-1 mb-3 text-sm text-muted-foreground">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{product.rating} ({product.reviews})</span>
            </div>
          )}
          
          <div className="flex items-center justify-center gap-2 mt-auto">
            <QuantitySelector product={product} variant="card" />
            <CartActions product={product} variant="card" />
            {onQuickView && (
              <Button size="icon" variant="outline" onClick={() => onQuickView(product)} aria-label="Quick View">
                <Eye className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;