import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  ScrollView,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import { CartContext } from "../../context/CartContext";
import { CartProps } from "./Cart.types";
import { CartItemType } from "../../shared/types";
import { styles } from "./Cart.styles";

const Cart: React.FC<CartProps> = () => {
  const { items, getTotalPrice } = useContext(CartContext);

  const Totals = () => {
    let [total, setTotal] = useState(0);

    useEffect(() => {
      setTotal(getTotalPrice());
    });

    return (
      <View style={styles.cartLineTotal}>
        <View style={styles.row}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>$ {total}</Text>
        </View>
        <Button onPress={() => {}} title="Place Order" />
      </View>
    );
  };

  const renderItem: ListRenderItem<CartItemType> = (
    info: ListRenderItemInfo<CartItemType>
  ) => {
    if (info.item.product) {
      return (
        <View style={styles.cartLine}>
          <Image
            style={styles.image}
            source={{ uri: info.item.product.image }}
          />
          <View style={styles.productInfo}>
            <Text style={styles.lineLeft}>
              {info.item.product.title.slice(0, 15)}... x {info.item.quantity}
            </Text>
            <Text style={styles.lineRight}>$ {info.item.totalPrice}</Text>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.itemsList}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
      />
      <Totals />
    </SafeAreaView>
  );
};

export default Cart;
