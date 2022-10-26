import React from 'react';

const DisplayCp = ({cp}) => {
    return (
        <div className='border-4 rounded-xl p-10'>
            <h1 className='text-3xl font-bold'>{cp.head}</h1>
            <p className='mt-6'>{cp.para}</p>
        </div>
    );
};

export default DisplayCp;