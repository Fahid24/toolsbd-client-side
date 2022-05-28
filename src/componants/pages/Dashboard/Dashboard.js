import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import Footer from '../sheard/Footer';



const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <label htmlFor="my-drawer-2" className=" text-gray-500 drawer-button lg:hidden"><MdOutlineArrowForwardIos className='font-bold text-4xl'></MdOutlineArrowForwardIos></label>
                <h1 className='text-3xl font-bold text-primary mt-5 text-center'>Welcome to our dashboar </h1>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


                    <li><Link to='/dashboard' className='font-bold text-xl'>My profile</Link></li>
                    {
                        !admin && <>
                            <li><Link to='orders' className='font-bold text-xl'>My orders</Link></li>
                            <li><Link to='review' className='font-bold text-xl'>Add review</Link></li>
                        </>
                    }

                    {
                        admin && <>
                            <li><Link to='mnanageOrders' className='font-bold text-xl'>Manage All Orders</Link></li>
                            <li><Link to='addProduct' className='font-bold text-xl'>Add A Product</Link></li>
                            <li><Link to='makeAdmin' className='font-bold text-xl'>Make Admin</Link></li>
                            <li><Link to='manageProducts' className='font-bold text-xl'>Manage Products</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;