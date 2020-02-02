import React, { Component } from 'react'
import { User } from 'react-feather'

import '../css/userProfile.css'

import api from '../api'
import Input from '../components/Input'

class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            newUser: {},
            newApproved: '',
            edit: false
        }
    }

    componentDidMount = () => {
        let classThis = this
        api.getUserByName(localStorage.getItem('liv-auth-token')).then(function(val) {
            classThis.setState({ user: val.data.data })
        })
    }

    edit = () => {
        this.setState({ edit: true, newUser: this.state.user })
    }

    submit = () => {
        let classThis = this
        let newUser = this.state.newUser
        api.getUserByName(this.state.newApproved).then(function(val) {
            if (val.status === 200) {
                newUser.approved.push(val.data.data._id)
                classThis.setState({ newUser: newUser })
        
                api.updateUserByName(localStorage.getItem('liv-auth-token'), classThis.state.newUser).then(function(val) {
                    if (val.status === 200) {
                        window.location.href = '/profile'
                    }
                })               
            }

            this.setState({ edit: false, user: this.state.newUser })
        })
    }

    // (202) 629-0604
    // +12026290604

    handleChange = (property, e) => {
        let newUser = this.state.newUser
        if (property === 'approved') {
            this.setState({ newApproved: e.target.value })
        } else {
            newUser[property] = e.target.value
        }
        this.setState({ newUser: newUser })
    }

    render() {
        if (localStorage.getItem('liv-auth-token') === undefined || localStorage.getItem('liv-auth-token') === null) {
            window.location.href = '/'
        }

        const otherDisplay = !this.state.edit ? 'inline' : 'none'
        const editDisplay = this.state.edit ? 'inline' : 'none'

        let otherInformation = [];
        let counter = 0
        for (let property in this.state.user) {
            if (!['name', 'cellPhone', '_id', '__v', 'password'].includes(property)) {
                let propNameArr = property.split('_')
                let propName = ''
                for (let i = 0; i < propNameArr.length; i++) {
                    propName += propNameArr[i].replace(/^\w/, c => c.toUpperCase());
                    if (i < propNameArr.length-1) {
                        propName += ' '
                    }
                }

                const usernameIcon = <User className="input-icon" size={22} />
                const textDisplay = !this.state.edit ? 'inline' : 'none'
                const editDisplay = this.state.edit ? 'inline' : 'none'
                let value = ''
                if (property === 'approved') {
                    value = this.state.newApproved
                } else {
                    value = (this.state.user[property] === '' ? '' : this.state.user[property])   
                }

                otherInformation.push(
                    <div key={counter}>
                        <div>
                            <span className='emphasis-bold'>{propName}: </span><span style={{display: otherDisplay}}>{this.state.user[property]}</span>
                            <div style={{display: editDisplay}}>
                                <Input handleChange={(e) => this.handleChange(property, e)} icon={usernameIcon} placeholder={propName} value={value} />
                            </div>
                        </div>
                    </div>
                )
            }
            counter++
        }

        return (
            <div className='profile-container'>
                <div className='profile-content-container'>
                    <div className='row'>
                        <div className='profile-picture'>
                            <User className="user-icon" size={70} />
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="50" stroke="black" strokeWidth="6" fill="none" />
                            </svg>
                        </div>
                        <div className='required-information'>
                            <div className='name'>
                                <span className='emphasis-bold'>Name: </span>{localStorage.getItem('liv-auth-token')}
                            </div>
                            <div className='cell-phone'>
                                <span className='emphasis-bold'>Cell Phone: </span>{this.state.user.cellPhone}
                            </div>
                        </div>
                    </div>
                    <div className='other-information-container'>
                        <div className='other-information'>
                            {otherInformation}
                        </div>
                        <div className='button-container'>
                            <input style={{display: otherDisplay}} onClick={this.edit} className="submit-button all-caps emphasis-bold" type="submit" value="Edit"></input>
                            <input style={{display: editDisplay}} onClick={this.submit} className="submit-button all-caps emphasis-bold" type="submit" value="Submit"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
