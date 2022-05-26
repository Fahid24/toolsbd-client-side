import React, { useState } from 'react';
import { toast } from 'react-toastify';


const CancelOrder = ({ order, refetch }) => {
    const handleDelete = () => {
        fetch(`http://localhost:5000/removePart/${order?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount === 1) {
                    toast.success('Successfully deleted order');
                    refetch()
                }
                else {
                    toast.error('Some thing went wrong')
                };
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirmation-cancel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hey <span className='text-info font-bold'>{order?.name}</span></h3>
                    <p class="py-4"> Are you sure to remove <span className='font-bold'>{order?.partsName}</span>  from your dashboard? </p>
                    <div class="modal-action">
                        <label for="confirmation-cancel-modal" class="btn btn-sm ">Cancel</label>
                        <label for="confirmation-cancel-modal" onClick={handleDelete} class="btn btn-sm btn-success">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrder;