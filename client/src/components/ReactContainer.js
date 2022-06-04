import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Footer from './Nav';

const Container = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {

    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Nav />
            <Footer />
        </div>
    )
}

export default Container;
