import React, { useState } from 'react';
import Nav from './Nav';
import Home from '../pages/Home';
import Footer from './Footer';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ClaimedTask from '../pages/ClaimedTask';
import CreateTask from '../pages/CreateTask';
import CompletedTask from '../pages/CompletedTask';
import TaskDescription from '../pages/TaskDescription';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

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

const Container = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        };
        if (currentPage === 'Login') {
            return <Login />
        };
        if (currentPage === 'SignUp') {
            return <SignUp />
        };
        if (currentPage === 'ClaimedTask') {
            return <ClaimedTask />
        };
        if (currentPage === 'Create Task') {
            return <CreateTask />
        };
        if (currentPage === 'CompletedTask') {
            return <CompletedTask />
        };

        if (currentPage === 'TaskDescription') {
            return <TaskDescription />
        };
        if (currentPage === 'Main') {
            return <Main />
        };
        if (currentPage === 'Profile') {
            return <Profile />
        };

        const handlePageChange = (page) => {
            setCurrentPage(page);
        };

        return (
            <ApolloProvider client={client}>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <Footer />
            </ApolloProvider>
        );
    };
}

export default Container;
