import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import React, { useState } from 'react'
import './index.scss'

const Chat = () =>
{
    // The useState hook initially sets the username to an empty string
    const [ username, setUsername ] = useState( '' )

    //Custom function that will implement the getOrCreateChat function that to select username to chat with
    //only when the correct credentials(user secret, project id, username) are passed will the application be rendered
    function implementingDirectChat ( credentials )
    {
        getOrCreateChat(
            credentials,
            //function will only work if the app is a direct messaging one, hence setting 'is_direct_chat' to true and consequentially setting a list of usernames to search from. one
            { is_direct_chat: true, usernames: [ username ] }, () => setUsername( '' )
        )
    }

    const renderChatForm = ( credentials ) =>
    {
        return (
            <>
                <input
                    type="text"
                    placeholder='Username'
                    value={username} //prop from the useState hook
                    // A controlled function that sets the username to what the user types in the input field
                    onChange={( e ) => setUsername( e.target.value )}
                />

                {/* clicking button will call the implementingDirectChat function that displays a list of usernames to create or find an existing chat.  */}
                <button onClick={() => implementingDirectChat( credentials )}>
                    Chat
                </button>
            </>
        )
    }

    return (
        <ChatEngine
            height='100vh'
            userName='gnartistic'
            // accessing the stored env in the .env file
            userSecret='Secret'
            projectID='3a31985e-6035-459e-9061-8104c8a33da3'
            displayNewChatInterface={( credentials ) => renderChatForm( credentials )} />
    )
}

export default Chat