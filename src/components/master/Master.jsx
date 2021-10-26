import React from "react";
import Corpo from "../corpo/Corpo";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import GlobalFonts from "../../styles.js";
import { Container } from "../../styles.js";

const listaMenu = ['BearMe','Home', 'Nossa Missão', 'Sou Ansioso?'];

export default function Master(){
    return (
        <Container>
            <GlobalFonts />
            <Header menu={listaMenu}/>
            <Corpo/>
            <Footer/>
        </Container>
    )
}