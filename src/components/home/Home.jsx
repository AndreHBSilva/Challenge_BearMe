import React from "react";
import Techbot from '../../img/techbot.jpeg';
import Asmr from '../../img/asmr.jpeg';
import Agenda from '../../img/agenda.jpeg';
import { CardAtividade, CardButton, MainPage } from '../../styles';

export default function Corpo(){
    return (
        <>
            <h3>Voce está prestes a dar o primeiro passo, na busca do seu auto controle:</h3>
            <h5>Através de práticas simples, o Bear te auxiliará na sua jornada! Conte com ele se voce precisar de um bom ouvinte, aproveite e organize algumas tarefas do seu dia, afinal voce sabia que a organização das tarefas diárias ajuda no combate à Ansiedade? E se precisar de uns minutos de paz, disponibilizamos uma serie de vídeos guiados para auxiliar na sua meditação.</h5>
            <MainPage>
                <CardAtividade>
                    <img src={Techbot} alt="" />
                    <CardButton backgroundImage="linear-gradient(to right, rgb(160, 37, 236) , rgb(25, 20, 78))">
                        BearMe Assistant
                    </CardButton>
                </CardAtividade>
                <CardAtividade>
                    <img src={Agenda} alt="" />
                    <CardButton backgroundImage="linear-gradient(to right, rgb(160, 37, 236) , rgb(25, 20, 78))">
                        Agenda de Tarefas 
                    </CardButton>
                </CardAtividade>
                <CardAtividade>
                    <img src={Asmr} alt="" />
                    <CardButton backgroundImage="linear-gradient(to right, rgb(160, 37, 236) , rgb(25, 20, 78))">
                        Meditação e ASMR
                    </CardButton>
                </CardAtividade>
            </MainPage>
        </>
    )
}
