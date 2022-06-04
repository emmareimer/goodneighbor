import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import Footer from './Footer';

const MainContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {

    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

export default MainContainer;
