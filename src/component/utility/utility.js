
export function setEmail(email){
    return sessionStorage.setItem("email", email)
 }
 export function unauthorized(code){
     if(code===401){
         sessionStorage.clear();
         localStorage.clear();
         window.location.href="/login"
     }
 }
 
 export function getEmail(email){
     return sessionStorage.getItem("email")
 }