const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    name: String
    email: String
    pets: [Pet]
}

type Pet {
    _id: ID
    name: String
    breed: String
    gender: String
}

type Query {
    user: [User]
    pets: [Pet]
}

// TODO: Mutations Needed Below 

`;

module.exports = typeDefs; 