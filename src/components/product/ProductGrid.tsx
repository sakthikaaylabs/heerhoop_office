import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

const ProductGrid = ({ products, onQuickView }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
      {products.map((product) => (
        <div key={product.id} className="animate-fade-in">
          <ProductCard product={product} onQuickView={onQuickView} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;