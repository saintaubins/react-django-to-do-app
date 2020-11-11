import React, { Component } from 'react';

class Books extends Component {

    state = {
        books: []
    }

    loadBooks = () => {
        console.log(this.state.credentials);
        fetch('https://evening-atoll-03641.herokuapp.com/myapi/books/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${this.props.token}`
            },
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then( data => {this.setState({books: data})})
        .catch(error => console.error(error))
    }
    render() {
        return (
            this.props.token ?
                <div>
                    <center>
                        <h1>Books Page</h1>
                        { this.state.books.map( book => {
                            return <h3 key={book.id}>{book.title}</h3>
                        })}
                        <button onClick={this.loadBooks}>Load Books</button> 
                    </center>
                </div>
            :
            <center>
                <div><h1>Please Login, if you don't have an Account Please Reigister!</h1></div>
            </center>
        )

    }
    
}

export default Books
