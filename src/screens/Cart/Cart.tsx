import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
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
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  };

  const renderItem: ListRenderItem<CartItemType> = (
    info: ListRenderItemInfo<CartItemType>
  ) => {
    if (info.item.product) {
      return (
        <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>
            {info.item.product.title} x {info.item.quantity}
          </Text>
          <Text style={styles.lineRight}>$ {info.item.totalPrice}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
};

export default Cart;
