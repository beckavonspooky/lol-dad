import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
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
                console.log(auth)
                this.props.history.push(ROUTES.JOKES)
            })
            .catch(error => {
                this.setState({error})
            })
    }

    render(){
        const { email, password } = this.state
        console.log(email, '<---- state change')
        return(
            <div>
            <h4>Login</h4>
            
            <div className='Form'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email'  placeholder="EMAIL" value={email} onChange={this.onChange}/>
                    <input type='text' name='password' placeholder="PASSWORD" value={password} onChange={this.onChange}/>
                    <input type='submit' value='submit' />
                
                </form>
            </div>
        </div>
        )
    }
}
export default withRouter(Login)