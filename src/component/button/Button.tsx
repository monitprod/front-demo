import s from "./Button.module.scss"
import MuiButton from "@mui/material/Button";

interface ButtonProps extends React.ComponentProps<typeof MuiButton> {
}

export default function Button(props: ButtonProps ) {
    return <div>
       <MuiButton className={s["Button"]} variant="contained" color="primary"  {...props} />
    </div>
}
