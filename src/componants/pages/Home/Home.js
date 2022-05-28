import React from 'react';
import About from '../About';
import Footer from '../sheard/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import DemoTools from './DemoTools';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoTools></DemoTools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;