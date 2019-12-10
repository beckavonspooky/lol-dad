import React, {Component} from 'react'
import favlist from '../../images/favlist.jpg'


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
        console.log(jokeToJson, 'parsed Joke')

        this.setState({ 
            joke: jokeToJson.joke
        })
        
            
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
                "backgroundImage": `url(${favlist})`
                }}
                >
                <h2>This is the Joke Container</h2>
                <h2>{this.state.joke}</h2>
                
                <button onClick={this.getJokes}>Get Jokes</button>
                

            </div>
        )
    }
}

export default JokeContainer