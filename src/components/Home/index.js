import React from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'



import splashimage from '../../images/splashimage.jpg'

const style={
    "width": "100%",
    "height": "40rem", 
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "border": "none",
    "backgroundImage": `url(${splashimage})`
}
const Home = () => {
    return(
        <div className="home-container">
                <div  style={style}>
                    <div className='speech-bubble'>
                        <h1>"As Told To You By Your Dad"</h1>
                    </div>
                    <div className='home-taglines'>
                    <Link to={ROUTES.JOKES}>Take 1 for LOLs</Link>
                        
                    </div>
                        <div className='home-clickNow-button'>
                            <Link to={ROUTES.JOKES}>Lets get this bread!</Link>
                        </div>
                </div>            
        </div>
    )
}
export default withRouter(Home)