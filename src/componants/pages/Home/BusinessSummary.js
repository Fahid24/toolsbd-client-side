import React from 'react';
import { BeakerIcon } from '@heroicons/react/solid'
import people from '../../images/teamwork_users_people_icon_152062.png'
import county from '../../images/county.png'
import feedback from '../../images/feedback.png'
import projects from '../../images/projects-icon-29.jpg'
import { IoIosPeople } from 'react-icons/io';


const summaries = [
    {
        _id: 1,
        image: <IoIosPeople className='text-[150px] text-primary'></IoIosPeople>,
        amount: '5000+',
        name: 'Happy clients'

    },
    {
        _id: 2,
        image: county,
        amount: '70+',
        name: 'Countries'

    },
    {
        _id: 3,
        image: feedback,
        amount: '400+',
        name: 'Feedbacks'

    },
    {
        _id: 4,
        image: projects,
        amount: '250+',
        name: 'Complete Projects'

    },
]

const BusinessSummary = () => {
    return (
        <div className='mt-40'>
            <h1 className="text-5xl text-center text-primary">Trusted by millions of businesses</h1>
            <h3 className="text-4xl text-center text-secondary">let's see user expectation </h3>
            <div className='pt-12 my-auto flex justify-center'>
                {
                    summaries.map(sumary => <div
                        class="card w-56 bg-base-100 shadow-xl mx-12 mb-40 ">
                        <figure class="px-10 pt-10">
                            {<div >{sumary.image}</div>}
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-3xl font-bold">{sumary.amount}</h2>
                            <p className='font-bold'>{sumary.name}</p>

                        </div>
                    </div>)
                }

            </div>
        </div >
    );
};

export default BusinessSummary;