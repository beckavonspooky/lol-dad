import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { doGetUserJokes, doDeleteOneJoke } from '../../firebase/firebase'

import favlist from '../../images/favlist.jpg'

class FavoritesPage extends Component {
    state = {
        savedJokes: []
    }

    async componentDidMount() {
        this.getUserJokesId()
    }

    getUserJokesId = () => {
        doGetUserJokes(this.props.currentUser._id)
            .then(snapShot => {
                this.setState({
                    savedJokes: snapShot.docs.map(joke => Object.assign(joke.data().joke, {uid: joke.id}))
                })
            })
    }
    
    // getUserJokes = () => {
    //     Promise.all(this.state.savedJokeId.map(async savedJoke => {
    //         console.log(`https://icanhazdadjoke.com/j/${savedJoke}`)
    //         const joke = await fetch(`https://icanhazdadjoke.com/j/${savedJoke}`, {
    //             mode: "no-cors"
    //           })
    //         const jokeToJson = await joke.json()
    //         return jokeToJson
    //     }))
    //     .then(response => this.setState({savedJokes: response}))
        
    // }
    deleteOneJoke = (id) =>{
        console.log(id)
        doDeleteOneJoke(id)
            .then(()=> {
                const updatedJokes= this.state.savedJokes.filter(j => j.uid !== id)
                this.setState({
                    savedJokes: updatedJokes
                })
            })
            .catch((err)=> console.log(err))
    }
    render() {
        console.log(this.state.savedJokeId, '<===== saved joke IDS')
        console.log(this.state.savedJokes, '<----- Saved Jokes array here')
        return (
            <div className="Favlist"
                style={{
                    "width": "65rem",
                    "height": "45rem",
                    "backgroundPosition": "center",
                    "backgroundRepeat": "no-repeat",
                    "backgroundSize": "cover",
                    "backgroundImage": `url(${favlist})`
                }}>
                <h2>Favorite Jokes</h2>
                
                {
                    this.state.savedJokes.map(j => 
                        <div>
                    <h3>{j.joke}</h3> 
                    <button type='submit' onClick={()=> this.deleteOneJoke(j.uid)}>Delete Joke</button>
                    </div>
                    )
                    
                }
                
            </div>
        )
    }
}
export default withRouter(FavoritesPage)