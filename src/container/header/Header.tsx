import React, {useState} from "react";
import { Box,  TextField,  Toolbar } from "@mui/material";
import {ReactComponent as Logo}  from "asset/Logo.svg"
import Modal from "component/modal/Modal";
import s from "./Header.module.scss"
import { H1, Text } from "component/typography/Typography";
import Button from "@mui/material/Button";
import AppButton from "component/button/Button";
import IconSend from "@mui/icons-material/Send";

export default function Header() {
    const [open, setOpen] = useState(false)

    return <div className={s["Header"]}>
        <Toolbar>
            <Logo />

            <Box sx={{ flexGrow: 1 }} />

            <Button color="inherit" onClick={() => setOpen(true)}>🔥 Assinar</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={{textAlign: "center"}}>
                    <H1>Assine já!</H1>
                    <Text>Receba relatórios sobres os preços de produtos em sua caixa de email todos os dias!</Text>
                </div>
                <div>
                    <Box className={s["Box-Form-Wrapper"]}>
                        <TextField placeholder="exemplo@monitprod.com" className={s["TextField"]} />
                        
                        <AppButton> 
                            <IconSend/>                       
                        </AppButton>
                    </Box>
                </div>
            </Modal>
        </Toolbar>
        
    </div>
}