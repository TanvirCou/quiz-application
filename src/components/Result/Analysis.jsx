import AnswerAnalysis from "./AnswerAnalysis";



const Analysis = ({answers}) => {
    return (
        <div className='px-14'>
            <h1 className='text-2xl font-bold leading-10'>Question Analysis</h1>
           <div>
            <AnswerAnalysis answers={answers}></AnswerAnalysis>
           </div>
        </div>
    );
};

export default Analysis;