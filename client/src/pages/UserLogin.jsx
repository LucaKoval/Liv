import React, { Component } from 'react'
import { User, Lock } from 'react-feather'

import '../css/userLogin.css'

import Input from '../components/Input'

class UserLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usernameInputFocused: false,
            passwordInputFocused: false
        }
    }

    auth = () => {

    }

    render() {
        const usernameIcon = <User className="input-icon" size={22} />
        const passwordIcon = <Lock className="input-icon" size={22} />

        // const ReactDOM = require('react-dom')
        // let usernameInputFocused = this.state.usernameInputFocused
        // let passwordInputFocused = false
        // if ( document.activeElement === ReactDOM.findDOMNode(this.refs.usernameInput) ) {
        //     console.log('yes')
        //     usernameInputFocused = true
        // }
        // if ( document.activeElement === ReactDOM.findDOMNode(this.refs.passwordInput) ) {
        //     passwordInputFocused = true
        // }

        return (
            <div>
                <div className="login-container">
                    <div className="login-form">
                        <Input icon={usernameIcon} placeholder="Username" />
                        <Input icon={passwordIcon} placeholder="Password" />
                        <input onClick={this.auth} className="submit-button all-caps" type="submit" value="Login"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLogin
