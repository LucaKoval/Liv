import React, { Component } from 'react'
import { User, Lock } from 'react-feather'

import '../css/userLogin.css'

import api from '../api'
import Input from '../components/Input'

class UserLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    auth = () => {
        api.getUserByUsername(this.state.username).then(function(val) {
            if (val.status === 200) {
                console.log(val)
            }
        })
    }

    render() {
        const usernameIcon = <User className="input-icon" size={22} />
        const passwordIcon = <Lock className="input-icon" size={22} />

        return (
            <div>
                <div className="login-container">
                    <div className="login-form">
                        <Input handleChange={this.handleUsernameChange} icon={usernameIcon} placeholder="Username" />
                        <Input handleChange={this.handlePasswordChange} icon={passwordIcon} placeholder="Password" />
                        <input onClick={this.auth} className="submit-button all-caps" type="submit" value="Login"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLogin
