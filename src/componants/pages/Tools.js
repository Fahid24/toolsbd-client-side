import React from 'react';
import useTools from '../../Hooks/useTools';
import Tool from './Home/Tool';
import Loading from './sheard/Loading/Loading';

const Tools = () => {
    const [tools] = useTools()
    if (tools.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div className="pt-24">
            <div className="divider">
                <h1 className="text-3xl text-primary font-bold text-center ">Our Tools</h1>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:flex sm:grid justify-items-center   p-12">
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;