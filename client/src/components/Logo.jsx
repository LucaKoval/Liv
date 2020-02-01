import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/logo.css'

class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <svg width="177" height="85" viewBox="0 0 250 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M117.656 42.7209C117.957 29.9485 107.814 19.1246 95.0381 18.9857C86.4848 18.8927 79.0026 23.497 74.9994 30.3757C70.9955 23.497 63.5141 18.8919 54.9607 18.9857C42.1853 19.1246 32.0419 29.9485 32.3433 42.7209C33.0177 71.2618 67.1533 96.0864 73.8619 100.694C74.5478 101.165 75.4511 101.165 76.137 100.694C82.8455 96.0864 116.981 71.2618 117.656 42.7209Z" fill="#FC534E"/>
                    <path d="M117.667 41.8671C117.667 70.7621 82.9211 96.0338 76.1378 100.692C75.4511 101.164 74.547 101.166 73.8596 100.695C72.1888 99.5471 68.8158 97.1454 64.683 93.7449C71.4953 89.0635 106.194 63.8063 106.194 34.9289C106.194 29.0634 103.99 23.7122 100.361 19.6678C110.304 22.1573 117.667 31.1486 117.667 41.8671V41.8671Z" fill="#FF5555"/>
                    <path d="M74.5892 76.5272C73.7068 76.5272 72.9487 75.8996 72.7848 75.0316L68.3012 51.2242L63.5305 62.5575C63.2526 63.2177 62.6166 63.6554 61.9008 63.6799C61.1839 63.7043 60.5202 63.3099 60.1984 62.6703L58.9231 60.1364H41.0618C40.0481 60.1364 39.226 59.3146 39.226 58.3013C39.226 57.2874 40.0481 56.4661 41.0618 56.4661H60.0546C60.7449 56.4661 61.3766 56.8529 61.6897 57.4669L67.2842 44.178C67.5984 43.431 68.3657 42.9786 69.1705 43.0649C69.9764 43.1506 70.6303 43.7538 70.7807 44.5502L74.4774 64.1816L76.0072 54.996C76.1543 54.1107 76.92 53.4619 77.8176 53.4619H83.8094C84.4302 53.4619 85.0092 53.7754 85.3479 54.2951L88.1611 58.6115L89.3745 57.136C89.7235 56.7118 90.2439 56.4661 90.7931 56.4661H108.52C109.534 56.4661 110.356 57.2879 110.356 58.3013C110.356 59.3146 109.534 60.1364 108.52 60.1364H91.6609L89.4087 62.8754C89.0375 63.3267 88.4726 63.5746 87.8892 63.5426C87.3048 63.5106 86.7713 63.2019 86.4522 62.7121L82.8152 57.1322H79.3735L76.4001 74.9931C76.2541 75.8708 75.4987 76.5174 74.6087 76.5266C74.6022 76.5266 74.5952 76.5272 74.5892 76.5272Z" fill="#FDCBC6"/>
                    <path d="M107.502 35.4017H101.1V29H93.4017V35.4017H87V43.1004H93.4017V49.5021H101.1V43.1004H107.502V35.4017Z" fill="#FFDC84"/>
                    <path d="M144.28 85.16C144.28 87.0267 144.6 88.36 145.24 89.16C145.88 89.96 146.787 90.36 147.96 90.36C148.653 90.36 149.4 90.3067 150.2 90.2C151 90.0933 151.907 89.8533 152.92 89.48L153.64 94.52C152.787 94.9467 151.587 95.2933 150.04 95.56C148.547 95.8267 147.24 95.96 146.12 95.96C143.72 95.96 141.747 95.2933 140.2 93.96C138.653 92.5733 137.88 90.2533 137.88 87V39H144.28V85.16ZM161.879 55H168.279V95H161.879V55ZM160.519 42.84C160.519 41.6133 160.919 40.5733 161.719 39.72C162.573 38.8133 163.639 38.36 164.919 38.36C166.199 38.36 167.293 38.8133 168.199 39.72C169.106 40.5733 169.559 41.6133 169.559 42.84C169.559 44.0667 169.106 45.08 168.199 45.88C167.293 46.68 166.199 47.08 164.919 47.08C163.639 47.08 162.573 46.68 161.719 45.88C160.919 45.08 160.519 44.0667 160.519 42.84ZM193.446 78.44L195.686 86.04H195.766L197.766 78.28L206.726 55H213.606L196.566 95.88H193.846L176.486 55H183.846L193.446 78.44Z" fill="black"/>
                </svg>
            </Link>
        )
    }
}

export default Logo
