import React, { Fragment, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-router-dom';


function MasterLayout(props) {
    const [open, setOpen] = useState(true)

    
    return (
        <Fragment>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Daily Task</a>
            </div>
            <div className="flex-none gap-2">
       
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <Link to={'/profile'} className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
           <div className='flex'>
                <div className={`h-screen ${open ? "w-52":"w-20"} p-3 bg-white duration-300`}>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                        <span class={`ml-2 text-sm tracking-wide truncate ${!open && "hidden"} duration-300`}>Dashboard</span>

                            <button className="p-2">
                               
                                <AiOutlineMenuFold onClick={() =>setOpen(!open)} className={`p-1 text-4xl fill-current hover:bg-slate-300  rounded-md duration-500  ${!open && 'rotate-180'}`} />
                               
                            </button>
                        </div>
                
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                
                            
                                <li>
                                    <Link to={'/dashboard'} class="relative flex flex-row items-center h-11 focus:bg-blue-100 focus:border-indigo-500 hover:bg-blue-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/create-task'} class="relative flex flex-row items-center h-11 focus:bg-blue-100 focus:border-indigo-500 hover:bg-blue-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">Create New</span>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to={'/new'} class="relative flex flex-row items-center h-11 focus:bg-blue-100 focus:border-indigo-500 hover:bg-blue-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">New Task</span>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to={'/progress'} class="relative flex flex-row items-center h-11 focus:bg-blue-100 focus:border-indigo-500 hover:bg-blue-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">In Progress</span>
                                        {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span> */}
                                    </Link>
                                    </li>
                                    <li class="px-5">
                                    {/* <div class="flex flex-row items-center h-8">
                                        <div class="text-sm font-light tracking-wide text-gray-500">Tasks</div>
                                    </div> */}
                                    </li>
                                    <li>
                                    <Link to={'/completed'} class="relative flex flex-row items-center h-11 focus:bg-blue-100 focus:border-indigo-500 hover:bg-blue-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">completed Tasks</span>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to={'/canceled'} class="relative flex flex-row items-center h-11 focus:bg-blue-100 focus:border-indigo-500 hover:bg-blue-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">Canceled Task</span>
                                        {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span> */}
                                    </Link>
                                    </li>
                                
                            </ul>
                        </div>
                    </div>
                        
                <Toaster position='top-right' />
                </div>
                <div  className="content p-5 w-full">
                        {props.children}
                    </div>
           </div>
        </Fragment>
    );
}

export default MasterLayout;