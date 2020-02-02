import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { User, Lock } from 'react-feather'

import '../css/userLogin.css'

import api from '../api'
import Input from '../components/Input'

class UserLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    auth = () => {
        let classThis = this
        api.getUserByUsername(this.state.username).then(function(val) {
            if (val.status === 200) {
                if (val.data.data.password === classThis.state.password) {
                    console.log('they are good!')
                    localStorage.setItem('liv-auth-token', classThis.state.username)
                    window.location.href = '/profile'
                } else {
                    // TODO: Display error and reset inputs
                    console.log('they are not good')
                }
            }
        })
    }

    render() {
        const usernameIcon = <User className="input-icon" size={22} />
        const passwordIcon = <Lock className="input-icon" size={22} />

        if (localStorage.getItem('liv-auth-token') !== undefined && localStorage.getItem('liv-auth-token') !== null) {
            window.location.href = '/profile'
        }

        return (
            <div>
                <div className="login-container">
                    <div className="login-form">
                        <Input handleChange={this.handleNameChange} icon={usernameIcon} placeholder="Name" />
                        <Input handleChange={this.handlePasswordChange} icon={passwordIcon} placeholder="Password" />
                        <input onClick={this.auth} className="submit-button all-caps emphasis-bold" type="submit" value="Login"></input>
                        <Link to="/signup" className='sign-up'>
                            Don't have an account? Sign up!
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLogin
