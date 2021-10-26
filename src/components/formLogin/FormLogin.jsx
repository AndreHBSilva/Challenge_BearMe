import { useState } from "react"
import Button from "../button/Button";

export default function FormLogin(props) {

  const [isLogado, setIsLogado] = useState(true);


  return(
    <form>
    <h2>{props.header}</h2>
    {props.isConvidado ?
      <input type="text" placeholder="Nickname"></input>
     : <input type="text" placeholder="E-mail"></input>
      <input type="password" placeholder="Senha"></input> }
     <Button> Entrar </Button>
    </form>
  )
}