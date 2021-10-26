import React from 'react'
import './Corpo.css';
import { Route, Switch } from 'react-router-dom';
import Assistente from '../assistente/Assistente';
import Home from '../home/Home';
import MeditacaoASMR from '../meditacao-asmr/MeditacaoASMR';
import Agenda from '../agenda/Agenda';
import NossaMissao from "../nossa_missao/NossaMissao";
import SouAnsioso from "../sou_ansioso/SouAnsioso";

export default function Corpo(){
    return (
        <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/BearMeAssistant" component={Assistente} />
            <Route path="/MeditacaoASMR" component={MeditacaoASMR} />
            <Route path="/Agenda" component={Agenda} />
            <Route path="/sou_ansioso" component={SouAnsioso} />
            <Route path="/nossa_missao" component={NossaMissao} />
        </Switch>
    )
}
