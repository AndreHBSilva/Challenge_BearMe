import React from "react"
import Corpo from "../corpo/Corpo"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const listaMenu = ['BearMe','Home', 'Nossa Missão', 'Sou Ansioso?']

export default function Master(){
    return (
        <div id="container">
            <Header menu={listaMenu}/>
            <Corpo/>
            <Footer/>
        </div>
    )
}