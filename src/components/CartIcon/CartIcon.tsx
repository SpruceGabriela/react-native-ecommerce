import React, { useContext } from "react";
import { View, Text } from "react-native";
import { CartContext } from "../../context/CartContext";
import { CartIconProps } from "./Carticon.types";
import { styles } from "./CartIcon.style";
import Icon from "react-native-vector-icons/FontAwesome";

const CartIcon: React.FC<CartIconProps> = ({ navigation }) => {
  const { getItemsCount, items } = useContext(CartContext);

  const handleNavigate = () => {
    if (items.length) {
      navigation.navigate("Cart");
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.text}>{getItemsCount()}</Text>
      </View>
      <Icon
        name="shopping-cart"
        color="lightgray"
        size={30}
        onPress={handleNavigate}
      />
    </View>
  );
};

export default CartIcon;
