const { gql } = require('apollo-server-express');

const typeDefs = gql`

// TODO User Input and types below 
type User {
    _id: ID!
    username: String!
    email: String!
    token: String! 
    pets: [Pet]
}
// create users 
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

// TODO Pet input and type below 
type Pet {
    _id: ID
    name: String
    breed: String
    gender: String
}


// TODO Card inputs and type below 
type Card {

}

// TODO Querys below 

type Query {
    user(id: ID!):User
    users: [User!]
    pets: [Pet]
}

// TODO Mutations Below 
type Mutation {
    singup(singupInput: SignupInput): Auth
    login(loginInput: LoginInput): Auth 
}

`;

module.exports = typeDefs; 