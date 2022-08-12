
import { QuestionContext } from "./QuestionContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";



const Verify = () => {
    const { answers, setAnswers } = useContext(QuestionContext);

    // question1
    const navigate = useNavigate();
    useEffect(() => {
        setAnswers(JSON.parse(localStorage.getItem("answers")))
    }, [])

    useEffect(() => {
        if (answers) {
            console.log("poopie")
            if (Object.keys(answers).length === 5) {
                navigate(`/question/results`)
            } else if (Object.keys(answers).length >= 1) {
                console.log(Object.keys(answers).length + 1)
                navigate(`/question/${Object.keys(answers).length + 1}`)
            }
        }
    }, [answers])
}

// question 2
const navigate = useNavigate();
useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("answers")))
}, [])

useEffect(() => {
    console.log(answers)
    if (!answers) {
        navigate(`/question/1`)
    }  else if ( Object.keys(answers).length === 5) {
        navigate(`/question/results`)
    } else if (Object.keys(answers).length !== 1) {
        navigate(`/question/${Object.keys(answers).length + 1}`)
    }
}, [answers])



export default Verify