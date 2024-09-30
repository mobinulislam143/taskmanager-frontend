import React, { useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from '../../helper/FormHelper';
import { Toaster } from 'react-hot-toast';
import { RegistrationRequest } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';


function Registration(props) {

    const settings = useSelector((state) => state.settings.loader)

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () =>{
              setShowPassword(!showPassword)
          }

    let emailRef, fnameRef, lnameRef, mobileRef, passwordRef = useRef()

    let navigate=useNavigate();

    const onRegistration = () => {
        let email = emailRef.value
        let fname = fnameRef.value
        let lname = lnameRef.value
        let mobile = mobileRef.value
        let password = passwordRef.value

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(fname)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lname)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }else{
            RegistrationRequest(email,fname, lname, mobile, password).then((result) => {
                if(result===true){
                    console.log(email,fname, lname, mobile, password)
                    navigate('/login')

                }
            })
        }
    } 


    return (
        <div className='container-fluid h-screen flex items-center justify-cente'>
            <div className='container mx-auto'>
                <div className='card w-96  shadow-md p-4 r  rounded-md mx-auto bg-white'>
                    <h1 className='text-2xl font-bold text-slate-800 text-center'> Sign up</h1>

                    <label for="email" className=' my-2'>Your email</label>
                    <input ref={(input)=> emailRef=input} id='email' type='email' className='input input-bordered w-full' placeholder='Your email'/>

                    <label for="fname" className=' my-2'>First name</label>
                    <input ref={(input)=> fnameRef=input} id='fname' type='text' className='input input-bordered w-full' placeholder='First Name'/>

                    <label for="lname" className=' my-2'>Last Name</label>
                    <input id='lname' ref={(input)=> lnameRef=input} type='text' className='input input-bordered w-full' placeholder='Last Name'/>

                    <label for="lname" className=' my-2'>Mobile</label>
                    <input id='lname' ref={(input)=> mobileRef=input} type='number' className='input input-bordered w-full' placeholder='Mobile no...'/>

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
                    
                    <p className='my-2'>If you  have an account, Please <NavLink className="text-blue-600" to={'/login'}>Log in</NavLink> </p>

                    <button onClick={onRegistration} className={"btn bg-blue-900 hover:bg-blue-800 text-white my-3 border-none"}>Sign up</button>
                     
                </div>
            </div>
            <Toaster position='top-right' />
            
        </div>
    );
}

export default Registration;