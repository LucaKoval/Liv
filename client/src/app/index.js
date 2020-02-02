import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from '../components'
import { Home, UserLogin, UserProfile, SignUp } from '../pages'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={UserLogin} />
                <Route path='/profile' exact component={UserProfile} />
                <Route path='/signup' exact component={SignUp} />
            </Switch>
        </Router>
    )
}

export default App
