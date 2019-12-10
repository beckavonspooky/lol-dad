import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { doGetUserJokes, doGetOneJoke } from '../../firebase/firebase'


import favlist from '../../images/favlist.jpg'

class FavoritesList extends Component {
    state = {
        savedJokeId: []

    }


    async componentDidMount() {
        this.getUserJokes()
        const jokeId = this.props.match.params.id 
        const resJoke = await fetch(`https://icanhazdadjoke.com/j/${jokeId}`,{
            headers: {
                'Accept': 'application/json'
            }
        })
        const jokeJson = await resJoke.json()
        console.log(jokeJson, '<---parsed Joke')

        this.setState({
            savedJokeId: jokeJson.jokeId
        })

    }
    getUserJokes = () => {
        doGetUserJokes(this.props.currentUser._id)
            .then(snapshot => {
                const jokeIds = []
                snapshot.forEach(doc => {
                    console.log(doc.data(), "this is one joke")
                    jokeIds.push(doc.data().jokeId)
                })
                this.setState({
                    savedJokeId: jokeIds
                })
            })
    }

    render() {
        console.log(this.state.savedJokeId, "saved jokes")
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
                <h2>{this.state.savedJoke}</h2>
                <button type='submit'>Delete Joke</button>

            </div>
        )
    }
}
export default withRouter(FavoritesList)