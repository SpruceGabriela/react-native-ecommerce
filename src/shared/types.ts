type Rating = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type CartItemType = {
  id: number;
  quantity: number;
  product: ProductType;
  totalPrice: number;
};
