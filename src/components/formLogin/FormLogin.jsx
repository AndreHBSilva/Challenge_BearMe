import { useState } from "react"
import Button from "../button/Button";

export default function Form(props) {


  const [isLogado, setIsLogado] = useState(true);

  return(
    <div>
      <form action={props.action} method={props.method} id={props.id}>
        <h1>{props.titulo}</h1>
        <input type="text" placeholder="Nickname"></input>
      </form>
      <Button type="submit" form={props.id} value="Submit" bg="linear"> Entrar </Button>
      {/* <button type="submit" form="login-anonimo" value="Submit">Entrar</button> */}
    </div>
  )
}