import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import FriendList from './FriendsList';
import './index.scss';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { ADD_FRIEND } from '../../utils/mutations';
// import Auth from '../../utils/auth';
import { Button } from '@material-ui/core';
import Navbar from '../Navbar';
import Loader from 'react-loaders';

const Profile = ( props ) =>
{
    const { username: userParam } = useParams();

    const [ addFriend ] = useMutation( ADD_FRIEND );
    const { data } = useQuery( userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    } );

    const user = data?.me || data?.user || {};

    // // navigate to personal profile page if username is yours
    // if( Auth.loggedIn() && Auth.getProfile().data.username === userParam ) {
    //     return <Navigate to="/profile:username" />;
    // }

    // if( !user?.username ) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // }

    const handleClick = async () =>
    {
        try {
            await addFriend( {
                variables: { id: user._id },
            } );
        } catch( e ) {
            console.error( e );
        }
    };

    return (
        <>
            <div className='page'>
                <Navbar />
                <div className="friends-page container">
                    <div className="friendlist">
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Charlie</h2>
                                <h3>@Gnartistic</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                        <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                         <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                         <div className='friend-info'>
                            <div className='title-container'>
                                <h2>Friend's Name</h2>
                                <h3>Friend's username</h3>
                            </div>
                            <Button>
                                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                                Profile
                            </Button>
                            <Button className='remove'>
                                Remove
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default Profile;
