import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class Login extends Component {

    state = {
        credentials: {username: '', password: ''}
    }
    
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    login = event => {
        event.preventDefault()
        var csrftoken = this.getCookie('csrftoken')
        const { history } = this.props
        
        console.log('csrftoken:',csrftoken);
        console.log(this.state.credentials);
        fetch('https://evening-atoll-03641.herokuapp.com/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken':csrftoken,
            },
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then( data => this.props.userLogin(data.token))
        .catch(error => console.error(error))
        console.log('props = ',this.props)
        if(history) history.push('/')
    }
    

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <center>
                <div>
                <h1>Please Login!</h1> 
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
                <button onClick={this.login}>Login</button>
                </div>
            </center>
        )

    }
    
}

export default withRouter(Login);
