import React from 'react'
import Loader from 'react-loaders';
import Navbar from '../Navbar';

const Profile = () =>
{
    return (
        <>
            <div className='page'>
                <Navbar />
                <div className='container profile-page'>

                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Profile