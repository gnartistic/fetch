import './App.scss';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import Layout from './components/Layout';
import Home from './components/Home';
import Signup from './components/Signup/Signup.js';
// import { StoreProvider } from './utils/GlobalState';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App ()
{ 
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider> */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='Signup' element={<Signup />} />
        </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
