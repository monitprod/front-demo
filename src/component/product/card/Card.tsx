import s from './Card.module.scss'

import Image from 'material-ui-image'
import { Product } from "model/product";
import { H2, Sub, Price } from 'component/typography/Typography';

interface CardProps {
    product: Product
}

export default function Card({product}: CardProps) {
    const { title, specification, price, source } = product
    const { imageUrl } = source
    
    return <div className={s["Card"]}>
        <div>
            <div>
                <Image 
                    src={imageUrl} 
                    className={s["Card-Image"]}
                    style={ {paddingTop: "60%"}} 
                    cover={true} 
                    animationDuration={3000} />
            </div>
            <div className={s["Text-wrapper"]}>
                <H2 className={s["H2"]}>{limitText(title, 20, "...")}</H2>
                <Sub className={s["Sub"]}>{limitText(specification, 45, "...")}</Sub>
                <Price>R$ {formatPrice(price.value)}</Price>
            </div>
        </div>
    </div>
}

function formatPrice(value: number) {
    return (value / 100).toLocaleString("PT-BR", 
    {
        maximumFractionDigits: 2, 
        minimumFractionDigits: 2
    })
}

function limitText(text: string, limit: number, suffix = "") {
    if (!(limit + suffix.length - 1 < (text.length))){ 
        suffix = ""
    }

    return text.substr(0, limit - suffix.length).trim() + suffix
}