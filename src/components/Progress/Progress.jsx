import React, { useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TaskListByStatus } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';

function Progress(props) {
    useEffect(()=>{
        TaskListByStatus("Progress")
    },[])
    const ProgressList = useSelector((state)=> state.tasks.Progress)
    return (
        <div>
           <h1 className='text-2xl font-bold text-slate-800'>Task In Progress</h1> 
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  my-6 w-full gap-2'>
           {ProgressList && ProgressList.map((item, i) => (
                <div className='card shadow-md rounded-lg p-5 bg-white'>
                    <h1 className='font-bold text-lg text-slate-700 mb-2'>{item.title}</h1>
                    <p className='my-2'>{item.description}</p>

                    <div className='flex justify-between my-2'>
                        <div className='flex items-center gap-2'><SlCalender />
                            <p>{item.createdAt}</p>
                            <Link className='text-fuchsia-800'><CiEdit /></Link>
                            <Link className='text-fuchsia-800'><MdDeleteOutline /></Link>
                        </div>
                        <div className="badge bg-fuchsia-800 text-white font-semibold">{item.status}</div>
                    </div>
                </div>
               ))}  
           </div>     
        </div>
    );
}

export default Progress;

