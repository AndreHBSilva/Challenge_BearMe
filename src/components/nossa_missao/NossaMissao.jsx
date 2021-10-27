import React from 'react';
import UrsoZen from '../../img/medit.png';

import { FormatedNossaMissao } from '../../styles';

export default function NossaMissao() {
    return (

        <FormatedNossaMissao>
            <h3>Te ajudar a enfrentar a Ansidade, como um URSO!</h3>
            <h5>Controlar a ansiedade é um desafio, mas existem estratégias, recursos e até mesmo mudanças que você pode fazer em seu dia a dia que vão auxiliar com isso, e em nosso portal, disponibilizamos três opcões para te ajudar a superar esse desafio!</h5>
            
            <img className="imagem" src={UrsoZen} alt="" />
            <h4>Um amigo virtual!</h4>
            <p>Quem nunca precisou de um amigo que sempre estivesse pronto e apto a nos ouvir, quando precisamos desabafar!?</p>
            <p>E se essa conversa fosse aberta, livre de julgamentos e de preceitos? Esta é a função do Bear! </p>
            <p>Nosso assistente virtual estará pronto para ouvir seus desabafos, 24 horas por dia! Com ele voce pode desabafar seus medos, angustias, receios sem se preocupar com segundas intenções já que a missao do BEAR é lhe ouvir, ajudar e lhe sugerir alguma atividade que ajude a recupera o seu auto controle!</p>
        
            <h4>Ohmmmmm! Hora de meditar!</h4>
            <p>Neurocientistas já comprovaram que a prática de meditação contribui para aumentar a região do córtex pré-frontal esquerdo, região responsável pelo sentimento de felicidade. </p>
            <p>Assim, cinco minutos diários para observar a respiração já são eficientes para o começo. Se possível estimule sua equipe a meditar também, os ganhos serão enormes. </p>
   
            <h4>Organize suas tarefas!</h4>
            <p>A ansiedade é um estado de agitação interior que pode ter várias causas, como o estresse, a preocupação excessiva com o futuro e até mesmo o costume de viver em um ritmo frenético, sem tempo para descanso. Seja qual for o motivo para a sua ansiedade, existem grandes chances de que a desorganização a sua volta não te ajude a superá-la.</p>
            <p>Pode parecer improvável, mas tanto a bagunça física quando a falta de planejamento para lidar com suas próprias responsabilidades são um grande incentivo para manter a ansiedade a todo vapor. No meio de um ambiente (físico ou mental) desorganizado, é difícil pensar com clareza, definir prioridades e desacelerar.</p>
            <p>Por isso, disponibilizamos pra voce uma ferramenta intuitiva que lhe auxiliara no planejamento do seu dia a dia e de suas tarefas!</p>
            <p>Vamos começar a organizar a vitória contra a Ansiedade?</p>
        </FormatedNossaMissao>
    )
}