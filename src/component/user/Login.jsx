import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserStore from '../Store/UserStore';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import UserSubmitButton from './UserSubmitButton';
import ValidatorHelper from '../utility/ValidatorHelper';


function Login(props) {
    const [showPassword, setShowPassword] = useState(false)

    const {LoginFormData, LoginFormOnChange,UserLoginRequest} = UserStore()
    const navigate = useNavigate()

    const OnFormSubmit = async(e)=>{
        e.preventDefault()
        try{
            if (!LoginFormData.email ||  !LoginFormData.password ) {
                toast.error("Please fill in all the required fields.");
                return;
            }
            if (!ValidatorHelper.IsEmail(LoginFormData.email)) {
                toast.error("Please enter a valid email address.");
                return;
            }else{
                await UserLoginRequest(LoginFormData)
                toast.success("Login Success")
                navigate('/')
                console.log(LoginFormData)

            }

        }catch(e){
            console.error("Error submitting form:", e);
            toast.error("An error occurred. Please try again.");
        }
    }



    const togglePasswordVisibility = () =>{
           setShowPassword(!showPassword)
       }
    return (
        <div className='container-fluid h-screen flex justify-center items-center '>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <div className='w-full '>
                        <img src='logobanner/logo1.png' alt='logo'/>
                    </div>
                    <div>
                        <form>
                            <h1 className='text-4xl font-bold my-4'>Log In</h1>
                          
                            <div className="mb-5">
                                <label for="email" className="block mb-2 text-gray-900">Your email</label>
                                <input type="email" id="email" value={LoginFormData.email} className="bg-gray-50 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " placeholder="name@flowbite.com" onChange={(e)=>{LoginFormOnChange("email", e.target.value)}} required />
                            </div>
                          
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                <div className='relative'>
                                    <input type={showPassword?"text":"password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " onChange={(e)=>{LoginFormOnChange("password", e.target.value)}} value={LoginFormData.password} placeholder='password'  />
                                    <button type='button' onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700 focus:outline-none">
                                        {
                                            showPassword?(
                                                <a>
                                                    <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show-password"/>

                                                </a>
                                            ) :(
                                                <a>
                                                    <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide"/>
                                                </a>
                                            )
                                        }
                                    </button>

                                </div>
                            </div>
                            <p className='my-2'>If you don't have an account, Please <NavLink className="text-yellow-600" to={'/registration'}>Sign up</NavLink> </p>

                            <UserSubmitButton className="btn bg-yellow-500 w-full hover:bg-yellow-600 transition-all text-black border-none" text={'Log in'} onClick={OnFormSubmit} />
                        </form>
                    </div>
                </div>
            </div>
            {/* <Toaster position='top-right'/> */}
        </div>
    );
}

export default Login;