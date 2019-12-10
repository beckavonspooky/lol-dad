import React from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'


import splashimage from '../../images/splashimage.jpg'

const style={
    "width": "65rem", 
    "height": "45rem", 
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "border": "none",
    "backgroundImage": `url(${splashimage})`
}
const Home = () => {
    return(
        <div  style={style}>
            {/* <div className='logo'>LOL dad.</div> */}
            <div className='info'>As Told To You By Your Dad</div>
            <div className='taglines'>
                Your favorite dad jokes on a click.
            </div>
            <div className='taglines-button'>
                <Link to={ROUTES.JOKES}>
                    <button>CLICK NOW to get some LOLs</button>
                </Link>
            </div>
        </div>
    )
}
export default withRouter(Home)