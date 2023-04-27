import React, { createContext, useState } from "react";
import {
  CartContextProps,
  CartContextProviderProps,
} from "./CartContext.types";
import { CartItemType, ProductType } from "../shared/types";

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CartItemType[]>([]);

  const addItemToCart = (product: ProductType) => {
    if (!product) return;

    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === product.id);
      if (!item) {
        return [
          ...prevItems,
          {
            id: product.id,
            quantity: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id === product.id) {
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
