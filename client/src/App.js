import './App.scss';
import './index.css';
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup/';
import Home from './components/Home';
import { Chat } from './components/Chat/';
import Friends from './components/Friends';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink( {
  uri: 'https://localhost:3001/graphql'
} );

const wsLink = new GraphQLWsLink( createClient( {
  url: 'ws://localhost:3001/subscriptions',
} ) );

const splitLink = split(
  ( { query } ) =>
  {
    const definition = getMainDefinition( query );
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient( {
  link: splitLink,
  cache: new InMemoryCache()
} );


function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Home' element={<Home />} />
            <Route path='Chat' element={<Chat />} />
              <Route path='Friends' element={<Friends />} />
              <Route path='Profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App
