const { ApolloServer, gql, PubSub } = require('apollo-server-express');
const express = require('express');
const path = require('path');

const { authMiddleware } = require('./utils/auth'); 
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

//const pubsub = new PubSub(); 

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/public')))
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html')); 
})

const startApolloServer = async ({ typeDefs, resolvers }) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));    
    })
};

startApolloServer(typeDefs, resolvers); 



