import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import mainphoto from '../../images/main.jpg'
import { doSaveJoke } from '../../firebase/firebase'


class JokeContainer extends Component{
    state ={
        joke: []
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount(){
        this.getJokes();
    }

    getJokes = async () => {
        try {
            const joke = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
        }
        })
        const jokeToJson = await joke.json()
        console.log(jokeToJson, '<----- parsed Joke')

        this.setState({ 
            joke: jokeToJson
        })
        
            
        } catch (err) {
            console.log(err, '<------ it didnt work bitch')
            
        }
    }

    saveJoke = () => {
        const jokeId = this.state.joke.id
        const currentUserId = this.props.currentUser._id
        doSaveJoke(currentUserId, jokeId)
    }
    

    render(){
        console.log(this.state.joke,'<----the state')
        const { currentUser } = this.props
        return(
            <div className="MainPhoto" 
                style={{
                "width": "65rem", 
                "height": "45rem", 
                "backgroundPosition": "center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "backgroundImage": `url(${mainphoto})`
                }}
                >
                <h2>This is the Joke Container</h2>
                <h2>{this.state.joke.joke}</h2>
                
                <button onClick={this.getJokes}>Get Jokes</button>
                {
                    currentUser
                     ? <button onClick={this.saveJoke}>Save Joke</button>
                     : null
                }
                
                

            </div>
        )
    }
}

export default withRouter(JokeContainer)