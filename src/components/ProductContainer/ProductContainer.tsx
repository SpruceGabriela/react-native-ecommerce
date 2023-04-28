import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { ProductContainerProps } from "./ProductContainer.types";
import { styles } from "./ProductContainer.style";
import AddButton from "../AddButton/AddButton";

const ProductContainer: React.FC<ProductContainerProps> = ({
  name,
  price,
  image,
  onPress,
  product,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      testID="product-container-pressable"
    >
      <Image
        style={styles.thumb}
        source={{ uri: image }}
        testID="image-container"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name.slice(0, 10)}</Text>
        <Text style={styles.price}>$ {price.toFixed(2)}</Text>
      </View>
      <AddButton product={product} />
    </TouchableOpacity>
  );
};

export default ProductContainer;
