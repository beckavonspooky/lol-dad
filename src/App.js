import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import JokeContainer from './components/JokeContainer'

import * as ROUTES from './constants/routes'
// import pic from './pic.png'
// import main from './main.jpg'

import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App" >
        <NavBar />
         <Switch>
          <Route exact path={ROUTES.HOME} component= {Home}/>
          <Route exact path={ROUTES.JOKES} component= {JokeContainer}/>
        </Switch>
      </div>
    );

  }
}

export default App;
