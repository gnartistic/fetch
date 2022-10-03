import { ApolloClient, InMemoryCache, useMutation, gql } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import { Button } from '@material-ui/core';
import Messages from './Messages'
import React, { useState } from 'react';
import './index.scss'
import Navbar from '../Navbar'
import Loader from 'react-loaders';

const link = new WebSocketLink( {
    uri: `ws://localhost:3001/`,
    options: {
        reconnect: true,
    },
} );

export const client = new ApolloClient( {
    link, //websocket link
    uri: 'http://localhost:4000/', //connect to server
    cache: new InMemoryCache(),
} );

const font = {
    fontFamily: 'Medium'
}

const POST_MESSAGE = gql`
    mutation($user:String!, $text:String!){
    postMessage(user:$user, text:$text)
    }
`;

export const Chat = () =>
{
    const [ user, setUser ] = useState( "" ); //initialize user
    const [ text, setText ] = useState( "" ); //initialize text

    // 1.
    const [ postMessage ] = useMutation( POST_MESSAGE )

    const sendMessage = () =>
    {
        if( text.length > 0 && user.length > 0 ) {
            //calls the mutate function
            postMessage( {
                variables: { user: user, text: text }
            } )
            setText( "" ); //reset text field
        } else {
            // need to make an error message
        }
    }

    return (
        <>
            <div className='page'>
                <Navbar />
            <div className='container chat-page'>
                <h3 style={font}>Welcome to your messages!</h3>
                <Messages user={user}/>
                {/*add this block below*/}
                <div className='messageContainer'>
                    <div className='messageInputZone'>
                        <input onChange={( e ) =>
                        {
                            setUser( e.target.value )
                        }} value={user} size="small" fullWidth variant="outlined"
                                required
                                placeholder='username'
                        label="Enter name" />
                    
                        <input onChange={( e ) =>
                        {
                            setText( e.target.value )
                    }} value={text} size="small" fullWidth variant="outlined"
                                required
                                placeholder='message'
                        style={font} label="Enter message here" />
                    
                        <Button onClick={sendMessage} fullWidth variant="contained" style={{ color: "white", fontFamily: 'Medium' }}>Send</Button>
                        </div>
                </div>
            </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}