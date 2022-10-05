const { ApolloServer } = require( 'apollo-server-express' );
const { PubSub } = require( 'graphql-subscriptions' );
const express = require( 'express' );
const { authMiddleware } = require( './utils/auth' );
const { typeDefs, resolvers } = require( './schema' );
const db = require( './config/connection' );
const { createServer } = require( 'http' );
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } = require( 'apollo-server-core' );
const { makeExecutableSchema } = require( '@graphql-tools/schema' );
const { WebSocketServer } = require( 'ws' );
const { useServer } = require( 'graphql-ws/lib/use/ws' );

const pubsub = new PubSub();

const schema = makeExecutableSchema( { typeDefs, resolvers } );
const PORT = process.env.PORT || 3001;

const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

const httpServer = createServer( app );

const wsServer = new WebSocketServer( {
    server: httpServer,
    path: '/subscriptions',
} );

const serverCleanup = useServer( { schema }, wsServer );
const server = new ApolloServer( {
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ ApolloServerPluginDrainHttpServer( { httpServer } ),
    {
        async serverWillStart ()
        {
            return {
                async drainServer ()
                {
                    await serverCleanup.dispose();
                },
            };
        },
    },
    ApolloServerPluginLandingPageLocalDefault( { embed: true } ),
    ],
    context: authMiddleware, pubsub
} );


const startApolloServer = async ( { typeDefs, resolvers } ) =>
{
    await server.start();
    server.applyMiddleware( { app } );

    db.once( 'open', () =>
    {
        httpServer.listen( PORT, () => console.log( `🌍 Connected on localhost:${ PORT }${server.graphqlPath}`, ) );
    } )
};

startApolloServer( typeDefs, resolvers );



