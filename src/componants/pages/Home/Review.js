import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../sheard/Loading/Loading';

const Review = () => {
    const [reviews, setreviews] = useState([]);
    const dreviews = [...reviews.slice(0, 6)]

    useEffect(() => {
        const url = 'http://localhost:5000/review';

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setreviews(data)
            })
    }, [])

    if (!dreviews.length) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <div className="divider"></div>

            <h1 className="text-5xl text-center text-primary">User Reviews</h1>
            <div className=' my-auto grid grid-cols-1 lg:grid gap-5 grid-cols-3 mx-20 lg:flex justify-center'>
                {
                    dreviews.map(review => <div
                        key={review._id}
                        className="card w-full m-10 card-side bg-base-100 shadow-xl">
                        <figure> <div className='p-5'>
                            <div className="avatar">
                                <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img className=' ' src={review.image} alt='' />
                                </div>
                            </div>

                        </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Name: {review.userName}</h2>
                            <h2 className="card-title text-xl font-bold">Rating: {review.ratings}</h2>
                            <p className='font-bold'> <span className='text-xl'>Review:</span> <br /> {review.desc}</p>
                        </div>
                    </div>



                    )
                }

            </div>
        </div >
    );
};

export default Review;