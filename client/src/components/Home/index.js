import React from 'react'
import './index.scss';
import Ball from '../../assets/images/invertedBall.png';

const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

const Home = () =>
{
    return (
        <div className='container home-page' style={bg}>
            <div className='logo-zone'>
                <h1><img src={Ball} alt="white tennis ball" />Fetch</h1>
            </div>
            <div className='login-form'>
                <form>
                    <input type="text" name="username" placeholder="username" required />

                    <input type="password" name="password" placeholder="password" required />

                    <button className='signIn'>Sign in</button>

                    <a href=''>Trouble signing in?</a>

                    <button className='createAccount'>Create Account</button>

                    <p>By tapping "Create Account" or "Sign in", you agree to our Terms of Service.</p>
                </form>

            </div>
        </div>
    )
}

export default Home;