import React, { useContext } from "react";
import { Button } from "react-native";
import { render, fireEvent, renderHook, act } from "@testing-library/react-native";
import { CartProvider, CartContext } from "./CartContext";
import { ProductType } from "../shared/types";

const imageUrl = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
const product = {
  id: 1,
  title: "Test product",
  price: 12.0,
  description: "Test description",
  category: "Test category",
  image: imageUrl,
  rating: { rate: 3.9, count: 120 },
};

const mockOnPress = jest.fn((p: ProductType) => {
  return;
});

const TestComponent = () => {
  return (
    <Button
      testID="check-cart"
      onPress={() => mockOnPress(product)}
      title="Check Cart"
    />
  );
};

describe("<CartContext />", () => {
  it("should add item to cart", () => {
    const { getByTestId } = render(
      <CartProvider>
        <CartContext.Consumer>
          {(cartContext) => (
            <Button
              testID="add-to-cart"
              onPress={() => cartContext.addItemToCart(product)}
              title="Add to cart"
            />
          )}
        </CartContext.Consumer>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.press(getByTestId("add-to-cart"));
    fireEvent.press(getByTestId("check-cart"));

    expect(mockOnPress).toHaveBeenCalledWith(product);
  });

  it("should return the correct item count", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    expect(result.current.getItemsCount()).toBe(0);

    act(() => {
      result.current.addItemToCart(product);
    });

    expect(result.current.getItemsCount()).toBe(1);

    act(() => {
      result.current.addItemToCart(product);
    });

    expect(result.current.getItemsCount()).toBe(2);
  });

  it("should return total price correctly", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    expect(result.current.getItemsCount()).toBe(0);

    act(() => {
      result.current.addItemToCart(product);
    });

    expect(result.current.getTotalPrice()).toBe(12);

    act(() => {
      result.current.addItemToCart(product);
    });

    expect(result.current.getTotalPrice()).toBe(24);
  });
});
