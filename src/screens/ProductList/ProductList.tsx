import React from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import ProductContainer from "../../components/ProductContainer";
import { ProductListProps } from "./ProductList.types";
import { useProductsList } from "../../services/api/index";
import { ProductType } from "../../shared/types";
import { styles } from "./ProductList.style";
import { Text } from "react-native";

const ProductsList: React.FC<ProductListProps> = ({ navigation }) => {
  const { data, isLoading, isError } = useProductsList();

  if (isLoading) {
    return <Text>loading</Text>;
  }

  if(isError) {
    return <Text>error</Text>;
  }

  const renderProduct: ListRenderItem<ProductType> = (
    info: ListRenderItemInfo<ProductType>
  ) => {
    return (
      <ProductContainer
        name={info.item.title}
        image={info.item.image}
        price={info.item.price}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            product: info.item,
            productId: info.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item: ProductType) => item.id.toString()}
      data={data}
      renderItem={renderProduct}
    />
  );
};

export default ProductsList;
