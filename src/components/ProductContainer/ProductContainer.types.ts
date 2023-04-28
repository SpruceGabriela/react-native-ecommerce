import { ProductType } from "../../shared/types";

export type ProductContainerProps = {
  name: string;
  price: number;
  image: string;
  onPress: () => void;
  product: ProductType;
};
