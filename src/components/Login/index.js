import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { doSignInWithEmailAndPassword } from '../../firebase/firebase'
import { Button, Form } from 'semantic-ui-react'


import * as ROUTES from '../../constants/routes'

// import login from '../../images/login.jpg'

// const style={
//     "width": "65em", 
//     "height": "35em", 
//     "backgroundPosition": "center",
//     "backgroundRepeat": "no-repeat",
//     "backgroundSize": "cover",
//     "border": "none",
//     "backgroundImage": `url(${login})`
// }
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
               
            <div className='Form'>
            <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email'  placeholder="EMAIL" value={email} onChange={this.onChange}/><br/>
                    <input type='text' name='password' placeholder="PASSWORD" value={password} onChange={this.onChange}/><br/>
                    <button type='submit'>Login</button>
                
                </form>
            </div>
        </div>
        )
    }
}
export default withRouter(Login)