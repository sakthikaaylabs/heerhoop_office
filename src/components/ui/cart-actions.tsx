import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';

interface CartActionsProps {
  product?: Product;
  variant?: 'card' | 'detail';
  className?: string;
}

const CartActions = ({ product, variant = 'card', className = '' }: CartActionsProps) => {
  const { items, itemCount } = useCart();
  
  // Check if this specific product is in the cart
  const isProductInCart = product ? items.some(item => item.product.id === product.id) : false;
  
  // Only show if there are items in cart AND this specific product is in cart
  if (itemCount === 0 || !isProductInCart) {
    return null;
  }

  if (variant === 'card') {
    return (
      <Link to="/cart" className="block">
        <Button variant="outline" size="sm" className="w-full">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart ({itemCount})
        </Button>
      </Link>
    );
  }

  // Detail variant
  return (
    <div className={`space-y-3 ${className}`}>
      <Link to="/cart" className="block">
        <Button variant="outline" size="lg" className="w-full">
          <ShoppingCart className="h-5 w-5 mr-2" />
          View Cart ({itemCount} items)
        </Button>
      </Link>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>Free shipping on orders over $50</p>
      </div>
    </div>
  );
};

export default CartActions; 
