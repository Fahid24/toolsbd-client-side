import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useToken from '../../../../Hooks/useToken';
import auth from '../../../firebase.init';
import image from '../../../images/pngegg.png'
import Loading from '../../sheard/Loading/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        localStorage.removeItem('accessToken');

        signOut(auth);
    };

    return (

        <div className="navbar bg-violet-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        <li><Link to='/tools'>More Tools</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>

                        <li><Link to='/portfolio'>My Portfolio</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost normal-case text-4xl">ToolsBD<img className='w-[50px]' src={image} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='font-bold text-xl' to='/'>Home</Link></li>
                    {
                        user && <li><Link className='font-bold text-xl' to='/dashboard'>Dashboard</Link></li>
                    }

                    <li><Link className='font-bold text-xl' to='/tools'>More Tools</Link></li>
                    <li><Link className='font-bold text-xl' to='/reviews'>Reviews</Link></li>

                    <li><Link className='font-bold text-xl' to='/portfolio'>My Portfolio</Link></li>
                    <li><Link className='font-bold text-xl' to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <button onClick={logout} className=" font-bold  btn bg-primary btn-sm">sing out</button> : <Link to='login' className=" btn-sm font-bold  btn bg-red-600">Login</Link>}
            </div>
        </div>

    );
};

export default Navbar;