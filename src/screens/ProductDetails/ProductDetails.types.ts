import { RouteProp } from "@react-navigation/native";
import { ProductType } from "../../shared/types";

type RootStackParamList = {
  ProductDetails: { productId: number; product: ProductType };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

export type ProductDetailsProps = {
  route: DetailsScreenRouteProp;
};
