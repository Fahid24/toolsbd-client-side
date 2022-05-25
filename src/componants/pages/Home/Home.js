import React from 'react';
import Footer from '../sheard/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import DemoTools from './Navbar/DemoTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoTools></DemoTools>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;