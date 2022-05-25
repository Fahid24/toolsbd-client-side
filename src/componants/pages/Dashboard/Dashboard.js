import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';



const Dashboard = () => {
    // const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <h1 className='text-3xl font-bold text-primary mt-5 text-center'>Welcome to our dashboard</h1>
                <Outlet></Outlet>
                <label for="my-drawer-2" className="mt-56 drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard' className='font-bold text-xl'>My profile</Link></li>
                    <li><Link to='orders' className='font-bold text-xl'>My orders</Link></li>
                    <li><Link to='review' className='font-bold text-xl'>Add review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;