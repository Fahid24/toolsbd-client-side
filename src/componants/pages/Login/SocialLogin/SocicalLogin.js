import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import img from '../../../images/download-removebg-preview.png'
import Loading from '../../sheard/Loading/Loading';
import { useLocation, useNavigate } from 'react-router';
import auth from '../../../firebase.init';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            {error && <p className='text-red-500 text-center'>{error.message}</p>}
            <div className='mt-3 text-center'>
                <button onClick={handleGoogleSignIn}
                    className='btn w-full btn-outline btn-primary btn-wide bg-white text-black font-bold text-xl'>
                    <img className='mx-2' style={{ width: '30px' }} src={img} alt="" /> Google Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;