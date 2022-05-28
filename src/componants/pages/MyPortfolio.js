import React from 'react';

const MyPortfolio = () => {
    return (
        <div class="mockup-window border bg-base-300 m-12 h-screen">
            <div class="flex justify-center px-4 py-16 bg-base-200">
                <div >
                    <h1 className='text-2xl font-bold'>Name: <span className='text-xl my-2 font-bold'>Fahid Hasan Fuad</span></h1>
                    <h1 className='text-2xl font-bold'>Email: <span className='text-xl my-2 font-bold'>fahidhasanfuad20018@gmail.com</span></h1>
                    <h1 className='text-2xl font-bold'>Education: <span className='text-xl my-2 font-bold'>HSC passed</span></h1>
                    <h1 className='text-2xl font-bold'>Technologies/Skill: <span className='text-xl my-2 font-bold'>HTML,CSS,JS,React.js,boostrap,tailwind,API</span></h1>
                    <div className='text-2xl font-bold'>projects links: <span className='text-xl my-2 font-bold'>
                        <a href="https://my-11th-assignment-clintsite.web.app/"><h1 className=' text-blue-600 text-xl my-2 font-bold'>Project1 bikes store</h1></a>
                        <a href="https://assignment-authentication.web.app/#services"><h1 className=' text-blue-600 text-xl my-2 font-bold'> project2 wildlifr photo grapher</h1></a>
                        <a href="https://panda-commerce-useing-boostrap.netlify.app/#"><h1 className='text-blue-600 text-xl my-2 font-bold'>project3 cars </h1></a>
                    </span></div>

                </div>
            </div>
        </div>)

};

export default MyPortfolio;