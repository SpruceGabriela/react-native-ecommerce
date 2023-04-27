import React, { createContext, useState } from "react";
import {
  CartContextProps,
  CartContextProviderProps,
} from "./CartContext.types";
import { CartItemType } from "../shared/types";
import { getProductById } from "../services/api";

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CartItemType[]>([]);

  const addItemToCart = (id: number) => {
    const product = getProductById(id);

    if (!product) return;

    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            quantity: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.quantity++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  };

  const getItemsCount = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
