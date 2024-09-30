import React from 'react';
import { NavLink } from 'react-router-dom';

function VerifyOtp(props) {
    return (
        <div className='container-fluid h-screen flex items-center justify-cente'>
        <div className='container mx-auto'>
            <div className='card w-96  shadow-md p-4 r  rounded-md mx-auto bg-white'>
                <h1 className='text-2xl font-bold text-slate-800 text-center'> Verify Otp </h1>
                <p>6 digit code has been sent in your email address</p>

               
                <label for="otp" className=' my-2'>OTP</label>
                <input id='otp' type='text' className='input input-bordered w-full' placeholder='Your Otp'/>

                <NavLink className={"btn bg-blue-900 hover:bg-blue-800 text-white my-3 border-none"}>Submit</NavLink>
                 
            </div>
        </div>
        
    </div>
    );
}

export default VerifyOtp;