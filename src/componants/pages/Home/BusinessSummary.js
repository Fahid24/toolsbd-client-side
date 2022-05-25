import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { ImFlag } from 'react-icons/im';
import { VscFeedback } from 'react-icons/vsc';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';


const summaries = [
    {
        _id: 1,
        image: <IoIosPeople className='text-[150px] text-primary'></IoIosPeople>,
        amount: '5000+',
        name: 'Happy clients'

    },
    {
        _id: 2,
        image: <ImFlag className='text-[100px] text-primary' ></ImFlag>,
        amount: '70+',
        name: 'Countries'

    },
    {
        _id: 3,
        image: <VscFeedback className='text-[100px] text-primary'></VscFeedback>,
        amount: '400+',
        name: 'Feedbacks'

    },
    {
        _id: 4,
        image: <AiOutlineFundProjectionScreen className='text-[100px] text-primary'></AiOutlineFundProjectionScreen>,
        amount: '250+',
        name: 'Complete Projects'

    },
]

const BusinessSummary = () => {
    return (
        <div className='mt-24'>
            <div className="divider"></div>

            <h1 className="text-5xl text-center text-primary">Trusted by millions of businesses</h1>
            <h3 className="text-4xl text-center text-secondary mt-2">Let's see user expectation </h3>
            <div className='pt-12 my-auto grid grid-cols-1 mx-24 lg:flex justify-center'>
                {
                    summaries.map(sumary => <div
                        key={sumary._id}
                        className="card w-56 bg-base-100 shadow-xl mx-12 mb-40 ">
                        <figure className="px-10 pt-10">
                            {<div >{sumary.image}</div>}
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl font-bold">{sumary.amount}</h2>
                            <p className='font-bold'>{sumary.name}</p>

                        </div>
                    </div>)
                }

            </div>
        </div >
    );
};

export default BusinessSummary;