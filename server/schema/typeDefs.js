const { gql } = require("apollo-server-express");

const typeDefs = gql`


type User {
    _id: ID!
    username: String!
    email: String!
    token: String! 
    pets: [Pet]
	friends: [Friends]
    age: String!
	gender: String!
	showMe: String!
	city: String!
	state: String!
	occupation: String!
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

type Friends {
    _id:ID
    username: String
}

type Pet {
    _id: ID
    petName: String
    breed: String
    petGender: String
}

type Query {
    me: User
    user(id: ID!):User
    users: [User!]
    pets: [Pet]
}


type Mutation {
    signup(signupInput: SignupInput): Auth
    login(loginInput: LoginInput): Auth 
}

`;

module.exports = typeDefs;
