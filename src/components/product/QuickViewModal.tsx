import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import QuantitySelector from '@/components/ui/quantity-selector';
import CartActions from '@/components/ui/cart-actions';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';

interface QuickViewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
}

const QuickViewModal = ({ open, onOpenChange, product }: QuickViewModalProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle>Quick View</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={product.images?.[0] || product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
          {/* Product Info */}
          <div className="flex-1 flex flex-col gap-3">
            <Badge variant="secondary" className="mb-1 w-fit">{product.category}</Badge>
            <h2 className="text-xl font-bold mb-1 line-clamp-2">{product.name}</h2>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              {product.discountPercentage && (
                <Badge variant="destructive" className="text-xs">-{product.discountPercentage}%</Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-2">{product.description}</p>
            <div className="flex items-center gap-2 mt-auto">
              <QuantitySelector product={product} variant="card" />
              <CartActions product={product} variant="card" />
              <Button
                variant={isInWishlist(product.id) ? 'destructive' : 'outline'}
                size="icon"
                onClick={handleWishlistToggle}
                aria-label="Toggle wishlist"
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal; 