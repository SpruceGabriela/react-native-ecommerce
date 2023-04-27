import React, { useContext } from "react";
import { View, Text } from "react-native";
import { CartContext } from "../../context/CartContext";
import { CartIconProps } from "./Carticon.types";
import { styles } from "./CartIcon.style";

const CartIcon: React.FC<CartIconProps> = ({ navigation }) => {
  const { getItemsCount } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
};

export default CartIcon;
