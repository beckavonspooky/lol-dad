import React from 'react'

import splashimage from '../../images/splashimage.jpg'

const style={
    "width": "65rem", 
    "height": "40rem", 
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundImage": `url(${splashimage})`
}
const Home = () => {
    return(
        <div className='taglines' style={style}>
            <h3> Your favorite dad jokes on a click.</h3>
            <button>Lets get some LOLs</button>
        </div>
    )
}
export default Home