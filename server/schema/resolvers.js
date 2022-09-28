const { User, Pets } = require('../models');

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({}).populate('pets')
        },
        user: async (parent, { id }) => {
            return await User.findById(id); 
        }
    },
    Mutations: {
        signup: async (parent,{signupInput: { username, email, password}}) => {
            const user = await User.create({
                username,
                email,
                password
            });
            return user; 
        },
        login: async (parent, { email, password}) => {
            
        }
    }

};

module.exports = resolvers; 