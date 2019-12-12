import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import mainphoto from '../../images/main.jpg'
import { doSaveJoke } from '../../firebase/firebase'


class JokeContainer extends Component{
    state ={
        joke: {}
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

        this.setState({ 
            joke: jokeToJson
        })
             
        } catch (err) {
            console.log(err, '<------ it didnt work')
            
        }
    }

    saveJoke = () => {
        const currentUserId = this.props.currentUser._id
        doSaveJoke(currentUserId, this.state.joke)
    }
    
    render(){
        
        const { currentUser } = this.props
        return(
            <div className="MainPhoto" 
                style={{
                "width": "100%", 
                "height": "35rem", 
                "backgroundPosition": "center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "backgroundImage": `url(${mainphoto})`
                }}
                >
                <div className='speech-bubble'>
                    <h2>{this.state.joke.joke}</h2>
                </div>
                <div className='getJoke-button'>
                    <button onClick={this.getJokes}>Get Jokes</button>
                </div>
                <div className='save-button'>
                    {
                        currentUser
                        ? <button onClick={this.saveJoke}>Save Joke</button>
                         : null
                    }
                </div>
                <div className='joke-container-stamp'>
                    GOT JOKES?
                </div>
                
            </div>
        )
    }
}

export default withRouter(JokeContainer)