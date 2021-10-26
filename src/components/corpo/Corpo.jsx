import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Assistente from '../assistente/Assistente';
import Home from '../home/Home';
import MeditacaoASMR from '../meditacao-asmr/MeditacaoASMR';
import Agenda from '../agenda/Agenda';

export default function Corpo(){
    return (
        <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/BearMeAssistant" component={Assistente} />
            <Route path="/MeditacaoASMR" component={MeditacaoASMR} />
            <Route path="/Agenda" component={Agenda} />
        </Switch>
    )
}
