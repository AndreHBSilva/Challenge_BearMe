import React from 'react';
import './Header.css';
import Bm from '../../img/bear.png';
import { StyledHeader } from '../../styles.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkMenu  = styled(Link)`
   text-decoration: none;  
   cursor: pointer;
   color: silver;
`;

export default function Header(props) {
    return (
        <StyledHeader>

            <div className="menu-principal">
                <div className="card bear-me"><img className="imagem" src={Bm} alt="" /></div>
                <div className="card bear-me"><LinkMenu className="link" to='/home'>{props.menu[0]}</LinkMenu></div>
                <div className="card links">
                    <ul>
                        <li><LinkMenu className="link" to='/home'>{props.menu[1]}</LinkMenu></li>
                        <li><LinkMenu className="link" to='/nossa_missao'>{props.menu[2]}</LinkMenu></li>
                        <li><LinkMenu className="link" to='/sou_ansioso'>{props.menu[3]}</LinkMenu></li>
                    </ul>             
                </div>
            </div>
            <div className="menu-login">
                <div className="sub">Caso ainda nao tenha um cadastro, registre-se&nbsp; <a href="/"> aqui.</a></div>
                <div className="sub"><button className="btn entra">Entrar</button></div>
                <div className="sub"><button className="btn entra2">Entrar Anonimo</button></div>
            </div>
        </StyledHeader>

    )
}