const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
//const mongoose = require('mongoose');

// mongoose.connect(
// process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mango-api',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
// );

// // Use this to log mongo queries being executed!
// mongoose.set('debug', true);

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers'); 
//const db = require('./config.connection');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
};

startApolloServer(typeDefs, resolvers); 



