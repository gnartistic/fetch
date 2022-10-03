const { ApolloServer, gql } = require('apollo-server-express');
const { PubSub } = require ('graphql-subscriptions'); 
const express = require('express');
const path = require('path');

const { authMiddleware } = require('./utils/auth'); 
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

const pubsub = new PubSub(); 

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware, pubsub
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const startApolloServer = async ({ typeDefs, resolvers }) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));    
    })
};

startApolloServer(typeDefs, resolvers); 



