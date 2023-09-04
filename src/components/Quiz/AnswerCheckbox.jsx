import React, { Fragment, useRef } from 'react';

const AnswerCheckbox = ({text, checked, handleChange, index, input, option }) => {

    return (
        <Fragment key={index}>
            {input ? (
                <div className='bg-gray-200 py-3 pl-4 rounded-sm shadow-sm hover:bg-gray-300'>
                <input type="checkbox" name="" value={index} checked={checked} onChange={(e)=>handleChange(e, index)}/>
                <span className='text-sm font-semibold pl-3'>{text}</span>
                </div>
            ) : (
                <div className={`bg-gray-200 py-3 pl-4 rounded-md shadow-sm ${option.correct ? `bg-green-400` : `bg-red-400`}`}>
                <input type="checkbox" name="" defaultChecked={checked} disabled/>
                <span className='text-sm font-semibold pl-3'>{text}</span>
                </div>
            )}
        </Fragment>
    );
};

export default AnswerCheckbox;