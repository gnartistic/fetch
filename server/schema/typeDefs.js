const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    token: String! 
    pets: [Pet]
}

input SignupInput {
    username: String
    email: String
    password: String
}

input LoginInput {
    email: String
    password: String
}

type Auth {
    token: ID!
    user: User
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

type Mutation {
    singup(singupInput: SignupInput): Auth
    login(loginInput: LoginInput): Auth 
}

`;

module.exports = typeDefs; 