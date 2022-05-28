import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTools from '../../../Hooks/useTools';
import Loading from '../sheard/Loading/Loading';
import Tool from './Tool'



const DemoTools = () => {
    const [tools] = useTools();
    const showTools = [...tools.slice(0, 6)]


    if (showTools.length === 0) {
        return <Loading></Loading>
    }



    return (
        <div className="pt-24">
            <div className='bg-primary py-2 flex gap-2 mx-auto justify-center mx-auto p-2 '>
                <h3 className='text-white-500 text-xl font botd my-auto'>Search tools: </h3>
                <input className='w-25 p-2  shadow-gray-500' placeholder="search product" />

            </div>
            <div className="divider">
                <h1 className="text-3xl text-primary font-bold text-center ">Our Tools</h1>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:flex sm:grid justify-items-center   p-12">
                {
                    showTools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default DemoTools;