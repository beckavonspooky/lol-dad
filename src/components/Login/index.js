import React, { Component } from 'react'
import { doSignInWithEmailAndPassword } from '../../firebase/firebase'

import * as ROUTES from '../../constants/routes'

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }
    render(){
        return(
            <div>
            <h4>Login</h4>

            <form >
                <input type='text' name='email'  placeholder="EMAIL" />
                <input type='text' name='password' placeholder="PASSWORD" />
                <input type='submit' value='submit' />
               
            </form>
        </div>
        )
    }
}
export default Login