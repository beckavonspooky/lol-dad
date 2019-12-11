import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import JokeContainer from './components/JokeContainer'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import FavoritesPage from './components/FavoritesPage';


import * as ROUTES from './constants/routes'
import { auth, doGetCurrentUser, doSignOut} from './firebase/firebase'

import './App.css';


class App extends Component {
  state={
    currentUser: JSON.parse(localStorage.getItem("savedUser")) || null,
  }
  componentDidMount() {
    auth.onAuthStateChanged( authUser => {
      console.log(authUser)
      if(authUser){
        doGetCurrentUser(authUser.uid)
          .then(snapshot => {
            console.log(snapshot.data(), "snapped")
            const userJson = JSON.stringify(snapshot.data())
            localStorage.setItem("savedUser", userJson)
            this.setState({currentUser: snapshot.data()})
          })
      }
    })
  }
  logout = () => {
    doSignOut()
      .then(() => {
        this.setState({
          currentUser: null
        })
        localStorage.clear()
        this.props.history.push('/home')
      })
      console.log(this.state, "<---- logged out state")


  }


  render(){
    const { currentUser } = this.state

    return (
      <div className="App" >
        <NavBar currentUser={this.state.currentUser} logout={this.logout}/>
         <Switch>
          <Route exact path={ROUTES.HOME} component= {Home}/>
          <Route exact path={ROUTES.JOKES} render= {() => <JokeContainer currentUser={currentUser}/>}/>

          <Route exact path={ROUTES.SIGN_UP} component= {SignUpWithEmailPassword}/>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.FAVSLIST} render={() => <FavoritesPage currentUser={currentUser}/>}/>
        </Switch>
      </div>
    );

  }
}

export default withRouter(App);
