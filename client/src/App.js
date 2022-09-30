import './App.scss';
import './index.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import Login from './components/Login';
<<<<<<< HEAD
import Signup from './components/Signup/Signup.js';
import Home from './components/Home';
=======
import Signup from './components/Signup/';
import Home from './components/Home';
import DirectMessaging from './components/Chat/';
>>>>>>> 8fff8941df7eefc4f3a4e234f9bb5700f101fb52
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
    <>
      <Router>
        <div>
          {/* <StoreProvider> */}
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Login />} />
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Home' element={<Home />} />
        </Routes>
=======
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Home' element={<Home />} />
            <Route path='Chat' element={<DirectMessaging />} />
          </Routes>
>>>>>>> 8fff8941df7eefc4f3a4e234f9bb5700f101fb52
          {/* </StoreProvider> */}
        </div>
      </Router>
      {/* </ApolloProvider> */}
    </>
  );
}

export default App
