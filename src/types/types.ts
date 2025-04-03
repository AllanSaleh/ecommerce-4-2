export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type Category = string;