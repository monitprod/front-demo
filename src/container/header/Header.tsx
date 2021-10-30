import { Box, Button, Toolbar } from "@material-ui/core";
import {ReactComponent as Logo}  from "asset/Logo.svg"
import s from "./Header.module.scss"

export default function Header() {
    return <div className={s["Header"]}>
        <Toolbar>
            <Logo />

            <Box sx={{ flexGrow: 1 }} />

            <Button color="inherit">🔥 Assinar</Button>

        </Toolbar>
        
    </div>
}