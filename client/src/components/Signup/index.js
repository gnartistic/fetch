import React from 'react';
import Loader from 'react-loaders';
import './index.scss';

const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

const index = () => {
    return (
        <>
        <div className='container signup-page' style={bg}>
            <div className='form-zone'>
                    <form className='signup-form'>
                        <div>
                        <ul>
                            <label>Full Name</label>

                                <li className='half'>
                                    <input type="text" name="name" placeholder="Enter name" required />
                            </li>
                            
                            <label>Contact Info</label>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Add email" required />
                            </li>
                            <li className='half'>
                                    <input type="tel" name="tel" placeholder="Add phone number" required />
                            </li>
                            <label>location</label>
                                <li>
                                    <input placeholder='Enter city' type="text" name="location" required />
                            </li>
                            <label>About Me</label>
                                <li>
                                    <textarea placeholder='Add a few details about yourself' name='message' required></textarea>
                                </li>
                            <button>
                                Join
                                </button>
                            </ul>
                        {/* </div>
                            <ul>
                            <label>Full Name</label>

                                <li className='half'>
                                    <input type="text" name="name" placeholder="Enter name" required />
                            </li>
                            
                            <label>Contact Info</label>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Add email" required />
                            </li>
                            <li className='half'>
                                    <input type="tel" name="tel" placeholder="Add phone number" required />
                            </li>
                            <label>location</label>
                                <li>
                                    <input placeholder='Enter city' type="text" name="location" required />
                            </li>
                            <label>About Me</label>
                                <li>
                                    <textarea placeholder='Add a few details about yourself' name='message' required></textarea>
                            </li>
                            </ul>
                        <div> */}

                        </div>
                        </form>
            </div>
            </div>
            <Loader type="ball-pulse-sync" />
            </>
)
}

export default index