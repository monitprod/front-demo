import ProductGrid from "component/product/grid/Grid";
import { H1 } from "component/typography/Typography";
import { useProducts } from "./Products.hook";
import s from "./Products.module.scss";

export default function Products() {
  const { products } = useProducts();

  return (
    <div>
      <H1 className={s["Products-H1"]}>Produtos</H1>
      <ProductGrid products={products} />
    </div>
  );
}
