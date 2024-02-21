import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserStore from '../Store/UserStore';
import UserSubmitButton from '../user/UserSubmitButton';
import { Toaster } from 'react-hot-toast';


function AppNavbar(props) {
    const { isLogin, UserLogoutRequest, ProfileDetails, userProfileRequest } = UserStore()

    let navigate = useNavigate()

    const onLogout = async () => {
        await UserLogoutRequest()
        sessionStorage.clear()
        localStorage.clear()
        // toast.success('logout success')
        navigate('/')
    }

    useEffect(() => {
        (async () => {
            await userProfileRequest()
        })()
    }, [])

    return (
        <div className='container-fluid bg-amber-500 shadow-sm text-white'>
            <div className='container mx-auto'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-700 rounded-box w-52">
                                <li><Link className='focus:text-white' to={'/'}>Home</Link></li>
                            </ul>
                        </div>
                        <Link className="text-xl font-bold" to={'/'}>Trade Mark</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link className='focus:text-white' to={'/'}>Home</Link></li>
                            {
                                isLogin()?(
                                    <li><Link className='focus:text-white' to={'/All-product'}>Product</Link></li>
                                ):(<></>)
                            }


                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            isLogin() ? (
                                <>
                                    {/* <Link c  >Log out</Link> */}
                                    <UserSubmitButton className='btn bg-white hover:bg-slate-100 shadow-sm text-black border-0 mx-2' onClick={onLogout} text="Log out" />

                                    {ProfileDetails && ProfileDetails.profileImg &&
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Profile" src={ProfileDetails.profileImg} />
                                                </div>
                                            </div>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 text-black">
                                                <li>
                                                    <Link to={'/my-profile'} className="justify-between">
                                                        Profile
                                                        <span className="badge bg-white text-black">New</span>
                                                    </Link>
                                                </li>
                                                <li><Link to={'/user-product'}>My Product</Link></li>
                                                <li><Link onClick={onLogout}>Logout</Link></li>
                                            </ul>
                                        </div>
                                    }
                                </>
                            ) : (
                                    <>
                                        <Link className='btn bg-white hover:bg-slate-100 shadow-sm text-black border-0 mx-2' to={'/registration'}>Sign Up</Link>

                                    </>
                                )
                        }
                    </div>
                </div>
                <Toaster position='top-right' />
            </div>
        </div>
    );
}

export default AppNavbar;
