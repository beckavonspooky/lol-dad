import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { doCreateUserWithEmailAndPassword, doCreateUserInFirestore } from '../../firebase/firebase'
import register from '../../images/register.jpg'

import * as ROUTES from '../../constants/routes'
class SignUpWithEmailPassword extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: null
    }

    doSignUpWithEmailPassword = (e) => {
        e.preventDefault()
        doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((authUser) => {
            console.log(authUser)
            const user = {
                _id: authUser.user.uid,
                username: this.state.username,
                email: this.state.email
            }
            doCreateUserInFirestore(user)
        })
        this.props.history.push(ROUTES.JOKES) //this is basically a redirect
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    render(){
        return (
            <div className='register'>
                <div className='Form'>
                <h1>SIGNUP</h1>
                <img src={register}/>
                    <form onSubmit={this.doSignUpWithEmailPassword}>
                        <input 
                            type='text' 
                            placeholder= 'USERNAME' 
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        /> <br/>
                        <input type='text' name='email'  placeholder="EMAIL" value={this.state.email} onChange={this.handleChange}/><br/>
                        <input type='text' name='password'  placeholder="PASSWORD" value={this.state.password} onChange={this.handleChange}/><br/>
                        <button type='submit'>Sign Up</button>
                    </form>

                </div>
            </div>

        )
    }
}
export default withRouter(SignUpWithEmailPassword)