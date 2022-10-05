import React from 'react'
import Loader from 'react-loaders';
import Navbar from '../Navbar';

import { useParams } from 'react-router-dom';
import SwipeCard from '../Swiper/swipecard';
import FriendList from '../Friends/FriendsList'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries'
import { ADD_FRIEND } from '../../utils/mutations';

const Profile = () =>
{
    const { username: userParam } = useParams(); 
    const [addFriend] = useMutation(ADD_FRIEND)
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam}
    });

    const user = data?.me || data?.user || {}; 
    if (loading) {
        return <div>loading...</div>;
    }
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to access this page. Use the navigation to sign up or login!
            </h4>
        );
    }

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id},
            });
        } catch (e) {
            console.error(e);
        }
    };
    
    return (
        <>
            <div className='page'>
                <Navbar />
                <div className='container profile-page'>
                    <h2>
                        Viewing {userParam ? `${user.username}'s` : 'your'} profile
                    </h2>

                    {userParam && (
                        <button onClick={handleClick}>
                            Add Friend
                        </button>
                    )}
                </div>
                
                <div className='profile-page'>
                <SwipeCard 
                matches={user.matches} 
                title={`${user.username}'s Fetch Card`} />  
                </div>

                <div>
                    <FriendList
                    username={user.username}
                    friendCount={user.friendCount}
                    friends={user.friends}
                    />
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Profile