import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductStore from '../Store/ProductStore';
import ProductSkeleton from '../skeleton/ProductSkeleton';

function Product(props) {
    const {ProductList, ProductListRequest} = ProductStore()

    useEffect(()=>{
        (async()=>{
            await ProductListRequest()
        })()
    },[])
    
    return (
        <div className='container-fluid'>
            <div className='container mx-auto my-10'>
                 
                <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Just For You</h2>

                    {
                        ProductList !== null?(
                            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                                {ProductList.map((item,i) => {
                                    return (
                                        <Link key={i}>
                                            <div className="group relative">
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-80">
                                                    <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                                </div>
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">{item.name}</h3>
                                                        <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">${item.price}</p>
                                                </div>
                                            </div>
                                        </Link> 
                                    )
                                })}
                            </div>
                        ):(<ProductSkeleton/>)
                    }
                    
                    
                </div>
                </div>
            </div>
           
        </div>
    );
}

export default Product;