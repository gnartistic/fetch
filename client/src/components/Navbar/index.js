import React from 'react'
import './index.scss'
<<<<<<< HEAD
import Ball from '../../assets/images/invertedBall.png'

// 

const bg = {
    height:'8rem',
    width: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}
=======
import { NavLink} from 'react-router-dom'
import Ball from '../../assets/images/invertedBall.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 8fff8941df7eefc4f3a4e234f9bb5700f101fb52

// 

const bg = {
    height:'8rem',
    width: '100%',
    background: 'linear-gradient(90deg, #637dec 0%,#7068ce 20%, #7e55af 100%)'
}

const font = {
    fontFamily: 'Medium'
}
const Navbar = () => {
    return (
<<<<<<< HEAD
        <div className='nav' style={bg}>
            <h1>
                <img src={Ball} alt='fetch logo' />
                Fetch
                </h1>
        </div>
=======
        <>
        <div className='nav-bar2' style={bg}>
        
        </div>
        <div className='nav-bar' style={bg}>
            {/* logo container */}
            <div className='logo-zone'>
            <h1>
                <img src={Ball} alt='fetch logo' />
                Fetch
            </h1>
            </div>
            {/* icon container */}
            <nav>
                <NavLink exact='true' activeclassname='active' className="chat-link" to='/chat'>
                        <FontAwesomeIcon className='icon' icon={faComment} color='#f0f8ff' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="profile-link" to='/profile'>
                        <FontAwesomeIcon className='icon' icon={faUser} color='#f0f8ff' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="following-link" to='/following'>
                        <FontAwesomeIcon className='icon' icon={faSquarePlus} color='#f0f8ff' />
                </NavLink>
            </nav>
            </div>
            </>
>>>>>>> 8fff8941df7eefc4f3a4e234f9bb5700f101fb52
    )
}

export default Navbar;