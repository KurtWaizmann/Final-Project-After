// package imports
import styled from "styled-components"
import { useContext } from "react";
import { motion } from "framer-motion";

// component imports
import BasicHeader from "./BasicHeader";
import { QuestionContext } from "./questionnaire/QuestionContext";

// animation imports
import { animateContinue, pageTransition } from "./AnimationHandlers";

const Results = () => {
    const { answers } = useContext(QuestionContext);

    return (
        <>
            <BasicHeader />
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Text>
                    {/* You are a {answers.q1} and {answers.q2} man. But fortunetaly, you are also {answers.q3}. */}
                    Poopie Pants
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