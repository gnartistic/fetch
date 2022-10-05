import React from 'react'
import { useSubscription, gql } from '@apollo/client'
import { Chip } from '@material-ui/core';
import { GET_MESSAGES } from "../../utils/queries";

const Messages = ( { user } ) =>
{
    const { data } = useSubscription( GET_MESSAGES )
    if( !data ) {
        return null;
    }
    return (
        <div style={{ marginBottom: "5rem" }}>
            {data.messages.map( ( { id, user: messageUser, text } ) =>
            {
                return (
                    <div key={id} style={{ textAlign: user === messageUser ? "right" : "left" }}>
                        <p style={{ marginBottom: "0.3rem" }}>{messageUser}</p>
                        <Chip style={{ fontSize: "0.9rem" }} color={user === messageUser ? "primary" : "secondary"} label={text} />
                    </div>
                )
            } )}
        </div>
    )
}

export default Messages