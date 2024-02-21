import React from 'react';

function ListProductSkeleton(props) {
    return (
        <div className='grid grid-cols-3'>
            {Array.from({length:8}).map((_, index) => (
                <div key={index} className="flex flex-col gap-4 w-72">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ))}
        </div>
    );
}

export default ListProductSkeleton;