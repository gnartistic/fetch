import React from 'react'
import Loader from 'react-loaders';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import SwipeCard from '../Swiper/swipecard';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries'
const Profile = () =>
{
    const { username: userParam } = useParams(); 
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam}
    });

    const user = data?.user || {}; 
    if (loading) {
        return <div>loading...</div>;
    }
    return (
        <>
            <div className='page'>
                <Navbar />
                <div className='container profile-page'>
                    <h2>
                        Viewing {user.username}'s profile'
                    </h2>
                </div>
                <div className='profile-page'>
                <SwipeCard matches={user.matches} title={`${user.username}'s Fetch Card`} />  
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Profile