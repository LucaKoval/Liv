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
                <div class = "title-main">
                    <div class = "title"><b>liv</b><br/></div>
                    <div class = "subtitle">Swedish for life, <em>liv</em> is a <b>wearable medical assistant</b> on your wrist that 
                        automates the process of seeking emergency care.</div>
                </div>
                
                <div class = "about">
                    <div class = "description-name"><b>How does liv work?</b><br/></div>
                    <div class = "description"><b>Liv is designed for anyone who is at risk of a medical emergency</b>, whether they are
                        an elderly person diagnosed with Parkinson's, an adult with diabetes, or a young child with a serious allergy.
                        Liv stores important personal and medical information such as emergency contacts, medical condition, and current medications in the wearer's profile. 
                        Each wearer is identified by a unique user ID.
                        Only users approved by Liv are able to access this information: i.e. immediate family members and caregivers.
                        This information is then given to emergency responders when necessary.</div>   

                    <div class = "description-name"><b>Major Features</b></div>
                        <div class = "description">While the wearable is on, Liv is able to <b>monitors heart rate vitals</b> in real time and send alerts when the heart rate is too high or too low.
                        Liv also includes <b>GPS tracking</b> and sends the location when the wearer has a medical emergency.</div>   

                    <div class = "description-name"><b>What happens in an emergency?</b></div>
                    <div class = "description">When an emergency occurs, the information of the wearer is sent to the nearest hospital which is then passed to the emergency responders. 
                    Liv makes a loud sound and alerts the wearer's approved contacts. By providing information to emergency responders efficiently
                    when the patient may be incapacitated, <b>Liv minimizes the time it takes to help a patient and saves lives. </b></div>
                </div>
            </div>
        )
    }
}

export default Home
