import { Product } from "model/product";
import { useState } from "react";
import { fetchProducts } from "./Products.api";

type SetProducts = React.Dispatch<React.SetStateAction<Product[]>>;

async function setStateProduct(setProducts: SetProducts) {
  const response = await fetchProducts();

  setProducts(response.products);
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isStarted, setIsStarted] = useState(false)

  console.log(products)

  if (!isStarted) {
    setStateProduct(setProducts);
    setIsStarted(true)
  }

  return { products, setIsStarted };
}
