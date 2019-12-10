import React, { Component } from 'react'
import { doSignInWithEmailAndPassword } from '../../firebase/firebase'

import * as ROUTES from '../../constants/routes'


class Login extends Component {
    state = {
        email: '',
        password: '',
        
    }
    onChange = e => 
        this.setState({
            [e.target.name]: e.target.value
        })
    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        doSignInWithEmailAndPassword(email, password)
            .then(auth => {
                this.props.history.push(ROUTES.JOKES)
            })
            .catch(error => {
                this.setState({error})
            })
    }

    render(){
        const { email, password } = this.state
        return(
            <div>
            <h4>Login</h4>

            <form onSubmit={this.onSubmit}>
                <input type='text' name='email'  placeholder="EMAIL" value={email} onChange={this.onChange}/>
                <input type='text' name='password' placeholder="PASSWORD" value={password} onChange={this.onChange}/>
                <input type='submit' value='submit' />
               
            </form>
        </div>
        )
    }
}
export default Login