import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import JokeContainer from './components/JokeContainer'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'


import * as ROUTES from './constants/routes'

import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App" >
        <NavBar />
         <Switch>
          <Route exact path={ROUTES.HOME} component= {Home}/>
          <Route exact path={ROUTES.JOKES} component= {JokeContainer}/>

          <Route exact path={ROUTES.SIGN_UP} component= {SignUpWithEmailPassword}/>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
        </Switch>
      </div>
    );

  }
}

export default App;
