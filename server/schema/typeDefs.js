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

type Message {
    id: ID!
    user: String!
    text: String!
}

type Query {
    user(id: ID!):User
    users: [User!]
    pets: [Pet]
    login(loginInput: LoginInput): Auth 
    messages: [Message!]
}

type Mutations {
    signup(signupInput: SignupInput): Auth
    postMessage( user: String!, text: String!): ID!
}

type Subscription {
    messages: [Message!]
}
`

module.exports = typeDefs; 