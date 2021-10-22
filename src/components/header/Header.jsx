import React from 'react'
import './Header.css'
import Bm from '../../img/bear.png'

export default function Header(props){

    const isLogado = true;

        return (
            <div className="container-header">
                <header>
                    <nav >
                        <div className="menuPrincipal">
                        
                            <ul>
                            
                                <div className="bear-me">
                                    <li><img src={Bm} alt="" /></li>
                                    <li> <a href="#">{props.menu[0]}</a></li>
                                </div>
                                
                                <div className="links">
                                    <li><a href="#">{props.menu[1]}</a></li>
                                    <li><a href="#">{props.menu[2]}</a></li>
                                    <li><a href="#">{props.menu[3]}</a></li>
                                </div>
                            </ul>
                        </div>
                    </nav>
    
                    <div className="div-entra">
                        Caso ainda nao tenha um cadastro, registre-se&nbsp; <a href="#"> aqui.</a>
                        <button className="btnentra">{!isLogado ? "Entrar" : "Entrar Anônimo"}</button>
                        {/* {!logado ? <button className="btnentra">Entrar</button> : <button className="btnentra2">Entrar Anonimo</button>} */}
                        {/* <button className="btnentra">Entrar</button>
                        <button className="btnentra2">Entrar Anonimo</button> */}
                    </div>
                </header>
            </div>
    
        )

}