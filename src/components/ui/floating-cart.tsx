import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const FloatingCart = () => {
  const { itemCount } = useCart();

  if (itemCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <Link to="/cart">
        <Button 
          size="lg" 
          className="btn-primary rounded-full h-16 w-16 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            <Badge 
              variant="destructive" 
              className="absolute -top-3 -right-3 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold"
            >
              {itemCount}
            </Badge>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCart; 