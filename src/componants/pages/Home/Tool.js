import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate = useNavigate()

    const handleUpdate = (id) => {
        navigate(`/toos/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:w-100 ">
            <figure className="px-10 pt-10">
                <img src={tool.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{tool.name}</h2>
                <p className='text-2xl font-bold text-red-500'>Price:{tool.price}</p>
                <p className='text-xl font-bold'>Minimum Order:{tool.minimumOrder}</p>
                <p className='text-xl font-bold'>Quantity:{tool.quantity}</p>
                <p className='font-bold'>Descrition:{tool.description}</p>


                <div className="card-actions">
                    <button onClick={() => handleUpdate(tool._id)} className="btn btn-primary bg-gradient-to-r from-primary font-bold to-secondary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;