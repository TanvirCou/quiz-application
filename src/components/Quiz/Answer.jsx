/* eslint-disable react/jsx-key */
import AnswerCheckbox from './AnswerCheckbox';

// eslint-disable-next-line react/prop-types
const Answer = ({options = [], handleChange, input}) => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-8'>
            {options.map((option, index) => <AnswerCheckbox key={index} input={input} index={index} text={option.title} option={option} checked={option.checked} handleChange={handleChange}/>)}
        </div>
    );
};

export default Answer;