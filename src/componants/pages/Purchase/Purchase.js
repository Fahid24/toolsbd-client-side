
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../sheard/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../sheard/Footer';


const Purchase = () => {
    const [user, loading] = useAuthState(auth)
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [detail, setDetail] = useState({})
    const { name, description, image, quantity, minimumOrder, price } = detail;
    const [quant, setQuant] = useState(detail.minimumOrder);

    useEffect(() => {
        fetch(` https://quiet-mesa-88785.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data[0])

            })
    }, [id])
    const onSubmit = data => {
        data.partsName = name;
        data.description = description;
        data.price = price;
        data.image = image;
        data.quantity = quantity;

        fetch(' https://quiet-mesa-88785.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Order booked ')
                    reset()
                }
            })

    };

    const handleQuant = (e) => {
        setQuant(e.target.value)
    }


    if (loading || !detail) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-primary text-center my-5 font-bold text-3xl'>Hi <span className='text-secondary'>{user.displayName}</span> welcome to our webside.</h1>
            <h3 className='text-primary text-center my-5 font-bold text-xl'>Are you ready for booking some <span className='text-secondary'>{name}</span>?</h3>

            <div class="hero max-w-screen-lg pb-10  mx-auto  mb-16 mt-2">

                <div class="hero-content flex-col lg:flex-row">
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure class="px-10 bg-base-100 card mx-auto w-[300px] grid grid-cols-1 place-content-center shadow-xl border pt-10">
                            <img className='' src={image} alt={name} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 className="card-title text-3xl font-bold">{name}</h2>
                            <p className='text-2xl font-bold text-red-500'>Price:{price}</p>
                            <p className='text-xl font-bold'>Minimum Order:{minimumOrder}</p>
                            <p className='text-xl font-bold'>Quantity:{quantity}</p>
                            <p className='font-bold'>Descrition:{description}</p>

                        </div>
                    </div>

                    <div class="card flex-shrink-0 w-full p-10 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mx-auto w-80'>
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} name="email" value={user?.displayName} readOnly class="input w-full input-bordered" />
                            </div>
                            <div className='mx-auto w-80'>
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} name="email" value={user?.email} readOnly class="input w-full input-bordered" />
                            </div>

                            <div className=' w-80 mx-auto'>
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input {...register("address", { required: true })} placeholder="address" class="input w-full input-bordered" />
                                {errors.address && <span className='text-error'>Please give your address</span>}
                            </div>
                            <div className=' w-80 mx-auto'>
                                <label class="label">
                                    <span class="label-text">Phone mobile number </span>
                                </label>
                                <input {...register("phone", { required: true })} placeholder="phone" class="input w-full input-bordered" />
                                {errors.phone && <span className='text-error'>Please give your mobile number</span>}
                            </div>
                            <div className=' w-80 mx-auto'>
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input {...register("quantity")} value={quant} class="input w-full input-bordered " onChange={handleQuant} />
                                {(quant < minimumOrder) && <span className='text-red-500'>Please input minimum {minimumOrder} pics or more </span>}
                                {(quant > quantity) && <span className='text-red-500'>Please input maximum {quantity} or fewer </span>}
                            </div>
                            <input disabled={(quant < minimumOrder)(quant > quantity)} type="submit" class="btn " value='Login' className='w-80 mx-auto btn block mt-5' />

                        </form>



                    </div>



                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>

    );
};

export default Purchase;