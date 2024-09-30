import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

function FullScreenLoader(props) {
    const loader = useSelector((state) => state.settings.loader)

    return (
       <Fragment>
        <div className={`${loader}`}>
            <div className={`w-full  h-full fixed top-0 left-0 bg-white opacity-35 z-50`}>
                <div className="flex justify-center items-center h-full">
                </div>
                <div className="bg-white opacity-35 w-full h-full"></div>
            </div>
            
            <div className={`w-full h-full fixed top-0 left-0 cursor-progress z-50 flex justify-center items-center`}>
                <span className="loading loading-infinity loading-lg text-red-800"></span>
            </div>
        </div>


       </Fragment>
    );
}

export default FullScreenLoader;