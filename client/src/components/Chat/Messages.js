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
        <div style={{ marginBottom: "5rem" }}>
            {data.messages.map( ( { id, username: messageUser, message } ) =>
            {
                return (
                    <div className="messageList" key={id} style={{ textAlign: username === messageUser ? "left" : "right" }}>
                        <p style={{fontFamily:"Medium", marginBottom: ".3vw", marginRight:"5vw" }}>{messageUser}</p>
                        <Chip style={{fontFamily:"Medium", fontSize: "0.9rem", marginBottom: ".5vw", marginRight:"4.5vw"}} color={username === messageUser ? "#637dec" : "#444"} label={message} />
                    </div>
                )
            } )}
            </div>
            </>
    )
}

export default Messages