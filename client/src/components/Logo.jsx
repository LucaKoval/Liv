import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/logo.css'

class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <svg 
                 xmlns="http://www.w3.org/2000/svg"
                 width="1.611in" height="0.611in">
                    <text kerning="auto" fill="rgb(0, 0, 0)" x="0px" y="35.98px">
                        Liv
                    </text>
                </svg>
            </Link>
        )
    }
}

export default Logo
