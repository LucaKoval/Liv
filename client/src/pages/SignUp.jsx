import React, { Component } from 'react'
import { User, Phone, Lock } from 'react-feather'

import '../css/signup.css'

import api from '../api'
import Input from '../components/Input'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            cellPhone: '',
            password: ''
        }

        this.auth = this.auth.bind(this)
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleCellPhoneChange = (e) => {
        this.setState({ cellPhone: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    auth = () => {
        let classThis = this
        api.createUser(this.state).then(function(val) {
            if (val.status === 201) {
                console.log(val)
                localStorage.setItem('liv-auth-token', classThis.state.username)
                window.location.href = '/profile'
            }
        })
    }

    render() {
        const nameIcon = <User className="input-icon" size={22} />
        const cellPhoneIcon = <Phone className="input-icon" size={22} />
        const passwordIcon = <Lock className="input-icon" size={22} />

        return (
            <div>
                <div className="sign-up-container">
                    <div className="sign-up-form">
                        <Input handleChange={this.handleNameChange} icon={nameIcon} placeholder="Name" />
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
