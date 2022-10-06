import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import FriendsList from './FriendsList';
import './index.scss';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';
import Navbar from '../Navbar';
import Loader from 'react-loaders';

const Friends = ( props ) =>
{
    const { username: userParam } = useParams();
    const { data } = useQuery( userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    } );

    const user = data?.me || data?.user || {};

    return (
        <>
            <div className='page'>
                <Navbar />
                <div className="friends-page container">
                    <div className="friendlist">
                        <FriendsList
                            username={user.username}
                        friends={user.friends}
                        />
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default Friends;
