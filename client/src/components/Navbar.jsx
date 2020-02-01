import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import '../css/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-left">
                    <li className="logo">
                        <Logo/>
                    </li>
                </ul>
                <div className='nav-right-container'> 
                    <a href="/#" className="menu-icon"><i className="far fa-bars"></i></a>
                    <ul className="nav-right" id="navRight">
                        <Link to="/polls/list" className={'nav-item' + (window.location.pathname === '/polls/list' ? ' active' : '')}>
                            Login
                        </Link>
                        <Link to="/polls/create" className={'nav-item' + (window.location.pathname === '/polls/create' ? ' active' : '')}>
                            Profile
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
