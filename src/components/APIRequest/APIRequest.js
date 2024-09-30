import axios from 'axios';
import { ErrorToast, SuccessToast } from '../../helper/FormHelper';
import store from '../../redux/Store/store';
import { hideLoader, showLoader } from '../../redux/state-slice/Setting-slice';
import { setToken } from '../../helper/SessionHelper';
import { setCanceledTask, setCompletedTask, setNewTask, setProgressTask, setTotalCount, setTotalTask } from '../../redux/state-slice/Task-slice';

export async function RegistrationRequest(email, fname, lname, mobile, password) {
    store.dispatch(showLoader())
    const url = `/api/registration`;
    const postBody = {
        email: email,
        firstName: fname,
        lastName: lname,
        mobile: mobile,
        password: password
    };

    try {
        const res = await axios.post(url, postBody);

        if (res.status === 200) {
            SuccessToast('Registration Success');
            store.dispatch(hideLoader())
            return true;
        } else {
            ErrorToast('Something Went Wrong');
            return false;
        }
    } catch (err) {
        store.dispatch(hideLoader())
        console.error(err.toString());
        return false;
    }
}
export async function LoginRequest(email, password) {
    store.dispatch(showLoader())
    const url = `/api/login`;
    const postBody = {
        email: email,
        password: password
    };

    try {
        
        const res = await axios.post(url, postBody);

        if (res.status === 200) {
            setToken(res.data['token'])
            SuccessToast('Registration Success');
            store.dispatch(hideLoader())
            return true;
        } 
        else {
            ErrorToast('Something Went Wrong');

            return false;
        }
    } catch (err) {
        store.dispatch(hideLoader())
        console.error(err.toString());
        return false;
    }
}

export async function CreateNewTaskRequest(title, description) {
    store.dispatch(showLoader())
    const url = `/api/create-task`;
    const postBody = {
        title: title,
        description: description
    };

    try {
        const res = await axios.post(url, postBody);
        if (res.status === 200) {
          
            SuccessToast('New Task Created');
            store.dispatch(hideLoader())
            return true;
        } 
        else {
            ErrorToast('Something Went Wrong');

            return false;
        }
    } catch (err) {
        store.dispatch(hideLoader())
        console.error(err.toString());
        return false;
    }
}


export async function TaskListByStatus(Status) {
    store.dispatch(showLoader())
    let url = `/api/ListByStatus/${Status}`
    
    try{
        
        const res = await axios.get(url)
        if(res.status === 200){
            
            store.dispatch(hideLoader())
            
            if(Status==="New"){
                store.dispatch(setNewTask(res.data['data']))
            }
            else if(Status === 'Completed'){
                store.dispatch(setCompletedTask(res.data['data']))
            }
            else if(Status === "Canceled"){
                store.dispatch(setCanceledTask(res.data['data']))
            }
            else if(Status === "Progress"){
                store.dispatch(setProgressTask(res.data['data']))
            }
        }else{
            ErrorToast("There is some problem.")
        }

    }catch(err){
        ErrorToast("Something went wrong")
        console.log(err.toString());
        store.dispatch(hideLoader())
    }
}
export async function TaskStatusCountRequest (){
    store.dispatch(showLoader())
    try{
        let url = `/api/TaskStatusCount`
        const res = await axios.get(url)

        if(res.status===200){
            store.dispatch(hideLoader())
            store.dispatch(setTotalTask(res.data['data']))
            store.dispatch(setTotalCount(res.data))
        }


    }catch(err){
        store.dispatch(hideLoader())
        console.error(err.toString());
        return false;

    }
}

