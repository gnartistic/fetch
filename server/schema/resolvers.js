const { User } = require('../models');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken'); 
const { signToken } = require( '../utils/auth' );
const { AuthenticationError } = require( 'apollo-server-express' );
const { PubSub } = require( 'graphql-subscriptions' );

const pubsub = new PubSub();


const messages = [];
const subscribers = [];
const onMessagesUpdates = ( fn ) => subscribers.push( fn );

const resolvers = {
    Query: {
        users: async ( parent, args ) =>
        {
            return await User.find( {} ).populate( 'pets' )
        },

        user: async ( parent, args ) =>
        {
            const userData = await User.findOne( {} )
                .select( '__v-password' )
                .populate( 'pets' )
                .populate("friends");

            return userData
        },
        messages: () => messages,
    },

    Mutation: {
        // User mutations below for creating users and loging in a user 
        addUser: async ( parent, args ) =>
        {
            const user = await User.create( args );
            const token = signToken( user );

            return { token, user };
        },
        login: async ( parent, { email, password } ) =>
        {
            const user = await User.findOne( { email } );

            if( !user ) {
                throw new AuthenticationError( 'Incorrect credentials' );
            }

            const correctPw = await user.isCorrectPassword( password );

            if( !correctPw ) {
                throw new AuthenticationError( 'Incorrect credentials' );
            }

            const token = signToken( user );
            return { token, user };
        },
        addFriend: async ( parent, { friendId }, context ) =>
        {
            if( context.user ) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate( 'friends' );
                console.log(context);
                return updatedUser;
            }
        },
        postMessage: ( parent, { username, message } ) =>
        {   
            pubsub.publish( 'POST_MESSAGE', { postMessage: username, message } );
            const id = messages.length;
            messages.push( {id, username, message } );
            subscribers.forEach( ( fn ) => fn() ); //add this line
            return id;
        },
    },
    Subscription: {
        messages: {
            subscribe: () =>
            {
                //create random number as the channel to publish messages to
                const channel = Math.random().toString( 36 ).slice( 2, 15 );

                //push the user to the subscriber array with onMessagesUpdates function and 
                //publish updated messages array to the channel as the callback
                onMessagesUpdates( () => pubsub.publish( channel, { messages } ) );

                //publish all messages immediately once a user subscribed
                setTimeout( () => pubsub.publish( channel, { messages } ), 0 );

                //returns the asyncIterator
                return pubsub.asyncIterator( channel );
            },
        },
    }
};



module.exports = resolvers; 