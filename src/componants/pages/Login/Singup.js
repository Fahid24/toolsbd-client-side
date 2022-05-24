import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Login from './Login';
import SocialLogin from './SocialLogin/SocicalLogin';

const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let singinError;
    if (loading) {
        return <Login></Login>
    }

    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        singinError = <p className='text-red-500'> {error?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl text-primary text-center font-bold">Sing Up</h2>

                    <form className=' items-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Your name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }

                                })}
                                type="name" placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.name.message} </span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Your email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Probide a valide email'
                                    }
                                })}
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charavters or longer'
                                    }
                                })}
                                type="password" placeholder="Your password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
                            </label>
                        </div>
                        {singinError}
                        <input className='btn w-full btn-wide bg-gradient-to-r from-primary to-secondary' type="submit" value='Sing up' />
                    </form>
                    <p>Already have an account? <Link className='text-secondary font-bold' to='/login'>please Lonin</Link></p>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Singup;