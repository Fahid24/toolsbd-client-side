import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../sheard/Loading/Loading';


const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if (!user.emailVerified) {
    //     return <div style={{ height: 557 }} className='text-center bg-info bg-info'>
    //         <h3 className='text-danger'>Your eamail is not varifide!!😡😡</h3>
    //         <h3 className='text-success'>Please verifide Your email🤗🤗</h3>

    //         <button onClick={async () => {
    //             await sendEmailVerification();
    //             toast('Sent email');
    //         }} className='btn btn-success opacity-10'>Send Verify Email </button>
    //         <ToastContainer></ToastContainer>
    //     </div>
    // }
    // if (sending) {
    //     return <p>Sending...</p>;
    // }
    return children;
};

export default RequiredAuth;