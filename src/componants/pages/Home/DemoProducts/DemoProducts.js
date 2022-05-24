import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import Loading from '../../../../Shared/Loading/Loading';
import Product from '../../Product/Product';

const DemoProducts = () => {
    const [products] = useProducts();
    const demoProducts = [...products.slice(0, 6)]
    const [searchProduct, setSearchproduct] = useState(demoProducts)

    const handleSearch = event => {
        const searctText = event.target.value
        const match = products.filter(v => v.name.toLowerCase().includes(searctText))
        setSearchproduct(match)
    }
    if (demoProducts.length === 0) {
        return <Loading></Loading>
    }


    if (searchProduct.length) {
        return <div>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    searchProduct.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }


            </div>
            <a className='btn btn-primary mx-auto d-block w-25 my-5' href="javascript:window.location.href=window.location.href">Search again</a>

        </div>
    }

    return (
        <div className=''>
            <div className='bg-dark py-2 d-flex gap-2 mx-auto justify-content-center mx-auto p-2 border rounded-pill'>
                <h3 className='text-white'>Search Bike: </h3>
                <input className='border rounded w-25 p-2 border-0 shadow' onChange={handleSearch} placeholder="search product" />

            </div>
            <h1 className='text-center mt-4'>Products :  {demoProducts.length}</h1>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    demoProducts.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default DemoProducts;