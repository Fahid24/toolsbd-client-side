import React from 'react';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;