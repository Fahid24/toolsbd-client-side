import React from 'react';
import { ImCancelCircle } from 'react-icons/im';


const ManageProductRow = ({ tool, index, setTool }) => {

    const { image, partsName, description, price, name, email, quantity } = tool;

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
                        <div className="font-bold">{name}...</div>
                        <div className="text-sm opacity-75">Price : $ {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {description?.slice(0, 30)}...
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{quantity} <small>pics</small></td>
            <th className='flex justify-center' >
                <td><label onClick={() => setTool(tool)} htmlFor="confirmation-cancel-modal"><ImCancelCircle className='text-2xl  text-red-700 font-bold' title='Delete'></ImCancelCircle></label></td>
            </th>
        </tr>
    );
};

export default ManageProductRow;