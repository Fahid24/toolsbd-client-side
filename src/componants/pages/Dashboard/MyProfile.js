import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { BsLinkedin } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);


    const profiles = JSON.parse(window.localStorage.getItem('profile'));

    // const { data: profiles, isLoading, refetch } = useQuery('profiles', () => fetch(`http://localhost:5000/profile/${user.email}`, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }))



    const handleSubmit = e => {
        e.preventDefault();
        let education = e.target.education.value;
        let location = e.target.location.value;
        let phone = e.target.phone.value;
        let link = e.target.link.value;


        const profile = {
            education: education,
            location: location,
            phone: phone,
            link: link,
        }
        localStorage.setItem('profile', JSON.stringify(profile))

        // fetch('http://localhost:5000/profile', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(profile)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             toast(`successfully update profile`)
        //         }
        //         else {
        //             toast.error(`error update profile`)
        //         }


        //     });

    };

    return (
        <div>
            <div className='mx-[40%] lg:mx-[45%] mt-12'>
                <div className="avatar online ">
                    <div className="w-24 rounded-full ">
                        <img src="https://api.lorem.space/image/face?hash=28212" />
                    </div>
                </div>
            </div>
            <div className="card w-[80%] lg:w-[50%] mt-2 bg-fuchsia-100  shadow-xl mx-auto ">


                <div className="card-body w-full text-left">

                    <label htmlFor="my-modal" className="btn modal-button btn-xs ml-[70%] lg:ml-[77%]">Edite profile</label>

                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal mx-auto">
                        <div className="modal-box">
                            <form className=' items-center' onSubmit={handleSubmit}>
                                <h1 className='text-xl font-bold  text-primary my-2'>Your Education: </h1>
                                <input
                                    name='education'
                                    required
                                    type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                                <h1 className='text-xl font-bold  text-primary my-2'>Your location (city/district): </h1>
                                <input
                                    name='location'
                                    required
                                    type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                                <h1 className='text-xl font-bold  text-primary my-2'>phone number: </h1>
                                <input
                                    name='phone'
                                    required
                                    type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                                <h1 className='text-xl font-bold  text-primary my-2'>Linked in profile link: </h1>
                                <input
                                    name='link'
                                    required
                                    type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                                <a href="javascript:window.location.href=window.location.href"><input className='btn btn-sm bg-green-500 ml-16' type="submit" value='edite' /></a>

                            </form>


                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn btn-sm bg-red-500">cencel</label>



                            </div>
                        </div>
                    </div>

                    <h1 className='text-2xl font-bold text-primary my-2' >Your Name: <span className='text-xl text-black' >{user.displayName.toUpperCase()}</span></h1>
                    <h1 className='text-2xl font-bold text-primary' >Your Email: <span className='text-xl text-black' >{user.email}</span></h1>



                    <h1 className='text-2xl font-bold text-primary my-2' >Your Education: <span className='text-xl text-black' >{profiles.education}</span></h1>
                    <h1 className='text-2xl font-bold text-primary' >Your location (city/district): <span className='text-xl text-black' >{profiles.location}</span></h1>
                    <h1 className='text-2xl font-bold text-primary my-2' >phone number: <span className='text-xl text-black' >{profiles.phone}</span></h1>
                    <a className='mx-auto' href='https://www.linkedin.com/in/fahid-hasan-fuad-a39180235/'> <BsLinkedin className='text-5xl font-bold'></BsLinkedin></a>




                </div>
            </div>
        </div>

    );
};

export default MyProfile;