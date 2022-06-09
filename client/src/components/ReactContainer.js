import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Footer from './Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ClaimedTask from './pages/ClaimedTask';
import CreateTask from './pages/CreateTask';
import CompletedTask from './pages/CompletedTask';
import TaskDescription from './pages/TaskDescription';
import Main from './pages/Main';
import Profile from './pages/Profile';

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
            <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <Footer />
            </div>
        );
    };
}

export default Container;
