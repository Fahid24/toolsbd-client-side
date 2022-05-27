import { ImCancelCircle } from 'react-icons/im';
import { FaAmazonPay } from 'react-icons/fa';
import React, { useState } from 'react';

const OrderRow = ({ order, index, setOrder }) => {
    const { image, partsName, price, name, email, quantity } = order;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{partsName?.slice(0, 15)}...</div>
                        <div className="text-sm opacity-75">Price : $ {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{quantity} <small>pics</small></td>
            <th className='flex justify-center' >
                <td><label onClick={() => setOrder(order)} for="confirmation-cancel-modal"><ImCancelCircle className='text-2xl  text-red-700 font-bold' title='Delete'></ImCancelCircle></label></td>
                <td>  <FaAmazonPay className='text-3xl text-green-600' title='Payment'></FaAmazonPay></td>
            </th>
        </tr>
    );
};

export default OrderRow;