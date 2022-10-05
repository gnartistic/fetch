import './App.scss';
import './index.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from './components/Login';
import Signup from './components/Signup/';
import Home from './components/Home';
import { Chat } from './components/Chat/';
import Friends from './components/Friends';
import Profile from './components/Profile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
} );


const client = new ApolloClient( {
    link: authLink.concat( httpLink ),
    cache: new InMemoryCache(),
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
