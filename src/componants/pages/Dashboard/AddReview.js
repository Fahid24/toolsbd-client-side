import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../sheard/Loading/Loading';

const AddReview = () => {

    const [user, loading] = useAuthState(auth)
    const [ratings, setRatings] = useState();
    const imageStorageKey = '54f3ef57126b99f20293ef46052964ba';


    // const formData = new FormData();
    // formData.append('image', image);
    // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    // fetch(url, {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log('imagebb result', result);
    //         if (result.success) {
    //             const img = result.data.url;

    //         }
    //     })


    const handleSubmit = (event) => {
        event.preventDefault();
        let rating = event.target.rating.value;
        let quality = event.target.quality.value;
        let desc = event.target.desc.value;
        let image = event.target.image.value;

        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.success) {
        //             const img = result.data.url;


        let review = {
            ratings: rating,
            quality,
            desc,
            userName: user?.displayName,
            image: image
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Thanks for your review')

                    document.getElementById('form').reset()
                }
                else (
                    toast.error('Something went wrong. Please try once again')
                )
            })

        //     }
        // }
        // )






    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li>Add Review</li>
                </ul>
            </div>
            <div className='flex justify-center items-center '>
                <div className="card  w-4/5 mt-16 bg-slate-100 shadow-xl ">
                    <h1 className='font-bold text-center mt-3'>Add Review</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className='lg:flex xl:flex justify-around' id='form'>
                            <div>
                                <h2 className=''>Give Ratings :</h2>
                                <input name="rating" type='number' onChange={(e) => setRatings(e.currentTarget.value)} required placeholder="rating from 1 to 5 " className="input w-48 input-bordered input-sm " />
                                {ratings > 5 && <span className='block text-red-500'>please give us rating from 1 to 5</span>}
                                {ratings < 0 && <span className='block text-red-500'>please give us rating from 1 to 5</span>}
                                <h2 className='mt-2'>How is the Quality ?</h2>
                                <select name='quality' className="select select-bordered mt-1 w-full max-w-xs" required>
                                    <option disabled selected>Pick your personal opinion </option>
                                    <option value='Best Imaginable'>Best Imaginable</option>
                                    <option value='Excellent'>Excellent</option>
                                    <option value='Good'>Good</option>
                                    <option value='OK'>OK </option>
                                    <option value='Poor'>Poor</option>selected
                                    <option value='Awful'>Awful</option>
                                </select>
                            </div>
                            <div className="form-control xl:w-96 sm:w-76">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='desc' className="textarea textarea-bordered h-24" required placeholder="White your review here ..."></textarea>
                                <h1 className='mt-2'>photo link</h1>
                                <input

                                    name='image'
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"

                                />
                            </div>

                            <div className="card-actions justify-center">
                                <input type='submit' disabled={ratings > 5 || ratings < 1} className="btn btn-primary bg-gradient-to-r from-primary font-bold to-secondary" value='Add Review' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;