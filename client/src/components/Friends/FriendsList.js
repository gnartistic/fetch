import React from "react";
import { Button } from '@material-ui/core';
// import { Link } from "react-router-dom";
import './index.scss'

const FriendList = ({ friendCount, username, friends }) => {
    // if (!friends || !friends.length) {
    //     return (
    //         <p className="makeSumFriends">{username}, make some friends!</p>
    //     );
    // }

    return (
        <>
            {/* {friends.map((friend) => ( */}
            {/* key={friend._id} ***goes in the button element opening tag */}
            <h2>Friend's Name
                <Button>
                {/* <Link to={/profile/${friend.username}}> {friend.username}</Link> */}
                Friend's Profile
                </Button>
            {/* ))} */}</h2>
        </>
    );
};

export default FriendList;