import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocicalLogin';
import Loading from '../sheard/Loading/Loading'
import useToken from '../../../Hooks/useToken';


const Login = () => {
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
    const [sendPasswordResetEmail, sending, Aerror] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const [token] = useToken(user)
    console.log(token);
    let singinError;
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true })
    }

    if (error || Aerror) {
        singinError = <p className='text-red-500'> {error?.message || Aerror?.message}</p>
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
        console.log(data);

    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl text-primary text-center font-bold">Log in</h2>

                    <form className=' items-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input

                                onChange={(e) => setEmail(e.target.value)}
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
                                <span className="label-text">Password</span>
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
                        <input className='btn w-full btn-wide bg-gradient-to-r from-primary to-secondary' type="submit" value='Log in' />
                    </form>
                    <div className=''><Link className='text-secondary font-bold' to='/singup'>Create account</Link><h1 className='flex'>forgot password?<p onClick={async () => {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                    }}
                        className=' text-red-500 font-bold'>Change password</p> </h1></div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>

    );
};

export default Login;