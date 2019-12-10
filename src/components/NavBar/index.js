import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavBar = () =>{
    return(
        <div className='Nav'>
            <div className="Nav-Header">
                <div className="Nav-Left">
                    <NavLink to={ROUTES.HOME}>LOL dad.</NavLink>
                </div>
                <div className='Nav-Center'>

                </div>
                <div className='Nav-Right'>
                    <NavLink to={ROUTES.HOME}>Home</NavLink>
                    <NavLink to={ROUTES.LOGIN}>Login</NavLink>
                    <NavLink to={ROUTES.SIGN_UP}>Signup</NavLink>
                    <NavLink to={ROUTES.JOKES}>Get Jokes</NavLink>
                    <NavLink to={ROUTES.FAVSLIST}>Favorites List</NavLink>
                    <NavLink to={ROUTES.LOGOUT}>Logout</NavLink>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar