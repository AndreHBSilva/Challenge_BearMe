import React from "react";
import Corpo from "../corpo/Corpo";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "../../styles.js";

const listaMenu = ['BearMe','Home', 'Nossa Missão', 'Sou Ansioso?'];

export default function Master(){
    return (
        <Container>
            <Header menu={listaMenu}/>
            <Corpo/>
            <Footer/>
        </Container>
    )
}