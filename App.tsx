import React from "react";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./src/context/CartContext";
import ProductsList from "./src/screens/ProductList/ProductList";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";
import Cart from "./src/screens/Cart/Cart";
import CartIcon from "./src/components/CartIcon/CartIcon";
import { ProductType } from "./src/shared/types";

type RootStackParamList = {
  Products: {};
  ProductDetails: { productId: number; product: ProductType };
  Cart: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Products"
              component={ProductsList}
              options={({ navigation }) => ({
                title: "Products",
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({ navigation }) => ({
                title: "Product details",
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={({ navigation }) => ({
                title: "My cart",
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
