
import { Product } from "model/product";
import { useState } from "react";
import { fetchProducts } from "./Products.api";

type SetProducts = React.Dispatch<React.SetStateAction<Product[]>>

async function setStateProduct(setProducts: SetProducts) {
    const response = await fetchProducts()

    return setProducts(response.products);
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  setStateProduct(setProducts)

  return { products };
}