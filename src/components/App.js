import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from '../pages/Register'
import Login from '../pages/Login'
import Inicio from '../pages/Inicio'


function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/register" component={ Register }/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/inicio" component={Inicio}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App