import React, { useEffect } from 'react';
import { TaskStatusCountRequest } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';

function DashBoard(props) {
    useEffect(()=>{
        TaskStatusCountRequest()
    },[])

    const TaskCountList = useSelector((state) => state.tasks.total)
    const totalTaskCount = useSelector((state) => state.tasks.totalCount)


    return (
        <div>
             <h1 className='text-2xl font-bold text-slate-800'> Dashboard </h1>

             <div className='grid lg:grid-cols-4 gap-2'>

                <div className='card shadow-md rounded-lg p-5 bg-white my-5'>
                    <h1 className='text-2xl font-semibold text-slate-800 mb-2'> Total</h1>
                    <p className='text-sm'>{totalTaskCount.total}</p>
                </div>
                {TaskCountList && TaskCountList.map((item, i) => (
                    <div key={i} className='card shadow-md rounded-lg p-5 bg-white my-5'>
                        <h1 className='text-2xl font-semibold text-slate-800 mb-2'> {item._id}</h1>
                        <p className='text-sm'>{item.sum}</p>
                    </div>

                )) }

             </div>

        </div>
    );
}

export default DashBoard;