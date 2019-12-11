// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import { doGetUserJokes, doDeleteOneJoke } from '../../firebase/firebase'

// import favlist from '../../images/favlist.jpg'

// class FavoritesPage extends Component {
//     state = {
//         savedJokeId: [],
//         savedJokes: []
//     }

//     async componentDidMount() {
//         this.getUserJokesId()
//     }

//     getUserJokesId = () => {
//         doGetUserJokes(this.props.currentUser._id)
//             .then(snapshot => {
//                 const jokeIds = []
//                 snapshot.forEach(doc => {
//                     // console.log(doc.data(), "this is one joke")
//                     jokeIds.push(doc.data().jokeId)
//                 })
//                 this.setState({
//                     savedJokeId: jokeIds
//                 }, () => {
//                     this.getUserJokes()
//                 })
//             })
//     }
    
//     getUserJokes = () => {
//         Promise.all(this.state.savedJokeId.map(async savedJokes => {
//             let joke = await fetch(`https://icanhazdadjoke.com/j/${savedJokes}`, {
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             })
//             console.log(joke)
//             let jokeToJson = await joke.json()
//             return jokeToJson
//         })).then(response => this.setState({savedJokes: response}))
//     }
//     // deleteOneJoke = (id) =>{
//     //     console.log(id)
//     //     doDeleteOneJoke(id)
//     //     .then(()=> {
//     //         const updatedJokes= this.state.savedJokes.filter(j => j.id !== id)
//     //         const updatedJokesId= this.state.savedJokeId.filter(j => j.id !== id)
//     //         console.log(updatedJokes)
//     //         this.setState({
//     //             savedJokes: updatedJokes,
//     //             savedJokeId: updatedJokesId
//     //         })
//     //     })
//     //     .catch((err)=> console.log(err))
//     // }
//     render() {
//         console.log(this.savedJokes, '<-----here')
//         return (
//             <div className="Favlist"
//                 style={{
//                     "width": "65rem",
//                     "height": "45rem",
//                     "backgroundPosition": "center",
//                     "backgroundRepeat": "no-repeat",
//                     "backgroundSize": "cover",
//                     "backgroundImage": `url(${favlist})`
//                 }}>
//                 <h2>Favorite Jokes</h2>
                
//                 {
//                     this.state.savedJokes.map(j => 
//                         <div>
//                     <h3>{j.joke}</h3> 
//                     <button type='submit' onClick={()=> this.deleteOneJoke(j.id)}>Delete Joke</button>
//                     </div>
//                     )
                    
//                 }
                
//             </div>
//         )
//     }
// }
// export default withRouter(FavoritesPage)