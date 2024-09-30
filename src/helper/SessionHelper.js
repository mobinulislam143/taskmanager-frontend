import Cookies from "js-cookie";

class SessionHelper{
    setToken(token){
        localStorage.setItem("token", token)
        // Cookies.set('token', token);
    }
    getToken(){
        return localStorage.getItem('token')
    }
}

export const {setToken,getToken} = new SessionHelper()