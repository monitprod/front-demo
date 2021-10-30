import { Typography } from "@material-ui/core"

interface TypographyProps extends React.ComponentProps<typeof Typography> {

}

export function H1(props: TypographyProps) {
    return <Typography {...props} variant="h1"  />
}


export function H2(props: TypographyProps) {

    return <Typography {...props} variant="h2" />
}

export function Sub(props: TypographyProps) {
    return <Typography {...props} variant="subtitle1" />
}

export function Price(props: TypographyProps) {
    return <Typography {...props} variant="price" />
}