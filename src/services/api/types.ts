type Rating = {
  rate: number;
  count: number;
};

export type ProductAPI = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};