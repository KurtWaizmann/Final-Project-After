// package imports
import styled from "styled-components"
import { useContext } from "react";

// component imports
import { QuestionContext } from "../questionnaire/QuestionContext";


const Summary = () => {
    const { answers } = useContext(QuestionContext);
    return (
            <Text>
                Welcome {answers.name} to your new life. It's a pleasure to have you join our family. According to our assessment... you are {answers.q1} years old, and your current profession is {answers.q2}. You are {answers.q3}. Unfortunately, you currently have {answers.q4}, and are terribly self-conscious about it. You love {answers.q5}, {answers.q6}, and {answers.q8}. Friends often call you by the nickname "{answers.q7}", which you kinda like. For a pet, you have {answers.q9}, which you've called {answers.q10}.
            </Text>
    )
}

export default Summary

const Text = styled.div`
    width: 32%;
    word-wrap: normal;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
    color: #9F9F92;
    padding-top: 5px;
`