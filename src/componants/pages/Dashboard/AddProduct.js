import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../sheard/Footer';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        data.email = user.email;
        const url = 'https://quiet-mesa-88785.herokuapp.com/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast('Successfully added !!');
            })
    };;

    return (
        <div className='mx-auto flex justify-center items-center my-5'>
            <div className=" card flex-shrink-0 w-full p-10 max-w-sm shadow-2xl bg-base-100">
                <h1 className='text-center text-2xl font-bold'>Add New Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} className='w-full my-1 p-2  border-0 shadow rounded' placeholder='product name' required /><br />
                    <input {...register("image")} className='w-full my-1 p-2  border-0 shadow rounded' placeholder='img url' required /> <br />
                    <input {...register("description")} className='w-full my-1 p-2  border-0 shadow rounded' placeholder='product description' required /><br />
                    <input {...register("minimumOrder")} className='w-full my-1 p-2  border-0 shadow rounded' type='number' placeholder='minimum Order' required /><br />
                    <input {...register("quantity")} className='w-full my-1 p-2  border-0 shadow rounded' type='number' placeholder='quantity' required /><br />
                    <input {...register("price")} className='w-full my-1 p-2  border-0 shadow rounded' placeholder='product price' required /><br />
                    <input type="submit" className='btn w-full bg-gradient-to-r from-primary font-bold to-secondary' />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;