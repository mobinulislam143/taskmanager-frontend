import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserSubmitButton from './UserSubmitButton';
import UserStore from '../Store/UserStore';
import toast, { Toaster } from "react-hot-toast"
import ValidatorHelper from '../utility/ValidatorHelper';
import { useNavigate } from 'react-router-dom';



function Registration(props) {
    const [showPassword, setShowPassword] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState("Weak"); // Track password strength

    const togglePasswordVisibility = () =>{
           setShowPassword(!showPassword)
       }
       const navigate = useNavigate()
       
       const validatePasswordStrength = (password) => {
        // Define your criteria for password strength here
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (strongRegex.test(password)) {
            setPasswordStrength("Strong");
        } else {
            setPasswordStrength("Weak");
        }
    };

    const {RegisFormData, RegistrationFormOnChange, UserRegistrationRequest}= UserStore()

  

    const FormSubmit = async (e)=>{
        e.preventDefault()

        try{
            if(!RegisFormData.email || !RegisFormData.name || !RegisFormData.password || !RegisFormData.department  || !RegisFormData.mobile ){
                toast.error("Please fill in all the required fields.");
                return;
            }
    
            if(!ValidatorHelper.IsEmail(RegisFormData.email)){
                toast.error("Please enter a valid email address.");
                return;
            }

            // Check password strength before submission
            validatePasswordStrength(RegisFormData.password);

            if(passwordStrength === "Weak") {
                toast.error("Password is too weak. Please use a stronger password.");
                return;
            }

            await UserRegistrationRequest(RegisFormData)
            toast.success("Registration Success")
            navigate('/VerifyEmail')
            console.log(RegisFormData)
        } catch(er) {
            toast.error("failed to registration.")
            console.log(er.toString())
        }
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
                            <h1 className='text-4xl font-bold my-4'>Registration</h1>
                            <div className="mb-5">
                                <label for="name" className="block mb-2 text-gray-900">Name</label>
                                <input type="text" id="name" className="bg-gray-50 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " onChange={(e)=>{RegistrationFormOnChange("name", e.target.value)}} placeholder="Jo****s" value={RegisFormData.name} required />
                            </div>
                            <div className="mb-5">
                                <label for="email" className="block mb-2 text-gray-900">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " placeholder="name@flowbite.com" value={RegisFormData.email} onChange={(e)=>{RegistrationFormOnChange("email", e.target.value)}} required />
                            </div>
                            <div className="mb-5">
                                <label for="phone" className="block mb-2 text-gray-900">Mobile Number</label>
                                <input type="tel" id="phone" className="bg-gray-50 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={RegisFormData.mobile} onChange={(e)=>{RegistrationFormOnChange("mobile", e.target.value)}} placeholder="01********8" maxLength={11} required />
                            </div>
                            <div className="mb-5">
                                <label for="dept" className="block mb-2 text-gray-900">Department</label>
                                <input type="text" id="dept" className="bg-gray-50 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={RegisFormData.department} placeholder="Buyer or Seller" onChange={(e)=>{RegistrationFormOnChange("department", e.target.value)}} required />
                                
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                <div className='relative'>
                                    <input type={showPassword?"text":"password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " value={RegisFormData.password} onChange={(e)=>{RegistrationFormOnChange("password", e.target.value); validatePasswordStrength(e.target.value);}}  />
                                    <span className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700 focus:outline-none">
                                        <button type='button' onClick={togglePasswordVisibility}>
                                            {
                                                showPassword ? (
                                                    <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show-password"/>
                                                ) : (
                                                    <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide"/>
                                                )
                                            }
                                        </button>
                                    </span>
                                </div>
                                <p className='my-2'>Password Strength: <span className='text-rose-700'>{passwordStrength}</span></p>
                                <p className='my-2'>If you have an account, Please <NavLink className="text-yellow-600" to={'/login'}>Login</NavLink> </p>
                            </div>
                            <UserSubmitButton className="btn bg-yellow-500 w-full hover:bg-yellow-600 transition-all text-black border-none" text={'Sign Up'} onClick={(e) => FormSubmit(e)} />
                        </form>
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default Registration;