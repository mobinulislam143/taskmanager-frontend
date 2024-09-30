import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../helper/FormHelper';
import { LoginRequest } from '../APIRequest/APIRequest';
import { Toaster } from 'react-hot-toast';
import { getToken } from '../../helper/SessionHelper';
import Cookies from 'js-cookie';


function Login(props) {


    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () =>{
              setShowPassword(!showPassword)
          }

    let emailRef, passwordRef = useRef()
    let OnLogin = () => {
        
        let email = emailRef.value
        let password = passwordRef.value
        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        } else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }else{
            LoginRequest(email,password).then((result) =>{
                if(result===true){
                    SuccessToast("Login Success")
                    window.location.href="/"
                }
                else{
                    ErrorToast("Something Went Wrong!!!")
                }
            })
        }

    }
    console.log(getToken())
    
    return (
        <div className='container-fluid h-screen flex items-center justify-cente'>
            <div className='container mx-auto'>
                <div className='card w-96  shadow-md p-4 r  rounded-md mx-auto bg-white'>
                    <h1 className='text-2xl font-bold text-slate-800 text-center'> Login</h1>
                    <label for="email" className=' my-2'>Your email</label>
                    <input id='email' type='email' className='input input-bordered w-full' placeholder='enter email' ref={(input) => emailRef=input}/>
                    <label for="password" className=' my-2'>Your Password</label>

                    <div className='relative'>
                        <input ref={(input)=> passwordRef=input} type={showPassword?"text":"password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  />

                                    <span className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700 focus:outline-none">
                                        <button type='button' onClick={togglePasswordVisibility}>
                                            {
                                                showPassword ? (
                                                    <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show"/>
                                                ) : (
                                                    <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide"/>
                                                )
                                            }
                                        </button>
                                    </span>
                    </div>                    
                    <p className='my-2'>If you don't have an account, Please <NavLink className="text-blue-600" to={'/registration'}>Sign up</NavLink> </p>

                    <NavLink className={"btn bg-blue-900 hover:bg-blue-800 text-white my-3 border-none"} onClick={OnLogin}>Login</NavLink>
                     
                </div>
            </div>
            <Toaster position='bottom-center'/>
            
        </div>
    );
}

export default Login;