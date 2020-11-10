import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';
import Bugs from "./components/Bugs";
import Heros from "./components/Heros";
import NoMatchPage from "./components/NoMatchPage";
import { Route, BrowserRouter as Router , Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import Navbar from "./components/Navbar";

function Bug({ bug, index, completeBug, deleteBug}) {
  return(
    <div style={{textDecoration: bug.isCompleted ? 'line-through' : ''}} 
    className="bug">
    { bug.text }
      <div>
        <button onClick={() => completeBug(index)}>Complete</button>
        <button onClick={() => deleteBug(index)}>X</button>
      </div>
    </div>
  )
}


function BugForm({ addBug }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addBug(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      placeholder="Add Bug..."
      value={value} 
      onChange={e => setValue(e.target.value)} />
    </form>
  )
}


const App = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:768px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:768px)").matches);
    })
    
  }, [])
  const [bugs, setBugs] = useState([
    {
      text: 'Do mobile update on projects',
      isCompleted: false
    },
    {
      text: 'Work on login for blog',
      isCompleted: false
    },
    {
      text: 'Connect to the backend with Django',
      isCompleted: false
    }
  ]);
  const [token, setToken] = useState('');

  const userLogin = (token) => {
    setToken(token);
    console.log(token)
  }

  const addBug = text => {
    const newBugs = [...bugs, { text }];
    setBugs(newBugs);
  };

  const completeBug = index => {
    const newBugs = [...bugs];
    newBugs[index].isCompleted = true;
    setBugs(newBugs);
  };

  const deleteBug = index => {
    const newBugs = [...bugs];
    newBugs.splice(index, 1);
    setBugs(newBugs);
  };

  const style1 = {
    height: "100%",
    width: "50%",
    position: "absolute",
    background: "white",
    zIndex: 3,
    listStyle: "none",
  }

  const style2 = {
    position: "relative",
    left: "100%",
    paddingLeft: "50%",
    listStyle: "none",
  }

  const style3 = {
    position: "absolute",
    right: "5px",
    top: "8%",
    listStyle: "none",
  }

  const listStyle = {
    textAlign: "center",
    background: "white",
    borderRadius: "3px",
    marginBottom: "8px",
    padding: "5px",
  }
  
  const List = ({style}) => {
    return (
      <ul style={style}>
          <li style={listStyle}><Link to="/">Home</Link></li>
          <li style={listStyle}><Link to="/tasks">Tasks</Link></li>
          <li style={listStyle}><Link to="/heros">Heros</Link></li>
          <li style={listStyle}><Link to="/books">Books</Link></li>
          <li style={listStyle}><Link to="/login">Login</Link></li>
          <li style={listStyle}><Link to="/register">Register</Link></li>
          <li style={listStyle}><Link to="/bugs" >BugForm</Link></li>
      </ul>
    )
  }
  const MobileList = () => {
    const [active, setActive] = useState(false);
    return(
      <>
        <button onClick={() => {
            setActive(!active);
          }}
        >
          {active ? "Close" : "Show"} Menu
        </button>
        {active && <List style={style3} />}
      </>
    )
  }
  return (<>
    <Router>
        <nav style={{ 
          display: "grid", 
          gridTemplateColumns: "50% 50%", 
          alignItems: "center",
        }}>
        <h1>Bug Tracker</h1>
          {isMobile ? (
          <MobileList />
          ) : (
          <List
            style={{ 
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              paddingRight: "10px", 
            }} 
          />
          )} 
        </nav>
      <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/books" render={() => <Books token={token} />} />
          <Route path="/heros" render={() => <Heros token={token} />} />
          <Route exact path="/login" render={() => <Login userLogin={userLogin} token={token}/>} />
          <Route exact path="/register" render={() => <Register userLogin={userLogin} token={token}/>} />
          <Route path="/bugs" render={() => <Bugs addBug={addBug} />} />
          <Route path="*" component={NoMatchPage} />
      </Switch>
     
        {/* <div className="app">
          <div className="bug-list">
            {bugs.map((bug, index) => (
              <Bug
              key={index} 
              index={index} 
              bug={bug} 
              completeBug={completeBug}
              deleteBug={deleteBug}
              />
              ))}
            
            <BugForm addBug={addBug} />
          </div>
        </div> */}
    </Router>
    </>
  )
}

export default App;