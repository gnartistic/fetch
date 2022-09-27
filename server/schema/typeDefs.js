const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    pets: [Pet]
}

type Pet {
    _id: ID
    name: String
    breed: String
    gender: String
}

type Query {
    user(id: ID!):User
    users: [User!]
    pets: [Pet]
}

// TODO: Mutations Needed Below 

type Mutation {
    singup(username: String!, email: String!, password: String!): Boolean!
    login(email: String!, password: String!): String! 
}

`;

module.exports = typeDefs; 