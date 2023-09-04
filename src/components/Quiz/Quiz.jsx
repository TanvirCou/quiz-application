import React, { useEffect, useReducer, useState } from 'react';
import Answer from './Answer';
import ProgressBar from './ProgressBar';
import MiniPlayer from './MiniPlayer';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import useQuestions from '../Hooks/useQuestions';
import _ from 'lodash';
import { useAuth } from '../../Contexts/AuthContext';
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;
const reducer = (state, action) => {
    switch(action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                option.checked = false;
                });
                
            });
            return action.value;
        case "answer":
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state);
            questions[action.questionId].options[action.optionIndex].checked = action.value;
            return questions;
        default :
            return state;
    }
};

const Quiz = () => {
    const {id} = useParams();
    const { loading, error, questions } = useQuestions(id);
    const {currentUser} = useAuth();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const location = useLocation();
    const {state} = location;
    const {videoTitle} = state;
   
    
    const navigate = useNavigate();

    const [qna, dispatch] = useReducer(reducer, initialState); 

    useEffect(()=> {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionId: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        })
    };

    function nextQuestion(){
        if(currentQuestion <= questions.length){
            setCurrentQuestion(prev => prev + 1);
        }
    }

    function previousQuestion() {
        if(currentQuestion >= 1 && currentQuestion <= questions.length){
            setCurrentQuestion(prev => prev - 1);
        }
    }

    const percentage = questions.length > 0 ? ((currentQuestion + 1) /questions.length) * 100 : 0;

    async function submit(){
        const {uid} = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [id]: qna
        });
        navigate(
           `/result/${id}`,
            {state: {
                qna
                }
            }
        );
     }

    return (
        <>
            {loading && (<div>Loading....</div>)}
            {error && (<div>There is an error</div>)}
            {!loading && !error && qna && qna.length > 0 && (
                <div className='bg-gray-100 px-14 pt-6 h-screen'>
                <h1 className='text-2xl font-bold leading-10'>{qna[currentQuestion].title}</h1>
                <h4 className='text-sm text-gray-600'>Question can have multiple answers</h4>
                <Answer options={qna[currentQuestion].options} handleChange={handleAnswerChange} input></Answer>
                <ProgressBar next={nextQuestion} prev={previousQuestion} submit={submit} progress={percentage}></ProgressBar>
                <MiniPlayer id={id} title={videoTitle}></MiniPlayer>
            </div>
            )}
        </>
        
    );
};

export default Quiz;