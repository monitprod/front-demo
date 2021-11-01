import {useState} from "react";
import { Box, Toolbar } from "@mui/material";
import {ReactComponent as Logo}  from "asset/Logo.svg"
import Modal from "component/modal/Modal";
import s from "./Header.module.scss"
import Button from "@mui/material/Button";
import SignModal from "container/sign/Sign";

export default function Header() {
    const [open, setOpen] = useState(false)

    return <div className={s["Header"]}>
        <Toolbar>
            <Logo />

            <Box sx={{ flexGrow: 1 }} />

            <Button color="inherit" onClick={() => setOpen(true)}>🔥 Assinar</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
               <SignModal/>
            </Modal>
        </Toolbar>
        
    </div>
}