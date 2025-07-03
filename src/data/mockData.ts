import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    discountPercentage: 25,
    description: 'High-quality wireless headphones with noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    tags: ['wireless', 'noise-cancelling', 'premium', 'bluetooth'],
    featured: true,
    rating: 4.8,
    reviews: 256
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 189,
    description: 'Elegant minimalist watch with leather strap and Swiss movement. Timeless design that complements any outfit.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Fashion',
    tags: ['watch', 'minimalist', 'leather', 'swiss'],
    featured: true,
    rating: 4.6,
    reviews: 142
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    price: 149,
    originalPrice: 199,
    discountPercentage: 25,
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your workouts and health metrics.',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
    category: 'Sports',
    tags: ['fitness', 'smart', 'gps', 'health'],
    featured: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: '4',
    name: 'Artisan Coffee Mug',
    price: 29,
    description: 'Handcrafted ceramic coffee mug with unique glaze finish. Perfect for your morning coffee ritual.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop',
    category: 'Home & Garden',
    tags: ['ceramic', 'handmade', 'coffee', 'artisan'],
    rating: 4.7,
    reviews: 73
  },
  {
    id: '5',
    name: 'Premium Laptop Bag',
    price: 89,
    description: 'Durable laptop bag with multiple compartments and waterproof material. Designed for modern professionals.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Fashion',
    tags: ['laptop', 'bag', 'waterproof', 'professional'],
    rating: 4.4,
    reviews: 156
  },
  {
    id: '6',
    name: 'Wireless Bluetooth Speaker',
    price: 79,
    originalPrice: 99,
    description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery life. Perfect for outdoor adventures.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'Electronics',
    tags: ['bluetooth', 'speaker', 'portable', 'wireless'],
    rating: 4.3,
    reviews: 201
  },
  {
    id: '7',
    name: 'Succulent Plant Set',
    price: 35,
    description: 'Set of 3 beautiful succulent plants in modern ceramic pots. Easy to care for and perfect for any space.',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop',
    category: 'Home & Garden',
    tags: ['plants', 'succulent', 'ceramic', 'indoor'],
    rating: 4.9,
    reviews: 94
  },
  {
    id: '8',
    name: 'Running Shoes',
    price: 129,
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh upper. Designed for serious runners.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'Sports',
    tags: ['running', 'shoes', 'lightweight', 'cushioning'],
    rating: 4.6,
    reviews: 178
  }
];