import React, { Component } from 'react';

class Heros extends Component {

    state = {
        heros: []
    }

    loadHeros = () => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/myapi/heros/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${this.props.token}`
            },
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then( data => {this.setState({heros: data})})
        .catch(error => console.error(error))
    }
    render() {
        return (
            this.props.token ?
                <div>
                <h1>Heros Page</h1>
                { this.state.heros.map( hero => {
                    return <h3 key={hero.id}>{hero.name}</h3>
                })}
                <button onClick={this.loadHeros}>Load Heros</button> 
                </div>
            :
                <div><h1>Please Login if you don't have an Account Please Reigister!</h1></div>
        )

    }
    
}

export default Heros
