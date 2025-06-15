import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { supabase } from '../client'

import Logo from "../assets/straight-tracker-logo.png"
import Google from "../assets/google.png"
import "../styles/General.css"
import "../styles/Home.css"
import "../styles/Signup.css"


const Signup: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    console.log(formData);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) 
    {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            };
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        // 1. Confirm Password Check
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            const {data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        username: formData.username
                    }
                }
            })
            if (error) { throw error;}
            alert ("Check your email for the confirmation link.");
        } catch (error){
            alert ("Signup.tsx: " + error);
        }
    }

    const homePage = () => {
        navigate('/');
    }

    const signinPage = () => {
        navigate('/signin');
    }
    
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        type="text" 
                        placeholder="Your name" 
                        required pattern="^[A-Za-z0-9_]+$" 
                        title="Username can only contain letters, numbers, and underscores"
                        name="username"
                        onChange= {handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        placeholder="Email address" 
                        required
                        name="email"
                        onChange= {handleChange}
                         />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password"
                        placeholder="Password" 
                        required
                        name="password"
                        onChange= {handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter your password again" 
                        required
                        name="confirmPassword"
                        onChange= {handleChange}/>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
                <p className="or-css">
                        or
                </p>
                <img src={Google} className="google-css"></img>
                <p className="or-css">Already have an account? <Link to='/signin'>  Login</Link> </p> 
                
            </div>

        </div>
    )
}

export default Signup