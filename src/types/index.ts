export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  description: string;
  image: string;
  images?: string[];
  category: string;
  tags: string[];
  featured?: boolean;
  rating?: number;
  reviews?: number;
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  hoverImage?: string;
  description?: string;
  productCount?: number;
  popularTags?: string[];
  icon?: string;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  deliveryDate: Date;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  orderDetails: OrderDetails;
  date: Date;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}