import React from 'react'
import './index.scss';
import Ball from '../../assets/images/invertedBall.png';
import { Link } from "react-router-dom";
import Loader from 'react-loaders';

// background color, for some reason I can only get it to render using css enclosed javascript
const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

// login component, the front page of the app
const Login = () =>
{
    return (
        <>
        {/* The container in layout.scss style from css enclosed javascript above */}
        <div className='container login-page' style={bg}>
                <div className='logo-zone'>
                {/* The tennis ball logo */}
                <h1> <img src={Ball} alt="white tennis ball" />Fetch</h1>
            </div>
            <div className='login-form'>
                    <form>
                    {/* need to update this to use MUI components. <textfield and <formcontrol  */}
                    <input type="text" name="username" placeholder="username" required />

                    <input type="password" name="password" placeholder="password" required />

                    <button className='signIn'>Sign in</button>
                    {/* needs to be linked up to a page to send an email for lost password */}
                    <Link>Trouble signing in?</Link>
                    {/* link to signup component */}
                    <button className='createAccount'>
                        <Link to='/Signup'>Create Account</Link>
                    </button>

                    <p>By tapping "Create Account" or "Sign in", you agree to our Terms of Service.</p>
                </form>

            </div>
            </div>
        {/* the loader inbetween screens */}
        <Loader type="ball-pulse-sync" />
            </>
    )
}

export default Login;