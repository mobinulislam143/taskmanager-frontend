import React from 'react';

function UpdateProductSkeletong(props) {
    return (
        <div>
           <div className='container-fluid'>
             <div className='container mx-auto my-5'>
                <h2 className='text-3xl font-bold text-center my-10'>Update Product</h2>
                <div className='card shadow-sm p-4 bg-white'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='image flex flex-col items-center'>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-8 w-28 my-7"></div>
                            </div>


                            <div className="my-5">
                                <div className="skeleton h-8 w-full"></div>

                                <div className="my-10">
                                    <div className="skeleton h-8 w-full"></div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="skeleton h-8 w-full"></div>
                            </div>
                            <div className="mb-5">
                                <div className="skeleton h-8 w-full"></div>
                            </div>
                            <div className="mb-5">
                                <div className="skeleton h-8 w-full"></div>
                            </div>
                            <div className='mb-5 flex items-center'>
                                <div className="skeleton h-8 w-full"></div>
                            </div>
                        </div>
                </div>
             </div>
           </div> 
        </div>
    );
}

export default UpdateProductSkeletong;