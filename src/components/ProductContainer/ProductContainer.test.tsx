import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import ProductContainer from "./ProductContainer";

describe("<ProductContainer />", () => {
  const mockOnPress = jest.fn();
  const imageUrl = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

  it("should be defined", () => {
    expect(ProductContainer).toBeDefined();
  });

  it("should render the product container", () => {
    const { getByText } = render(
      <ProductContainer
        name="Test Product"
        price={109.95}
        image={imageUrl}
        onPress={mockOnPress}
      />
    );

    const productName = getByText(/Test Product/i);
    const productPrice = getByText(/109.95/i);

    expect(productName).toBeTruthy();
    expect(productPrice).toBeTruthy();
  });

  it("should be pressable", () => {
    const { getByTestId } = render(
      <ProductContainer
        name="Test Product"
        price={109.95}
        image={imageUrl}
        onPress={mockOnPress}
      />
    );

    const pressable = getByTestId("product-container-pressable");
    fireEvent.press(pressable);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("should display the correct image", () => {
    const { getByTestId } = render(
      <ProductContainer
        name="Test Product"
        price={109.95}
        image={imageUrl}
        onPress={mockOnPress}
      />
    );

    const image = getByTestId("image-container");
    expect(image.props.source.uri).toEqual(imageUrl);
  });
});
