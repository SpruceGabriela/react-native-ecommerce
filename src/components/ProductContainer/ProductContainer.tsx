import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { ProductContainerProps } from "./ProductContainer.types";
import { styles } from "./ProductContainer.style";

const ProductContainer: React.FC<ProductContainerProps> = ({
  name,
  price,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductContainer;
