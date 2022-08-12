// package imports
import styled from "styled-components"

import { useContext } from "react";

// component imports
import BasicHeader from "./BasicHeader";
import { QuestionContext } from "./questionnaire/QuestionContext";


const Results = () => {
    const { answers } = useContext(QuestionContext);

    return (
        <>
            <BasicHeader />
            <Wrapper>
                <Text>
                    You are a {answers.q1} and {answers.q2} man. But fortunetaly, you are also {answers.q3}.
                </Text>
            </Wrapper>
        </>
    )
}

export default Results

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 91vh;
    gap: 20px;
    `
const Text = styled.div`
    width: 50%;
    word-wrap: normal;
`