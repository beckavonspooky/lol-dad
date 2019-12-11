import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { doGetUserJokes } from '../../firebase/firebase'

import favlist from '../../images/favlist.jpg'

class FavoritesPage extends Component {
    state = {
        savedJokeId: [],
        savedJokes: []
    }

    async componentDidMount() {
        this.getUserJokesId()
    }

    getUserJokesId = () => {
        doGetUserJokes(this.props.currentUser._id)
            .then(snapshot => {
                const jokeIds = []
                snapshot.forEach(doc => {
                    // console.log(doc.data(), "this is one joke")
                    jokeIds.push(doc.data().jokeId)
                })
                this.setState({
                    savedJokeId: jokeIds
                }, () => {
                    this.getUserJokes()
                })
            })
    }

    getUserJokes = () => {
        Promise.all(this.state.savedJokeId.map(async savedJoke => {
            let url = `https://icanhazdadjoke.com/j/${savedJoke}`
            let joke = await fetch(url)
            let jokeToJson = await joke.json()
            return jokeToJson
        })).then(response => this.setState({savedJokes: response}))
    }

    render() {
        // console.log(this.state.savedJokeId, "saved jokes IDS")
        // console.log(this.state.savedJokes, '<======== HIHIHI')
        
        return (
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
                
                <button type='submit'>Delete Joke</button>
                {
                    this.state.savedJokes.map(j => <h3>{j.joke}</h3>)
                }
            </div>
        )
    }
}
export default withRouter(FavoritesPage)