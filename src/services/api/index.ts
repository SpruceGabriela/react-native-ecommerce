import { useQuery, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { ProductType } from "../../shared/types";
import api from "..";

const fetchProducts = async (): Promise<AxiosResponse<ProductType[]>> => {
  try {
    const { data } = await api.get("/products");
    return data;
  } catch (error) {
    throw new Error(`Error fetching products. ${error}`);
  }
};

export const useProductsList = (): UseQueryResult<ProductType[], null> =>
  useQuery("products", fetchProducts);

const fetchProduct = async (
  productId: number
): Promise<AxiosResponse<ProductType>> => {
  try {
    const { data } = await api.get(`/products/${productId}`);
    return data;
  } catch (_) {
    throw new Error(`Error fetching product.`);
  }
};

export const useProduct = (
  productId: number
): UseQueryResult<ProductType, unknown> =>
  useQuery(["products", productId], () => fetchProduct(productId));