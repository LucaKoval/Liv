import React, { Component } from 'react'

import '../css/home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <div class = "about">
                    <div class = "title"><b>liv</b><br/></div>
                    <div class = "subtitle">Swedish for life, <em>liv</em> is a <b>wearable medical assistant</b> on your wrist that 
                        automates the process of seeking emergency care.</div>
                    <div class = "description-name"><b>How does liv work?</b><br/></div>
                    <div class = "description"><b>Liv is designed for anyone who is at risk of a medical emergency</b>, whether they are
                        an elderly person diagnosed with Parkinson's, an adult with diabetes, or a young child with a serious allergy.
                        Liv stores important personal and medical information such as emergency contacts, medical condition, and current medications in the wearer's profile. 
                         Each wearer is identified by a unique user ID.
                        Only users approved by Liv are able to access this information: i.e. immediate family members, doctor, emergency responders. </div>      
                    <div class = "description-name"><b>Heartrate Monitor</b></div>
                    <div class = "description-name"><b>GPS Enabled</b></div>
                    <div class = "description"></div>
                </div>
            </div>
        )
    }
}

export default Home
