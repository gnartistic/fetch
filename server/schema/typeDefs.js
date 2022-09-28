const { gql } = require('apollo-server-express');

const typeDefs = gql`

// TODO User Input and types below 
type User {
    _id: ID!
    username: String!
    email: String!
    token: Stirng! 
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


// TODO Pet input and type below 
type Pet {
    _id: ID
    name: String
    breed: String
    gender: String
}

// TODO Querys below 
type Query {
    user(id: ID!):User
    users: [User!]
    pets: [Pet]
}

// TODO Mutations Below 
type Mutation {
    singup(singupInput: SignupInput): User
    login(loginInput: LoginInput): User 
}

`;

module.exports = typeDefs; 