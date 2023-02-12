import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './forgot.css';

import Navbar from '../Navbar/navbar'

export default function ForgotPassword() {
    return (
        <div className="body">
            <Navbar />
            <div className="forgot-window">
                <div className="forgot">
                    <h3>Forgot Password?</h3>
                    <h5>No worries,we'll send you reset instructions</h5>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" className='email' id='email' placeholder='Enter Your Email' />
                    </div>
                    <button>Reset Password</button>
                    <a href="/login">
                        <FaArrowLeft />
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    )
}
