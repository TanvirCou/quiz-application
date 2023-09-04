import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get} from "firebase/database"

export default function useQuestions(videoId){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions(){
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoId + "/questions");
            const quizQuery = query(quizRef, orderByKey());
    
            try{
                setLoading(true);
                setError(false);
                const snapshot = await get(quizQuery)
                setLoading(false);
                if(snapshot.exists()){
                    setQuestions(() => {
                        return [...Object.values(snapshot.val())];
                    })
                }
            }catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestions();
    }, [videoId]);

    return {
        loading,
        error,
        questions,
    };
}