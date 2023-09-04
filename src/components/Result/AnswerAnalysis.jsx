import Answer from '../Quiz/Answer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const AnswerAnalysis = ({answers = []}) => {
    return (
        <>
        { answers.map((answer, index) => (
            <div className='bg-white mt-4 rounded-md pb-10 gap-4' key={index}>
            <div className='pt-2 text-md font-bold flex'>
                <span className='px-2 text-green-600'><FontAwesomeIcon icon={faCircleQuestion}/></span>
                <p>{answer.title}</p>
            </div>
                <div className='px-2'>
                    <Answer options={answer.options} input={false}></Answer>
                </div>
            </div>
            ))
        }
        </>
    );
};

export default AnswerAnalysis;