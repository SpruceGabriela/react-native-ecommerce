import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { CartContext } from "../../context/CartContext";
import { QuickAddProps } from "./QuickAdd.types";
import { styles } from "./QuickAdd.style";

const QuickAdd: React.FC<QuickAddProps> = ({ product, quantity }) => {
  const { addItemToCart, decrementItemQuantity } =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => addItemToCart(product)} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
      <Pressable
        onPress={() => decrementItemQuantity(product)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

export default QuickAdd;
