import React, { Component } from 'react'
import favlist from '../../images/favlist.jpg'


class FavoritesList extends Component {
    
    render(){
        return(
            <div className="Favlist" 
                style={{
                "width": "65rem", 
                "height": "45rem", 
                "backgroundPosition": "center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "backgroundImage": `url(${favlist})`
                }}
                >
                <h2>this is the favorits list</h2>
                <button >Save Joke</button>
            
            </div>
        )
    }
}
export default FavoritesList