import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import favlist from '../../images/favlist.jpg'

class FavoritesList extends Component {
    state={
        userId: '',
        savedJoke:''
    }

    async componentDidMount(){
        const jokeId = this.props.match.params.id 
        const resJoke = await fetch(`https://icanhazdadjoke.com/j/${jokeId}`,{
            headers: {
                'Accept': 'application/json'
            }
        })
        const jokeJson = await resJoke.json()
        console.log(jokeJson, '<---parsed Joke')

        this.setState({
            savedJoke: jokeJson.jokeId
        })
     
    }
    
    render(){
        console.log(this.state.savedJoke, "<---- le estado")
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
                <h2>{this.state.savedJoke}</h2>
                <button type='submit'>Delete Joke</button>
            
            </div>
        )
    }
}
export default withRouter(FavoritesList)