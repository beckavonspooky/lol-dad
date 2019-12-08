import React, {Component} from 'react'
import main from '../../images/main.jpg'

class JokeContainer extends Component{
    state ={
        getJokes: [],

    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    async componentDidMount(){
        this.doGetJokes()

    }

    doGetJokes = async () =>{
        try {
            const jokes = await fetch('https://icanhazdadjoke.com/', {

                method: 'POST',
                body: JSON.stringify(jokes),
                headers: {
                    'Accept': 'application/json'
                }
            })  
        } catch (err) {
            console.log(err)
            
        }
    }

    render(){
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
                <h1>This is the Joke Container</h1>

                <button onClick={this.doGetJokes}>Get Jokes</button>

            </div>
        )
    }
}

export default JokeContainer