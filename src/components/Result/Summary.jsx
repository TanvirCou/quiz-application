import React from 'react';
import successImage from '../../assets/images/success.png'

const Summary = ({score, noq}) => {
    return (
        <div className='flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col p-12 items-center'>
            <div className='w-1/2 min-[320px]:text-center'>
            <p className='text-lg font-bold text-gray-600'>Your score is<br />{score} out of {noq * 5} </p>
            </div>
            <div className='w-1/2'>
                <img src={successImage} alt="" className='w-96 mx-auto'/>
            </div>
        </div>
    );
};

export default Summary;