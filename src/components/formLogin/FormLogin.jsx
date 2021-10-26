// import { useState } from "react"

export default function FormLogin(props) {

  // const [isLogado, setIsLogado] = useState(true);

  // let usuario = {
  //   "nickname": "",
  //   "email": "",
  //   "senha": "",
  //   "dataNascimento": new Date().toLocaleDateString('pr-br')
  // }

  // let convidado;

  const handleSubmit = e => {
    e.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>{props.header}</h2>
      {props.isConvidado ?
        <>
          <input type="text" placeholder="Nickname"></input>
        </>
      : <>
          <input type="text" placeholder="E-mail"></input>
          <input type="password" placeholder="Senha"></input> 
        </>
      }
      <input type="submit" value="Entrar" />
    </form>
  )
}