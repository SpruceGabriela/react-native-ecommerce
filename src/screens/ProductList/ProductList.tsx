import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import ProductContainer from "../../components/ProductContainer";
import { ProductListProps } from "./ProductList.types";
import { getProducts } from "../../services/api/index";
import { ProductType } from "../../shared/types";
import { styles } from "./ProductList.style";

const ProductsList: React.FC<ProductListProps> = ({ navigation }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  const renderProduct: ListRenderItem<ProductType> = (
    info: ListRenderItemInfo<ProductType>
  ) => {
    return (
      <ProductContainer
        name={info.item.name}
        image={info.item.image}
        price={info.item.price}
        onPress={() => {
          navigation.navigate("ProductDetails", {
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
      data={products}
      renderItem={renderProduct}
    />
  );
};

export default ProductsList;
