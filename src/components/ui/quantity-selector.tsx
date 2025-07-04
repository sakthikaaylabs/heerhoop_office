import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types';

interface QuantitySelectorProps {
  product: Product;
  variant?: 'card' | 'detail';
}

const QuantitySelector = ({ product, variant = 'card' }: QuantitySelectorProps) => {
  const { items, updateQuantity, addItem } = useCart();
  const { toast } = useToast();
  
  const cartItem = items.find(item => item.product.id === product.id);
  const currentQuantity = cartItem?.quantity || 0;

  const handleIncrease = () => {
    if (currentQuantity === 0) {
      addItem(product);
      toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your cart.`,
        action: (
          <a href="/cart" className="text-primary hover:underline">
            View Cart
          </a>
        ),
      });
    } else {
      updateQuantity(product.id, currentQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (currentQuantity > 0) {
      updateQuantity(product.id, currentQuantity - 1);
    }
  };

  if (variant === 'card') {
    return (
      <>
        {currentQuantity > 0 ? (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecrease}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Badge variant="secondary" className="min-w-[2rem] text-center">
              {currentQuantity}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={handleIncrease}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        ) : (
          <Button 
            onClick={handleIncrease}
            className="w-full btn-primary"
            size="sm"
          >
            Add to Cart
          </Button>
        )}
      </>
    );
  }

  // Detail variant
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={handleDecrease}
            disabled={currentQuantity === 0}
            className="h-12 w-12 p-0"
          >
            <Minus className="h-5 w-5" />
          </Button>
          <Badge variant="secondary" className="min-w-[3rem] text-center text-lg px-4 py-2">
            {currentQuantity}
          </Badge>
          <Button
            variant="outline"
            size="lg"
            onClick={handleIncrease}
            className="h-12 w-12 p-0"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        
        {currentQuantity === 0 && (
          <Button 
            onClick={handleIncrease}
            size="lg" 
            className="btn-primary text-lg py-3"
          >
            Add to Cart - ${product.price}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuantitySelector; 