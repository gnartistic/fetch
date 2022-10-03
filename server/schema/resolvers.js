const { User, Pets } = require('../models');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken'); 
const { signToken } = require('../utils/auth'); 
const { AuthenticationError } = require('apollo-server-express'); 


const messages = [];
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({}).populate('pets')
        },

        user: async (parent, args) => {
            const userData = await User.findOne({})
            .select('__v-password')
            .populate('pets')

            return userData
        },
        messages: () => messages, 
    },

    Mutations: {
        // User mutations below for creating users and loging in a user 
        signup: async (parent,{SignupInput: { username, email, password}}) => {
            password = await bcrypt.hash(password, 15);
            const user = await User.create({
                username,
                email,
                password
            });
            const token = signToken(user);

            return { token, user };
        },

            postMessage: (parent, { user, text }) => {
                const id = messages.length;
                messages.push({id, user, text});
                subscribers.forEach((fn) => fn()); 
                return id; 
            },
        },

    Subscription: {
        messages: {
            subscribe: (parent, args, { pubsub }) => {
                const channel = Math.random().toString(36).slice(2, 15);

                onMessagesUpdates(() => pubsub.publish(channel, { messages }));

                setTimeout(() => pubsub.publish(channel, { messages }), 0);

                return pubsub.asyncIterator(channel); 
        },
        },
    },

            }



module.exports = resolvers; 