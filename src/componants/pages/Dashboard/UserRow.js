import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../sheard/Loading/Loading';

const UserRow = ({ user, refetch, isLoading }) => {
    const { email, role, _id } = user;
    const makeAdmin = () => {
        fetch(`https://quiet-mesa-88785.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleRemove = (id) => {
        fetch(`https://quiet-mesa-88785.herokuapp.com/user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <tr>
            <th className='text-3xl font-bold'>*</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn bg-green-500 btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleRemove(_id)} class="btn bg-red-500 btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;