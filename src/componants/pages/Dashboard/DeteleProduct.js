import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeteleProduct = (refetch, tool) => {
    const handleDelete = () => {
        fetch(`https://quiet-mesa-88785.herokuapp.com/tools/${tool._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.deletedCount === 1) {
                    toast.success('Successfully deleted tool');
                    refetch()
                }
                else {
                    toast.error('Some thing went wrong')

                    alert('Some thing went wrong')
                };
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirmation-cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hey <span className='text-info font-bold'>{tool?.name}</span></h3>
                    <p className="py-4"> Are you sure to remove <span className='font-bold'>{tool?.partsName}</span>  from your dashboard? </p>
                    <div className="modal-action">
                        <label htmlFor="confirmation-cancel-modal" className="btn btn-sm ">Cancel</label>
                        <label htmlFor="confirmation-cancel-modal" onClick={handleDelete} className="btn btn-sm btn-success">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeteleProduct;