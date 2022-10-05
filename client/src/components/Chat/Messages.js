import React from 'react'
import { useSubscription } from '@apollo/client'
import { Chip } from '@material-ui/core';
import { GET_MESSAGES } from "../../utils/queries";
import './index.scss'

const Messages = ( { username } ) =>
{
    const { data } = useSubscription( GET_MESSAGES )
    if( !data ) {
        return null;
    }
    return (
        <>
        <div style={{ paddingBottom: "20vh" }}>
            {data.messages.map( ( { id, username: messageUser, message } ) =>
            {
                return (
                    <div key={id} style={{textAlign: username === messageUser ? "right" : "left" }}>
                        <p style={{fontFamily:"Medium", marginBottom: ".3vw", marginRight:"5vw" }}>{messageUser}</p>
                        <Chip style={{ fontFamily: "Medium", fontSize: "0.9rem", marginBottom: ".5vw"}} color={username === messageUser ? "primary" : "secondary"} label={message} />
                        </div>
                )
            } )}
            </div>
            </>
    )
}

export default Messages