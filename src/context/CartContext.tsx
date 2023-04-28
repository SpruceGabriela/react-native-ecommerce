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

  const removeItemFromCart = (product: ProductType) => {
    if (!product) return;

    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== product.id);
      if (!updatedItems) {
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
        return [
          ...updatedItems
        ];
      }
    });
  };

  const decrementItemQuantity = (product: ProductType) => {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === product.id);
      if (!item) {
        return prevItems;
      } else {
        if (item.quantity === 1) {
          return prevItems.filter((item) => item.id !== product.id);
        } else {
          return prevItems.map((item) => {
            if (item.id === product.id) {
              item.quantity--;
              item.totalPrice -= product.price;
            }
            return item;
          });
        }
      }
    });
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const getItemsCount = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const isInCart = (product: ProductType): boolean => {
    return items.some((item) => item.id === product.id);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        decrementItemQuantity,
        removeItemFromCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
