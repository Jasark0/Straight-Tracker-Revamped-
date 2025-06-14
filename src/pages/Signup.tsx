import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from "../assets/straight-tracker-logo.png"
import Google from "../assets/google.png"
import "../styles/General.css"
import "../styles/Home.css"
import "../styles/Signup.css"

const Signup: React.FC = () => {
    const navigate = useNavigate();
    
    const homePage = () => {
        navigate('/');
    }

    const signinPage = () => {
        navigate('/signin');
    }

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword){
            setError("Passwords do not match.");
            return;
        }

        setError('');
        console.log("Sign up submitted");
    };
    

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    return (
        <div className="page-box">
            <div className="home-title-box">
                <div className="logo-box" onClick={homePage}>
                    <img src={Logo} className="logo-css"></img>
                    <p className="home-title-name">
                        Straight Tracker
                    </p>
                </div>
            </div>

            <div className="sign-up-box">
                <p className="title-text-css">Create an Account</p>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Your name" required pattern="^[A-Za-z0-9_]+$" title="Username can only contain letters, numbers, and underscores"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email address" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" value={password} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter your password again" value={confirmPassword} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}required />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
                <p className="or-css">
                        or
                </p>
                <img src={Google} className="google-css"></img>
            </div>

        </div>
    )
}

export default Signup