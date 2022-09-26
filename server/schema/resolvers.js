const { User, Pets } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return await User.find({}).populate('pets')
        }
    }
};

module.exports = resolvers; 