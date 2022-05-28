import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import useTools from '../../../Hooks/useTools';
import auth from '../../firebase.init';
import Loading from '../sheard/Loading/Loading';
import CancelOrder from './CancelOrde';
import DeteleProduct from './DeteleProduct';
import ManageProductRow from './ManageProductRow';
import OrderRow from './OrderRow';

const ManageProducts = () => {
    const [tool, setTool] = useState()
    const { data: tools, isLoading, refetch } = useQuery('order', () => fetch(`http://localhost:5000/tools`).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>{tools.length}</li>
                    <li>My orders</li>
                </ul>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Tools info</th>
                            <th>Description</th>
                            <th>Tools Quantity</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tools?.map((tool, index) => <ManageProductRow
                                key={tool._id}
                                tool={tool}
                                index={index}
                                setTool={setTool}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            <DeteleProduct
                tool={tool}
                refetch={refetch}
            ></DeteleProduct>
        </div>
    );
};
export default ManageProducts;