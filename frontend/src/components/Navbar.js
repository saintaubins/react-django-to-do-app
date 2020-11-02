import React from 'react'
import { Route, BrowserRouter as Router , Switch, Link } from "react-router-dom";

const Navbar = () => {
    return (<>
        <Router>
            
            {/* <Switch>
                <Route exact path="/"  component={Home} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/books" render={() => <Books token={token} />} />
                <Route path="/heros" render={() => <Heros token={token} />} />
                <Route exact path="/login" render={() => <Login userLogin={userLogin} />} />
                <Route exact path="/register" render={() => <Register userLogin={userLogin} />} />
                <Route path="/bugs" render={() => <Bugs addBug={addBug} />} />
                <Route path="*" component={NoMatchPage} />
            </Switch> */}
        </Router>
    </>
    )
}

export default Navbar
