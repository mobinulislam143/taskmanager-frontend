import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import './Carousel.css';
import ProductStore from '../Store/ProductStore';

function Carousel(props) {
    const {SearchKeyword, SetSearchKeyword} = ProductStore()
    return (
        <>
            <div className='container-fluid'>
                <div className='container mx-auto'>
                   
                <form className="max-w-full mx-auto mt-3">   
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>

                        </div>
                        <input onChange={(e) => SetSearchKeyword(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Product..." required />
                        <Link to={SearchKeyword.length>0?`/search-by-keyword/${SearchKeyword}`:`/`} type="submit" className="text-white absolute end-2.5 bottom-2.5 transition-all bg-amber-500 hover:bg-amber-600  font-medium rounded-lg text-sm px-4 py-2 ">Search</Link>
                    </div>
                </form>
                

                    <div className="grid lg:grid-cols-4 gap-10 my-10 sm:grid-cols-1">
                        <div className="card px-4 bg-white shadow-md py-4">
                            <ul>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all  hover:text-amber-500'>Women Girls Fashion</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all hover:text-amber-500'>Health & Beuty</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all hover:text-amber-500'>Watches, Bags, Jwellery</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all hover:text-amber-500'>Tv & Home Accessories</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all hover:text-amber-500'>Home & Lifestyle</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all hover:text-amber-500'>Sports and Outdoor</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all  hover:text-amber-500'>Mother's and Baby</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all  hover:text-amber-500'>Technology</Link></li>
                                <li className='py-1'><Link className='text-slate-600 font-semibold transition-all  hover:text-amber-500'>Groceries</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-3">
                        <AwesomeSlider play={true} cancelOnInteraction={false} interval={6000}>
                            <div data-src="carousel/slide1.jpg" />
                            <div data-src="carousel/slide2.jpg" />
                            <div data-src="carousel/slide3.jpg" />
                            <div data-src="carousel/slide4.jpg" />
                         
                        </AwesomeSlider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;