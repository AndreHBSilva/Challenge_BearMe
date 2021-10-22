import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';

export default function Corpo(){
    return (
        <Switch> 
            <Route path="/" exact="/home" component={Home} />
            <Route path="/home" component={Home} />
        </Switch>
    )
}
