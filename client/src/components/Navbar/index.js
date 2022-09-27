import React from 'react'
import './index.scss'
import Ball from '../../assets/images/invertedBall.png'

// 

const bg = {
    height:'8rem',
    width: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

const Navbar = () => {
    return (
        <div className='nav' style={bg}>
            <h1>
                <img src={Ball} alt='fetch logo' />
                Fetch
                </h1>
        </div>
    )
}

export default Navbar;