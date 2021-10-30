import s from "./Grid.module.scss"
import { Product } from "model/product";
import ProductCard from "../card/Card";

interface GridProps {
    products: Product[]
}

export default function Grid({products}: GridProps ) {
    return <div className={s["Grid"]}>
        {products.map(
            product => 
                <ProductCard product={product}/>
        )}
    </div>
}