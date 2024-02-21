import {create} from 'zustand'
import axios from 'axios'
import { getEmail, setEmail } from '../utility/utility'
import Cookie from 'js-cookie'


const UserStore = create((set, get) => ({

    isLogin:()=>{
        return !!Cookie.get('token')
    },

    isFormSubmit: false,
    RegisFormData: {name: '', email: "", mobile: "", password: "", department: ""},

    RegistrationFormOnChange : (name, value) => {
        set((state)=> ({
            RegisFormData:{
                ...state.RegisFormData,
                [name]:value
            }
        }))
    },

    UserRegistrationRequest: async(postBody)=> {
        try{
            set({isFormSubmit: true})
            let res = await axios.post('/api/registration',postBody)
            setEmail(postBody.email)
            set({isFormSubmit: false})
            return res.data['status'] === 'success'
        }catch(err){
            console.log(e.toString())
            return false
        }
    },

    OtpFormData: {otp: ""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OtpFormData: { // <-- Corrected typo here
                ...state.OtpFormData, // <-- Corrected typo here
                [name]:value
            }
        }))
    },
    
    

    VerifyOtpRequest: async(otp)=>{
        set({isFormSubmit:true})
        let email= getEmail()
        let res  = await axios.get(`/api/otpVerify/${email}/${otp}`)
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },


    LoginFormData: {email: "", password: ""},
    LoginFormOnChange: (name, value) =>{
        set((state) =>({
            LoginFormData: {
                ...state.LoginFormData,
                [name]: value
            }
        }))
    },
    UserLoginRequest: async(postBody)=>{
        try{
            set({isFormSubmit: true})
            let res = await axios.post(`/api/login`, postBody)
            set({isFormSubmit: false})
            return res.data['status']==='success'

        }catch(e){
            console.log(e.toString())
            return false
        }
    },

    UserLogoutRequest: async()=>{
        set({isFormSubmit: true})
        let res = await axios.get('/api/logout')
        set({isFormSubmit: false})
        return res.data['status'] === "success";
    },

    ProfileDetails: null,
    userProfileRequest: async()=>{
        try{
            let res = await axios.get('/api/profile')
            set({ProfileDetails: res.data.data[0]})
            // console.log(res.data.data[0])
        }catch(e){
            console.log(e.toString())
            return false
        }
    }, 


    ProfileImage: null,
    ProfileImageChangeRequest: async(imageData)=>{
       try{
            const formData = new FormData();
            formData.append('profileImage', imageData);

            let res = await axios.post('/api/changeImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        if(res.data.status === 'success'){
            const updatedProfileDetails = { ...get().ProfileDetails, profileImg: res.data.data[0].profileImg };
            set({ ProfileDetails: updatedProfileDetails });
            return true;            
        }
       }catch(e){
        console.log("Error"+e.toString())
       }
    }




}))

export default UserStore