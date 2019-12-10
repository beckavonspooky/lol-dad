import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import JokeContainer from './components/JokeContainer'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import FavoritesList from './components/FavoritesList';

import * as ROUTES from './constants/routes'
import { auth, doGetCurrentUser} from './firebase/firebase'

import './App.css';


class App extends Component {
  state={
    currentUser: null,
  }
  componentDidMount() {
    auth.onAuthStateChanged(async authUser => {
      const currentUser = await doGetCurrentUser(authUser.uid)
      this.setState({currentUser: currentUser.data()})
    })
  }


  render(){
    const { currentUser } = this.state

    return (
      <div className="App" >
        <NavBar currentUser={this.state.currentUser}/>
         <Switch>
          <Route exact path={ROUTES.HOME} component= {Home}/>
          <Route exact path={ROUTES.JOKES} render= {() => <JokeContainer currentUser={currentUser}/>}/>

          <Route exact path={ROUTES.SIGN_UP} component= {SignUpWithEmailPassword}/>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.FAVSLIST} component={FavoritesList}/>
        </Switch>
      </div>
    );

  }
}

export default App;
