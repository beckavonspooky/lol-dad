import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'

import * as ROUTES from './constants/routes'
// import pic from './pic.png'
// import main from './main.jpg'
import images from './images/favlist.jpg'



import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App" style={{"width": "55rem", "height": "55rem", "backgroundImage": `url(${images})`}}>
        <NavBar />
        <h1>This is for the project</h1>
        {/* <img src={pic} /> */}
         <Switch>
          <Route exact path={ROUTES.HOME} component= {Home}/>
        </Switch>
      </div>
    );

  }
}

export default App;
