const { gql } = require( 'apollo-server-express' );


const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    token: String
    pets: [Pet]
	friends: [User]
    age: String!
	gender: String!
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
    id: ID
    username: String
}

type Pet {
    _id: ID
    petName: String
    breed: String
    petGender: String
}

type Message {
    id: ID!
    username: String!
    message: String!
}

type Query {
    me: User
    users: [User]
    user(id: ID!):User
    pets: [Pet]
    messages: [Message!]
}

type Mutation {
    postMessage( username: String!, message: String!): ID!
    login(email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    addUser(username: String!, email: String!, password: String!): Auth
}

type Subscription {
    messages: [Message!]
}
`

module.exports = typeDefs;
