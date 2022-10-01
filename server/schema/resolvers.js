const { User, Pets } = require('../models');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken'); 
const { signToken } = require('../utils/auth'); 
const { AuthenticationError } = require('apollo-server-express'); 

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({}).populate('pets')
        },
        user: async (parent, { id }) => {
            return await User.findById(id).populate('pets'); 
        },
        me: async (parent, args) => {
            const userData = await User.findOne({})
            .select('__v-password')
            .populate('pets')

            return userData
        }, 
    },

    Mutations: {
        // User mutations below for creating users and loging in a user 
        signup: async (parent,{signupInput: { username, email, password}}) => {
            password = await bcrypt.hash(password, 15);
            const user = await User.create({
                username,
                email,
                password
            });
            const token = signToken(user);

            return { token, user };
            },
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Yo this user does not exist!');
            }
            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('The password is incorrect! ')
            }

            const token = signToken(user)
            return { token, user }; 
        }
    }

    // Mutations below for the creation of cards/posts 


module.exports = resolvers; 