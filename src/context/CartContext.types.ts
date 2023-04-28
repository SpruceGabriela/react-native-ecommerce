import { Dispatch, ReactNode, SetStateAction } from "react";
import { CartItemType, ProductType } from "../shared/types";

export type CartContextProps = {
  items: CartItemType[];
  setItems: Dispatch<SetStateAction<CartItemType[]>>;
  getItemsCount: () => number;
  getTotalPrice: () => number;
  addItemToCart: (product: ProductType) => void;
  decrementItemQuantity: (product: ProductType) => void;
  removeItemFromCart: (product: ProductType) => void;
  isInCart: (product: ProductType) => boolean;
};

export type CartContextProviderProps = {
  children: ReactNode;
};
