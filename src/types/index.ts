export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  tags: string[];
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
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