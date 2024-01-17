export class Product {
  id: number;
  name: string;
  is_in_inventory: boolean;
  price: number;
  description: string;
  category: string;
  imageURL: string;
  rating: {
    rate: number,
    count: number
  };
}