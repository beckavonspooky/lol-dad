import React, {Component} from 'react'
import main from '../../images/main.jpg'


class JokeContainer extends Component{
    state ={
        joke: []
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
    console.log(jokeToJson, 'parsed Joke')
            
        } catch (err) {
            console.log(err, 'it didnt work bitch')
            
        }
    }
    

    render(){
        console.log(this.state.joke,'the state')
        
        return(
            <div className="MainPhoto" 
                style={{
                "width": "65rem", 
                "height": "45rem", 
                "backgroundPosition": "center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "backgroundImage": `url(${main})`
                }}
                >
                <h2>This is the Joke Container</h2>
                <h2 joke = {this.state.joke}>this is the joke</h2>
                
            
                <button type= 'submit'>Get Jokes</button>
                

            </div>
        )
    }
}

export default JokeContainer