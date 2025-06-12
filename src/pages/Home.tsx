import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from "../assets/straight-tracker-logo.png"
import "../styles/General.css"
import "../styles/Home.css"

const Home: React.FC = () => {
    return (
        <div className="home-title-box">
            <img src={Logo} className="logo-css"></img>
            <p className="home-title-name">
                Straight Tracker
            </p>
        </div>
    )
}

export default Home