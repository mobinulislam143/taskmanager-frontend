import React, { useRef } from 'react';
import { ErrorToast, IsEmpty, SuccessToast } from '../../helper/FormHelper';
import { CreateNewTaskRequest } from '../APIRequest/APIRequest';
import { useNavigate } from 'react-router';

function Create(props) {

    let titleRef, descriptionRef = useRef()
    let navigate = useNavigate ();


    const CreateNew = () => {
        let title=titleRef.value;
        let description=descriptionRef.value;

        if(IsEmpty(title)){
            ErrorToast("Title Required")
        }
        else if(IsEmpty(description)){
            ErrorToast("Description Required")
        }else{
            SuccessToast("Task create Successfully")
            CreateNewTaskRequest(title,description).then((res) =>{
                if(res === true){
                    navigate("/new-task")
                }
            })
        }
    }

    return (
        <div>
            <div className='card shadow-md rounded-lg p-5 bg-white my-5'>
              <h1 className='text-2xl font-bold text-slate-800'>Create New</h1>
              <input  type='text' className='input input-bordered w-full my-4' placeholder='Task Name' ref={(input)=>titleRef=input}/>
              <textarea className="textarea textarea-bordered my-4 " placeholder="Description" ref={(input)=>descriptionRef=input}></textarea>
              <button className='btn bg-sky-800 hover:bg-sky-900 w-full text-white font-semibold' onClick={CreateNew}>Submit</button>


            </div>
        </div>
    );
}

export default Create;