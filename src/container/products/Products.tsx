import ProductGrid from "component/product/grid/Grid";
import { H1 } from "component/typography/Typography";
import productsMock from "mock/product.json"
import s from "./Products.module.scss"

export default function Products() {

    return <div>
        <H1 className={s["Products-H1"]}>Produtos</H1>
        <ProductGrid products={productsMock} />
    </div>
}