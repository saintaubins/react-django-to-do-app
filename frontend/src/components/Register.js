import React, { Component } from 'react';

class Register extends Component {

    state = {
        credentials: {username: '', password: ''}
    }
    register = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/myapi/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then( data => {console.log(data.token);})
        .then(() => alert('Successfully Registered, Please Login'))
        .catch(error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div>
               <h1>Register User Form</h1> 
               <label>
                   Username:
                   <input 
                    type="text" 
                    name="username" 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged} 
                    />
               </label>
               <br />
               <label>
                   Password:
                   <input 
                    type="password" 
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}  
                   />
               </label>
               <br />
               <button onClick={this.register}>Register</button>
            </div>
        )

    }
    
}

export default Register