import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Footer from './sheard/Footer';
import Loading from './sheard/Loading/Loading';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);


    useEffect(() => {
        const url = 'https://quiet-mesa-88785.herokuapp.com/review';

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setreviews(data)
            })
    }, [])

    if (!reviews.length) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <div className="divider mt-10 ">
                <h1 className="text-5xl text-center text-primary">User Reviews</h1>
            </div>

            <div className='grid grid-cols-1 pt-12 my-auto flex justify-center'>
                {
                    reviews.map(review => <div
                        key={review._id}
                        className="card w-full m-10 card-side bg-base-100  shadow-xl">
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
            <Footer></Footer>

        </div >
    );
};

export default Reviews;