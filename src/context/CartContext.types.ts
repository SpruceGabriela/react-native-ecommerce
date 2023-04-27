import { Dispatch, ReactNode, SetStateAction } from "react";
import { CartItemType } from "../shared/types";

export type CartContextProps = {
  items: CartItemType[];
  setItems: Dispatch<SetStateAction<CartItemType[]>>;
  getItemsCount: () => number;
  getTotalPrice: () => number;
  addItemToCart: (id: number) => void;
};

export type CartContextProviderProps = {
  children: ReactNode;
};
