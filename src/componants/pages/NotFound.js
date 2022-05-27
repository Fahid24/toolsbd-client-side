import React from 'react';
import img from '../images/dribbble_1.gif'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center my-2 text-5xl font-bold text-red-500'>404</h1>
            <h1 className='text-center mb-2 text-3xl font-bold text-red-500'>PAGE NOT FOUND</h1>
            <img className='mx-auto' src={img} alt="PAGE NOT FOUND" />
        </div>
    );
};

export default NotFound;