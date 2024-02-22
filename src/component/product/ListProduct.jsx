import React, { useEffect, useState } from 'react';
import ProductStore from '../Store/ProductStore';
import { Link, useParams } from 'react-router-dom';
import ListProductSkeleton from '../skeleton/ListProductSkeleton';

function ListProduct(props) {

    const { SearchProduct, ListByNameRequest, SearchKeyword, SetSearchKeyword,ListByFilterRequest } = ProductStore()
    const { keyword } = useParams()
    let [filter, setFilter ] = useState({brand: "", category: ""})

    const FilterOnChange = async (name,value) =>{
        setFilter((data) => ({
            ...data,
            [name]:value
        }))
    }

    useEffect(() => {
        const fetchData = async () => {
            if (keyword) {
                await ListByNameRequest(keyword);
            } else if (SearchKeyword) {
                await ListByNameRequest(SearchKeyword);
            }
        };
        
        fetchData();
    }, [keyword, SearchKeyword]);
    
    useEffect(()=>{
        (async()=>{
            await ListByFilterRequest(filter);

        })()
    },[filter])
    

    console.log("My new Product", SearchProduct);

    return (
        <>
            <div className='container-fluid'>
                <div className='container mx-auto my-8'>
                    <form className="max-w-full mx-auto my-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input onChange={(e) => SetSearchKeyword(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Product..." required />
                            <Link to={SearchKeyword.length > 0 ? `/search-by-keyword/${SearchKeyword}` : `/`} type="submit" className="text-white absolute end-2.5 bottom-2.5 transition-all bg-amber-500 hover:bg-amber-600  font-medium rounded-lg text-sm px-4 py-2 ">Search</Link>
                        </div>
                    </form>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='card shadow-sm px-3 py-10 bg-white'>
                            <h2 className='text-gray-600 text-2xl mb-4'>Filtering</h2>
                            <label htmlFor="brand" className="block mb-2 text-gray-900">Brand</label>
                            <input type="text" id="brand" className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={filter.brand} onChange={async(e) => await FilterOnChange('brand', e.target.value)} placeholder="Brand" required />
                            <label htmlFor="category" className="block mb-2 text-gray-900 mt-5">Category</label>
                            <input type="text" value={filter.category} id="category" onChange={async(e)=> await FilterOnChange('category', e.target.value)} className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " placeholder="Category" required />
                        </div>
                        <div className='card shadow-sm p-3 col-span-3 bg-white'>
                            <h2>Product</h2>
                            {SearchProduct !== null ? (
                                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                                    {SearchProduct.map((item, i) => (
                                        <Link key={i}>
                                            <div className="group relative">
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-80">
                                                    <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                                </div>
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">{item.name}</h3>
                                                        <p className="text-sm font-medium text-gray-900">${item.price}</p>
                                                    </div>
                                                    <div>

                                                        <p className="text-sm font-medium text-gray-900">C: {item.category}</p>
                                                        <p className="mt-1 text-sm text-gray-500">B: {item.brand}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <ListProductSkeleton />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProduct;
