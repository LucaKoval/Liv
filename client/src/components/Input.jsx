import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../css/input.css'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focused: false
        }
    }

    onBlur = (e) => {
        this.setState({ focused: false })
    }

    onFocus = (e) => {
        this.setState({ focused: true })
    }

    render() {
        let borderStyle = {border: "2px solid hsla(0, 0%, 0%, 0.08)"}
        if (this.state.focused) {
            borderStyle = {border: "2px solid var(--light-color)"}
        }
        return (
            <div style={borderStyle} className="input-container">
                {this.props.icon}
                <input onChange={this.props.handleChange} onBlur={this.onBlur} onFocus={this.onFocus} type="text" placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

Input.propTypes = {
    icon: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input
