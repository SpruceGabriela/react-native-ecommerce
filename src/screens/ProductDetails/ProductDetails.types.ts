import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  ProductDetails: { productId: number };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

export type ProductDetailsProps = {
  route: DetailsScreenRouteProp;
};
