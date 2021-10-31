import React from "react";
import s from "./TextField.module.scss"

import Input from '@mui/material/Input'

interface TextFieldProps {
    children: React.ReactNode
}

export default function TextField({children}: TextFieldProps ) {
    
    return <div>
       <Input></Input>
    </div>
}
