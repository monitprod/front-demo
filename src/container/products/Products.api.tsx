import productsMock from "mock/product.json";
import { Product } from "model/product";
import { mockWrapper } from "util/mock";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_PRODUCTS = `${API_URL}/products`;

export interface ProductsResponse {
  products: Product[];
}

export async function fetchProducts(): Promise<ProductsResponse> {
  const mock = await mockWrapper<Product[]>(productsMock)

  if (mock) {
    return { products: mock }
  }

  const response = await fetch(API_URL_PRODUCTS);

  return response.json();
}