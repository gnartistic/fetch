import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.scss';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { ADD_FRIEND } from '../../utils/mutations';
// import Auth from '../../utils/auth';
import { Button } from '@material-ui/core';
import Navbar from '../Navbar';
import Loader from 'react-loaders';

const FriendsList = ( { username, friends } ) =>
{
    if( !friends || !friends.length ) {
        return <p style={{fontFamily:'Medium', fontSize:'4vh'}}>{username}Make some friends!</p>;
    }
    return (
        <>
            <div className='friend-info'>
                <div className='title-container'>
                    <h2>{friends.username}</h2>
                </div>
                <div>
                    {friends?.map( friend => (
                        <button className="btn w-100 display-block mb-2" key={friends._id}>
                            <Link to={`/profile/${ friend.username }`}>Profile</Link>
                        </button>
                    ) )}
                </div>
            </div>
        </>
    );
};

export default FriendsList;