
import ModalUnstyled from "@mui/core/ModalUnstyled"
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import s from "./Modal.module.scss"

interface ModalProps {
    children: React.ReactNode
    open: boolean
    onClose?: ((event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void)
}

export default function Modal({children, open, onClose}: ModalProps ) {
    return <div >
        <ModalUnstyled 
            open={open}
            onClose={onClose}
            className={s["Modal"]} 
            BackdropComponent={Backdrop}
        >
            <div className={s["Box"]} >
                <div className={s["Icon-wrapper"]}>
                    <IconButton sx={{ color: "black" }} aria-label="close" onClick={(e) => onClose && onClose(e, "backdropClick")}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                
                {children}
            </div>
        </ModalUnstyled>
    </div>
}

function Backdrop(props: JSX.Element) {
    return <div {...props} className={s["Backdrop"]}  />
} 