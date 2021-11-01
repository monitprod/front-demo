import { Box, TextField } from "@mui/material";
import s from "./Sign.module.scss";
import { H1, Text } from "component/typography/Typography";
import AppButton from "component/button/Button";
import IconSend from "@mui/icons-material/Send";
import { useSign } from "./Sign.hook";
import { User } from "model/user";
import { useState } from "react";

export default function Sign() {
  return (
    <div className={s["Sign-Content"]}>
      <Content />
    </div>
  );
}

function Content() {
  const { isSigned, sign } = useSign();

  if (isSigned === undefined) {
    return <Form sign={sign} />;
  } else if (isSigned === true) {
    return <H1>Sucesso! ✨🎉</H1>;
  } else {
    return <H1>Não foi possível completar a sua chamada! 😥</H1>;
  }
}

function Form({ sign }: { sign: (user: User) => Promise<void> }) {
  const [email, setEmail] = useState("");

  return (
    <>
      <H1 className={s["Form-H1"]}>Assine já! 🎬</H1>
      <Text>
        Receba relatórios sobres os preços de produtos em sua caixa de email
        todos os dias!
      </Text>

      <div>
        <Box className={s["Box-Form-Wrapper"]}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@monitprod.com"
            className={s["TextField"]}
          />

          <AppButton
            onClick={() => {
              sign({ email });
            }}
          >
            <IconSend />
          </AppButton>
        </Box>
      </div>
    </>
  );
}
