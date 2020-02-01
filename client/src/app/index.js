import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from '../components'
import { Home, UserLogin, UserProfile } from '../pages'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/users/login" exact component={UserLogin} />
                <Route path="/users/login" exact component={UserLogin} />
                <Route path="/users/profile" exact component={UserProfile} />
            </Switch>
        </Router>
    )
}

export default App
