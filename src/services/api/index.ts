import { useQuery, UseQueryResult } from "react-query";
import axios, { AxiosResponse } from "axios";
import { ProductAPI } from "./types";

const fetchProducts = async (): Promise<AxiosResponse<ProductAPI[]>> => {
  try {
    const { data } = await axios.get("/products");
    return data;
  } catch (_) {
    throw new Error(`Error fetching products.`);
  }
};

export const useProductsList = (): UseQueryResult<ProductAPI[], unknown> =>
  useQuery("products", fetchProducts);

const fetchProduct = async (productId: number): Promise<AxiosResponse<ProductAPI>> => {
  try {
    const { data } = await axios.get(`/products/${productId}`);
    return data;
  } catch (_) {
    throw new Error(`Error fetching product.`);
  }
};

export const useProduct = (productId: number): UseQueryResult<ProductAPI[], unknown> =>
  useQuery(["products", productId], () => fetchProduct(productId));

const PRODUCTS = [
  {
    id: 100,
    name: "ReactProX Headset",
    price: 350,
    image: "https://placekitten.com/200/300",
    description:
      "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
  },
  {
    id: 101,
    name: "FastLane Toy Car",
    price: 600,
    image: "https://placekitten.com/200/300",
    description:
      "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
  },
  {
    id: 102,
    name: "SweetHome Cupcake",
    price: 2,
    image: "https://placekitten.com/200/300",
    description:
      "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProductById(id: number) {
  return PRODUCTS.find((product) => product.id == id);
}
