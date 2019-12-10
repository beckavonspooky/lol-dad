import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { doCreateUserWithEmailAndPassword, doCreateUserInFirestore } from '../../firebase/firebase'




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
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    render(){
        return (
            <div>
                <h1>SIGNUP</h1>
                <form onSubmit={this.doSignUpWithEmailPassword}>
                    <input 
                        type='text' 
                        placeholder= 'USERNAME' 
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input type='text' name='email'  placeholder="EMAIL" value={this.state.email} onChange={this.handleChange}/>
                    <input type='text' name='password'  placeholder="PASSWORD" value={this.state.password} onChange={this.handleChange}/>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>

        )
    }
}
export default withRouter(SignUpWithEmailPassword)