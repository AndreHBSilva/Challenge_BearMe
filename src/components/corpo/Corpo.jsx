import React from "react"
import './Corpo.css'
import Techbot from '../../img/techbot.jpeg'
import Asmr from '../../img/asmr.jpeg'
import Agenda from '../../img/agenda.jpeg'

export default function Corpo(){
    return (

            <body>
                <h3>Voce está prestes a dar o primeiro passo, na busca do seu auto controle:</h3>
                <h5>Através de práticas simples, o Bear te auxiliará na sua jornada! Conte com ele se voce precisar de um bom ouvinte, aproveite e organize algumas tarefas do seu dia, afinal voce sabia que a organização das tarefas diárias ajuda no combate à Ansiedade? E se precisar de uns minutos de paz, disponibilizamos uma serie de vídeos guiados para auxiliar na sua meditação.</h5>
                <div className="corpo">
                        <div className="assistente">
                            <img className="img1" src={Techbot} alt="" />
                        </div>
                        <div className="agenda">
                           <img className="img2" src={Agenda} alt="" />
                        </div>
                        <div className="asmr">
                            <img className="img3" src={Asmr} alt="" />
                        </div>
                    </div>
                    <div className="opcoes">
                        <div className="op1">
                            <button className="bt1">BearMe Assistant</button>
                        </div>
                        <div className="op2">
                            <button className="bt2">Meditação e ASMR</button>
                        </div>
                        <div className="op3">
                            <button className="bt3">Agenda de Tarefas</button>
                        </div>
                    </div>
            </body>
    )
}
