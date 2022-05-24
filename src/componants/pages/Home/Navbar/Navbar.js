import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className="navbar bg-cyan-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/about'>About</Link></li>

                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost normal-case text-4xl">ToolsBD🛠️ </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='font-bold text-xl' to='/'>Home</Link></li>
                    <li><Link className='font-bold text-xl' to='/dashboard'>Dashboard</Link></li>
                    <li><Link className='font-bold text-xl' to='/appointment'>Appointment</Link></li>
                    <li><Link className='font-bold text-xl' to='/reviews'>Reviews</Link></li>

                    <li><Link className='font-bold text-xl' to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='login' className=" font-bold  btn bg-red-600">Login</Link>
            </div>
        </div>

    );
};

export default Navbar;