import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import JokeContainer from './components/JokeContainer'

import * as ROUTES from './constants/routes'
// import pic from './pic.png'
// import main from './main.jpg'
import splashimage from './images/splashimage.jpg'


import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App" 
        style={{
          "width": "65rem", 
          "height": "40rem", 
          "backgroundPosition": "center",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "cover",
          "backgroundImage": `url(${splashimage})`
        }}
        >
        <NavBar />
         <Switch>
          <Route exact path={ROUTES.HOME} component= {Home}/>
          <Route exact path={ROUTES.JOKES} component= {JokeContainer}/>
        </Switch>
        {/* <img src={pic} /> */}
        {/* <div style={{
          "width": "65rem", 
          "height": "25rem", 
          "backgroundPosition": "center",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "cover",
          "backgroundImage": `url(${main})`}}>
          
        </div> */}
      </div>
    );

  }
}

export default App;
