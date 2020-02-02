import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'

import Logo from './Logo'
import Logout from './Logout'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hover: false
        }
    }

    onMouseOver = () => {
        this.setState({ hover: true })
    }

    onMouseOut = () => {
        this.setState({ hover: false })
    }

    loggedIn = (linkColorOverride) => {
        if (localStorage.getItem('liv-auth-token') !== undefined && localStorage.getItem('liv-auth-token') !== null) {
            return (
                <Logout linkColorOverride={linkColorOverride}/>
            )
        } else {
            return (
                <Link to="/login" className={'nav-item' + (window.location.pathname === '/login' ? ' active' : '')} style={linkColorOverride}>
                    Login
                </Link>
            )
        }
    }
    
    render() {
        let linkColorOverride = this.state.hover ? {color: 'white'} : {}
        let profileDisplay = (localStorage.getItem('liv-auth-token') === undefined || localStorage.getItem('liv-auth-token') === null) ? 'none' : 'inline'

        return (
            <nav onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <ul className="nav-left">
                    <li className="logo">
                        <Logo hover={this.state.hover}/>
                    </li>
                </ul>
                <div className='nav-right-container'>
                    <a href="/#" className="menu-icon"><i className="far fa-bars"></i></a>
                    <ul className="nav-right" id="navRight">
                        {this.loggedIn(linkColorOverride)}
                        <Link to="/profile" className={'nav-item' + (window.location.pathname === '/profile' ? ' active' : '')} style={linkColorOverride, {display: profileDisplay}}>
                            Profile
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
