import { Dispatch, ReactNode, SetStateAction } from "react";
import { CartItemType, ProductType } from "../shared/types";

export type CartContextProps = {
  items: CartItemType[];
  setItems: Dispatch<SetStateAction<CartItemType[]>>;
  getItemsCount: () => number;
  getTotalPrice: () => number;
  addItemToCart: (product: ProductType) => void;
};

export type CartContextProviderProps = {
  children: ReactNode;
};
