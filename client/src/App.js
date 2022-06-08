import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Profile from './pages/Profile';
// import ClaimedTask from './pages/ClaimedTask';
// import CompletedTask from './pages/CompletedTask';
// import CreateTask from './pages/CreateTask';
// import TaskDescription from './pages/TaskDescription';
// import Home from './pages/Home';
// import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
           <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/login" 
                element={<Login />}
              />
              {/* <Route 
                path="/signup" 
                element={<SignUp />}
              /> */}
              {/* <Route 
                // path="/profiles/:username" or path="/me"
                // element={<Profile />}
              />
              <Route 
                path="" 
                // element={<ClaimedTask />}
              />
              <Route 
                path="" 
                // element={<CompletedTask />}
              /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;


// at some point we'll need to update the App() return with the ReactContainer 