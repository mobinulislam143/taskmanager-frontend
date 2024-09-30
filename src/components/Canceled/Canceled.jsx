import React, { useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TaskListByStatus } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';

function Canceled(props) {
    
    useEffect(() => {
        TaskListByStatus('Canceled');
    }, []);

    const CanceledList = useSelector((state) => state.tasks.Canceled);

    return (
        <div>
            <h1 className='text-2xl font-bold text-slate-800'>Task Canceled</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  my-6 w-full gap-2'>
                {CanceledList && CanceledList.map((item, i) => (
                    <div key={i.toString()} className='card shadow-md rounded-lg p-5 bg-white'>
                        <h1 className='font-bold text-lg text-slate-700 mb-2'>{item.title}</h1>
                        <p className='my-2'>{item.description}</p>

                        <div className='flex justify-between my-2'>
                            <div className='flex items-center gap-2'><SlCalender />
                                <p>{item.createdAt}</p>
                                <Link className='text-red-800'><CiEdit /></Link>
                                <Link className='text-red-800'><MdDeleteOutline /></Link>
                            </div>
                            <div className="badge bg-red-600 text-white font-semibold">{item.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Canceled;
