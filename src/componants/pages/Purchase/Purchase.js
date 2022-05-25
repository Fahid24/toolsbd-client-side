
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../sheard/Loading/Loading';

const Purchase = () => {
    const [user, loading] = useAuthState(auth)
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [detail, setDetail] = useState({})
    const { name, description, image, quantity, minimumOrder, price } = detail;
    const [quant, setQuant] = useState(detail.minimumOrder);

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setDetail(data[0])

            })
    }, [id])
    const onSubmit = data => {
        // data.partsName = name;
        // data.description = description;
        // data.price = price;
        // data.image = image;

        fetch('http://localhost:5000/tools',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Thanks for order ')
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
        <div class="hero max-w-screen-lg pb-10  mx-auto border mb-16 mt-2">
            <div class="hero-content flex-col lg:flex-row">
                <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
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
                        <input type="submit" class="btn " value='book now' className='w-80 mx-auto btn block mt-5' />

                    </form>
                </div>


            </div>
        </div>
    );
};

export default Purchase;