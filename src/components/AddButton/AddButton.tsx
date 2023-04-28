import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { CartContext } from "../../context/CartContext";
import { AddButtonProps } from "./AddButton.types";
import { styles } from "./AddButton.style";

const AddButton: React.FC<AddButtonProps> = ({ product }) => {
  const { addItemToCart, removeItemFromCart, isInCart } =
    useContext(CartContext);

  const handlePress = () => {
    if (isInCart(product)) {
      removeItemFromCart(product);
    } else {
      addItemToCart(product);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={isInCart(product) ? styles.removeButton : styles.addButton}
        onPress={handlePress}
      >
        <Text style={styles.text}>
          {isInCart(product) ? "Remove from Cart" : "Add to Cart"}
        </Text>
      </Pressable>
    </View>
  );
};

export default AddButton;
