import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import { CartContext } from "../../context/CartContext";
import { getProductById } from "../../services/api";
import { ProductType } from "../../shared/types";
import { ProductDetailsProps } from "./ProductDetails.types";
import { styles } from "./ProductDetails.style";

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<ProductType>();

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProductById(productId));
  });

  function onAddToCart() {
    if (product) {
      addItemToCart(product.id);
    }
  }

  if (product) {
    return (
      <SafeAreaView>
        <ScrollView>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Button onPress={onAddToCart} title="Add to cart" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return <Text style={styles.name}>error</Text>;
};

export default ProductDetails;
