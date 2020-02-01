import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'

import Logo from './Logo'

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
                        <Link to="/users/login" className={'nav-item' + (window.location.pathname === '/users/login' ? ' active' : '')}>
                            Login
                        </Link>
                        <Link to="/users/profile" className={'nav-item' + (window.location.pathname === '/users/profile' ? ' active' : '')}>
                            Profile
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
