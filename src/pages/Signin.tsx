import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from "../assets/straight-tracker-logo.png"
import "../styles/General.css"
import "../styles/Home.css"
import "../styles/Signin.css"

const Signin: React.FC = () => {
    const navigate = useNavigate();
    
    const homePage = () => {
        navigate('/');
    }

    const signinPage = () => {
        navigate('/signin');
    }
    
    const signupPage = () => {
        navigate('/signup');
    }

    return (
        <div>
            <div className="home-title-box">
                <div className="logo-box" onClick={homePage}>
                    <img src={Logo} className="logo-css"></img>
                    <p className="home-title-name">
                        Straight Tracker
                    </p>
                </div>
                <div className="login-box">
                    <button className="sign-in-css" onClick={signinPage}>
                        Sign in
                    </button>
                    <button className="sign-up-css" onClick={signupPage}>
                        Sign up
                    </button>
                </div>
            </div>
            <h1 style={{color: 'black'}}>
                SIGN IN PAGE
            </h1>
        </div>
    )
}

export default Signin