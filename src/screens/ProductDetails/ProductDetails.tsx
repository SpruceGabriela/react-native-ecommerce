import React, { useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import { CartContext } from "../../context/CartContext";
import { useProduct } from "../../services/api";
import { ProductDetailsProps } from "./ProductDetails.types";
import { styles } from "./ProductDetails.style";

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { productId, product } = route.params;
  const { data, isLoading, isError } = useProduct(productId);

  const { addItemToCart } = useContext(CartContext);

  if (isLoading) {
    return <Text>loading</Text>;
  }

  if (isError) {
    return <Text>error</Text>;
  }

  const onAddToCart = () => {
    if (data) {
      addItemToCart(product);
    }
  };

  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Image style={styles.image} source={{ uri: data.image }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{data.title}</Text>
            <Text style={styles.price}>$ {data.price.toFixed(2)}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Button onPress={onAddToCart} title="Add to cart" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return <Text style={styles.name}>error</Text>;
};

export default ProductDetails;
