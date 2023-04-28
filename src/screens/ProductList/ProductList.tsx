import React from "react";
import {
  FlatList,
  View,
} from "react-native";
import ProductContainer from "../../components/ProductContainer";
import { ProductListProps } from "./ProductList.types";
import { useProductsList } from "../../services/api/index";
import { ProductType } from "../../shared/types";
import { styles } from "./ProductList.style";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsList: React.FC<ProductListProps> = ({ navigation }) => {
  const { data, isLoading, isError } = useProductsList();

  if (isLoading) {
    return <Text>loading</Text>;
  }

  if (isError) {
    return <Text>error</Text>;
  }

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <FlatList
        keyExtractor={(item: ProductType) => item.id.toString()}
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "column", margin: 6 }}>
            <ProductContainer
              name={item.title}
              image={item.image}
              price={item.price}
              onPress={() => {
                navigation.navigate("ProductDetails", {
                  product: item,
                  productId: item.id,
                });
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductsList;
