import React from "react";
import Techbot from '../../img/techbot.jpeg';
import Asmr from '../../img/asmr.jpeg';
import Agenda from '../../img/agenda.jpeg';
import { CardAtividade, CardButton, StyledHome, CardGrid } from '../../styles';
import { useHistory } from 'react-router-dom';

export default function Home(){

  const history = useHistory();

  return (
    <>
      <StyledHome>
        <h3>Voce está prestes a dar o primeiro passo, na busca do seu auto controle:</h3>
        <h4>Através de práticas simples, o Bear te auxiliará na sua jornada!</h4>
        <h5>Conte com ele se voce precisar de um bom ouvinte, aproveite e organize algumas tarefas do seu dia, afinal voce sabia que a organização das tarefas diárias ajuda no combate à Ansiedade? E se precisar de uns minutos de paz, disponibilizamos uma serie de vídeos guiados para auxiliar na sua meditação. </h5>
        <CardGrid>
          <CardAtividade>
              <img src={Techbot} alt="" />
              <CardButton backgroundImage="linear-gradient(to right, rgb(160, 37, 236) , rgb(25, 20, 78))"
              hover="linear-gradient(to right, rgb(25, 20, 78),rgb(160, 37, 236) )" onClick={() => history.push('/BearMeAssistant')}>
                  BearMe Assistant
              </CardButton>
          </CardAtividade>
          <CardAtividade>
              <img src={Agenda} alt="" />
              <CardButton backgroundImage="linear-gradient(to right, rgb(239, 174, 10) , rgb(181, 138, 10))"
              hover="linear-gradient(to right, rgb(181, 138, 10), rgb(239, 174, 10))">
                  Agenda de Tarefas 
              </CardButton>
          </CardAtividade>
          <CardAtividade>
              <img src={Asmr} alt="" />
              <CardButton backgroundImage="linear-gradient(to right, rgb(146, 72, 192) , rgb(240, 150, 234))"
              hover="linear-gradient(to right, rgb(240, 150, 234), rgb(146, 72, 192))" onClick={() => history.push('/MeditacaoASMR')}>
                  Meditação e ASMR
              </CardButton>
          </CardAtividade>
        </CardGrid>
      </StyledHome>
    </>
  )
}
