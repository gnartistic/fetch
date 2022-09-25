import React from 'react'
import './index.scss';
import Ball from '../../assets/images/invertedBall.png';
import { Link } from "react-router-dom";
import Loader from 'react-loaders';

const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

const Home = () =>
{
    return (
        <>
        <div className='container login-page' style={bg}>
            <div className='logo-zone'>
                <h1><img src={Ball} alt="white tennis ball" />Fetch</h1>
            </div>
            <div className='login-form'>
                <form>
                    <input type="text" name="username" placeholder="username" required />

                    <input type="password" name="password" placeholder="password" required />

                    <button className='signIn'>Sign in</button>

                    <Link>Trouble signing in?</Link>

                    <button className='createAccount'>
                        <Link to='/Signup'>Create Account</Link>
                    </button>

                    <p>By tapping "Create Account" or "Sign in", you agree to our Terms of Service.</p>
                </form>

            </div>
            </div>
        <Loader type="ball-pulse-sync" />
            </>
    )
}

export default Home;