export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export type CartItemType = {
  id: number;
  quantity: number;
  product: ProductType;
  totalPrice: number;
};