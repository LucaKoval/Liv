import React, { Component } from 'react'

import '../css/logout.css'

class Logout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayModal: false
        }
    }

    logoutCheck = () => {
        this.setState({ displayModal: true })
    }

    logout = () => {
        this.setState({ displayModal: true })
        localStorage.clear()
        window.location.href = '/'
    }

    cancel = () => {
        this.setState({ displayModal: false })
    }

    render() {
        let displayModal = this.state.displayModal ? 'flex' : 'none'

        return (
            <div>
                <div onClick={this.logoutCheck} style={this.props.linkColorOverride} className='nav-item logout-text'>Logout</div>
                <div className='modal-container' style={{display: displayModal}}>
                    <div className='modal'>
                        <div className='modal-text-container'>
                            <div className='modal-text title-text'>Are you sure you want to logout?</div>
                        </div>
                        <div className='modal-buttons-container'>
                            <input onClick={this.logout} type='submit' value='Yes'></input>
                            <input onClick={this.cancel} type='submit' value='Cancel'></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logout
