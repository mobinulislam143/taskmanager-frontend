import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStore from '../Store/ProductStore';
import ProductSkeleton from '../skeleton/ProductSkeleton';
import toast from 'react-hot-toast';

function UserProduct(props) {
    const { UserProductList, RemoveProductRequest,UserProductListRequest  } = ProductStore();
    const [loading, setLoading] = useState(false);

    const removeProduct = async (productId) => {
        try {
            setLoading(true);
            await RemoveProductRequest(productId);
            toast.success("Your Product Removed Successfully.");
        } catch (e) {
            toast.error("Failed to remove the product.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading) {
            // Reload user product list after removing a product
            UserProductListRequest();
        }
    }, [loading]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <Link to={'/create-product'} className='btn bg-yellow-500 w-full mb-6'>Create Product</Link>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">My Product</h2>

                {UserProductList !== null ? (
                    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                        {UserProductList.map((item, i) => (
                            <div key={i} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-80">
                                    <img src={item.image} alt="Product" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">{item.name}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${item.price}</p>
                                </div>
                                <div className='mt-4 flex justify-between'>

                                    <label htmlFor="my_modal_5" className='btn bg-yellow-500 hover:bg-yellow-600'>Update</label>

                                    <input type="checkbox" id="my_modal_5" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Update!</h3>
                                        <p className="py-4">Are u want to update Product?</p>
                                        <div className="modal-action">
                                        <label htmlFor="my_modal_5" className="btn">Close!</label>
                                        <Link to={`/update-product/${item['_id']}`} className='btn bg-yellow-500 hover:bg-yellow-600'>Update</Link>
                                        </div>
                                    </div>
                                    </div>
                                    


                                    <label htmlFor="my_modal_6" className='btn bg-red-500 hover:bg-red-600'>Delete</label>

                                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Delete!</h3>
                                        <p className="py-4">Are you sure you want to delete product?</p>
                                        <div className="modal-action">
                                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                                        <button onClick={() => removeProduct(item['_id'])} className='btn bg-red-500 hover:bg-red-600'>Delete</button>

                                        </div>
                                    </div>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<ProductSkeleton />)}
            </div>
        </div>
    );
}

export default UserProduct;
