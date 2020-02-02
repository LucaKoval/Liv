import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { User, Phone, Lock } from 'react-feather'

import '../css/signup.css'

import api from '../api'
import Input from '../components/Input'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            cellPhone: '',
            password: ''
        }
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handleCellPhoneChange = (e) => {
        this.setState({ cellPhone: e.target.value })
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
                    window.location.href = '/users/profile'
                } else {
                    // TODO: Display error and reset inputs
                    console.log('they are not good')
                }
            }
        })
    }

    render() {
        const usernameIcon = <User className="input-icon" size={22} />
        const cellPhoneIcon = <Phone className="input-icon" size={22} />
        const passwordIcon = <Lock className="input-icon" size={22} />

        return (
            <div>
                <div className="sign-up-container">
                    <div className="sign-up-form">
                        <Input handleChange={this.handleUsernameChange} icon={usernameIcon} placeholder="Username" />
                        <Input handleChange={this.handleCellPhoneChange} icon={cellPhoneIcon} placeholder="Cell Phone" />
                        <Input handleChange={this.handlePasswordChange} icon={passwordIcon} placeholder="Password" />
                        <input onClick={this.auth} className="submit-button all-caps emphasis-bold" type="submit" value="Sign Up"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
