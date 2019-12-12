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
    
        return (
            <div className="Favlist"
                style={{
                    "width": "100%",
                    "height": "45rem",
                    "backgroundPosition": "center",
                    "backgroundRepeat": "no-repeat",
                    "backgroundSize": "cover",
                    "backgroundImage": `url(${favlist})`
                }}>
                <div className='favHeader'>
                    <h1>Favorite Jokes</h1>
                            </div>
                        <div className='favList'>
                            {
                                this.state.savedJokes.map(j => 
                                <div className='deletJoke'>
                                    <p>{j.joke}</p> 
                                    <button type='submit' onClick={()=> this.deleteOneJoke(j.uid)}>Delete Joke</button>
                                </div>
                                )
                            }
                        </div>
            </div>
        )
    }
}
export default withRouter(FavoritesPage)