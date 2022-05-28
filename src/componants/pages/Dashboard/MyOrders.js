import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../sheard/Loading/Loading';
import CancelOrder from './CancelOrde';
import OrderRow from './OrderRow';

const MyOrders = () => {

    const [user, loading] = useAuthState(auth);
    const [order, setOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`https://quiet-mesa-88785.herokuapp.com/booking/${user.email}`).then(res => res.json())

        , {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })


    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>{orders.length}</li>
                    <li>My orders</li>
                </ul>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts info</th>
                            <th>Buyer</th>
                            <th>Order Quantity</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                setOrder={setOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            <CancelOrder
                order={order}
                refetch={refetch}
            ></CancelOrder>
        </div>
    );
};

export default MyOrders;