import { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/types';

interface WishlistContextType {
  wishlistItems: Product[];
  wishlistCount: number;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; product: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; productId: string }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; items: Product[] };

function wishlistReducer(state: Product[], action: WishlistAction): Product[] {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.find(item => item.id === action.product.id)) {
        return state;
      }
      return [...state, action.product];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.productId);
    case 'CLEAR_WISHLIST':
      return [];
    case 'LOAD_WISHLIST':
      return action.items;
    default:
      return state;
  }
}

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlistItems, dispatch] = useReducer(wishlistReducer, []);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('heer-hoop-wishlist');
    if (savedWishlist) {
      dispatch({ type: 'LOAD_WISHLIST', items: JSON.parse(savedWishlist) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('heer-hoop-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', product });
  };

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', productId });
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const value: WishlistContextType = {
    wishlistItems,
    wishlistCount: wishlistItems.length,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};