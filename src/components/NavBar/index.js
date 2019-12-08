import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavBar = () =>{
    return(
        <div className="NavBar">
                <NavLink to={ROUTES.HOME}>Home</NavLink>
                <NavLink to={ROUTES.LOGIN}>Login</NavLink>
                <NavLink to={ROUTES.SIGN_UP}>Signup</NavLink>
                <NavLink to={ROUTES.JOKES}>Get Jokes</NavLink>
                <NavLink to={ROUTES.FAVSLIST}>Favorites List</NavLink>
            <div className='Header'>
            <h1>LOL dad.</h1>
            <p>Your favorite dad jokes on a click.</p>
            </div>
        </div>
    )
}

export default NavBar