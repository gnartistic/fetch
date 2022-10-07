import { useMutation} from '@apollo/client';
import { Button } from '@material-ui/core';
import Messages from './Messages'
import React, { useState } from 'react';
import './index.scss'
import Navbar from '../Navbar'
import Loader from 'react-loaders';
import { POST_MESSAGE} from "../../utils/mutations";



const font = {
    fontFamily: 'Medium'
}

export const Chat = () =>
{
    const [ user, setUser ] = useState( "" ); //initialize user
    const [ message, setMessage ] = useState( "" ); //initialize text

    // 1.
    const [ postMessage ] = useMutation( POST_MESSAGE )

    const sendMessage = () =>
    {
        if( message.length > 0 && user.length > 0 ) {
            //calls the mutate function
            postMessage( {
                variables: { username: user, message: message }
            } )
            setMessage( "" ); //reset text field
        } else {
            // need to make an error message
        }
    }

    return (
        <>
            <div className='page'>
                <Navbar />
                <div className='container chat-page'>
                    <div>
                    <div className='messageList'>
                        <h3 style={font}>These are your messages, {user}.</h3>
                            <Messages username={user} />
                    </div>
                    </div>
                    {/*add this block below*/}
                    <div className='messageContainer'>
                        <div className='messageInputZone'>
                            <input onChange={( e ) =>
                            {
                                setUser( e.target.value )
                            }} value={user}
                                required
                                placeholder='username'
                                label="Enter name" />

                            <input onChange={( e ) =>
                            {
                                setMessage( e.target.value )
                            }} value={message}
                                required
                                placeholder='message'
                                style={font} label="Enter message here" />

                            <Button onClick={sendMessage}  variant="contained" style={{ color: "white", fontFamily: 'Medium' }}>Send</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}