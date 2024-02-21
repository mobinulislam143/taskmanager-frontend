import React, { useState } from 'react';
import UserSubmitButton from './UserSubmitButton';
import {useNavigate} from "react-router-dom";
import UserStore from '../Store/UserStore';
import ValidatorHelper from '../utility/ValidatorHelper';
import toast, { Toaster } from "react-hot-toast";


function VerifyEmail(props) {
   
    const {OtpFormData, OTPFormOnChange, VerifyOtpRequest} = UserStore()
    let navigate=useNavigate();

    const OnFormSubmit = async() => {
        if(ValidatorHelper.IsEmpty(OtpFormData.otp)){
            toast.error("Valid PIN Required")
        }else{
            let res = await VerifyOtpRequest(OtpFormData.otp)
            if(res){
                navigate("/login") 
                toast.success("Verify successfully")
                
            }else{
                toast.error("Something Went Wrong !")
            }

        }
    }
  
    return (
        <div className='container-fluid h-screen flex justify-center items-center '>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <div className='w-full '>
                        <img src='logobanner/logo2.png' alt='logo'/>
                    </div>
                    <div>
                        <form>
                            <h1 className='text-4xl font-bold my-4 text-black'>Verify OTP</h1>
                            <p className='my-2'>6 digit code sent in your email address.</p>
                          
                            <div className="mb-5">
                                <label for="otp" className="block mb-2 text-gray-900">Your OTP</label>
                                <input type="text" id="otp" onChange={(e)=>{OTPFormOnChange("otp", e.target.value)}} className="bg-gray-50 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " placeholder="OTP" required />
                            </div>
                          
                          
                            <UserSubmitButton className="btn bg-yellow-500 w-full hover:bg-yellow-600 transition-all text-black border-none" text={'Next'} onClick={OnFormSubmit} />
                           
                        </form>
                    </div>
                </div>
            </div>
            <Toaster position='top-right'/>
        </div>
    );
}

export default VerifyEmail;