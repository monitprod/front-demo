import { User } from "model/user";
import { useState } from "react";
import { postSign } from "./Sign.api";

type SetSign = React.Dispatch<React.SetStateAction<Boolean | undefined>>

async function setState(set: SetSign, user: User) {
    const response = await postSign(user)
    set(response);
}

export function useSign() {
  const [isSigned, setSign] = useState<Boolean | undefined>(undefined);

  return { 
    isSigned, 
    sign: (user: User) => setState(setSign, user) 
  };
}