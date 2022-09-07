// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuid } from 'uuid';

// component imports
import { QuestionContext } from "./QuestionContext";

// import icon
import { BsArrowRight } from "react-icons/bs";

// animation imports
import { animateContinue, quizTransition } from "../AnimationHandlers";

const Question1 = () => {
    // answers state in context
    const { answers, setAnswers } = useContext(QuestionContext);

    // state checks if a button is pressed, then reveals continue button
    const [isChosen, setIsChosen] = useState(false);

    return (
        <>
            {/* transition animation between questions */}
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={quizTransition}>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>On a scale 1 to 10, how spiritual would you consider yourself?</Question>
                            <QuestionBox />
                            <ChoiceTitle>Select an Option</ChoiceTitle>

                            {/* when click, set state, which reveals continue button */}
                            <Choices onClick={() => setIsChosen(true)}>
                                {/* pressing answer buttons sets state with a value */}
                                <Button onClick={() => setAnswers({ ...answers, q1: 1 + 20 })}>1</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 2 + 20 })}>2</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 3 + 20 })}>3</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 4 + 20 })}>4</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 5 + 20 })}>5</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 6 + 20 })}>6</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 7 + 20 })}>7</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 8 + 20 })}>8</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 9 + 20 })}>9</Button>
                                <Button onClick={() => setAnswers({ ...answers, q1: 10 + 20 })}>10</Button>
                            </Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                            {/* when state is true, continue is revealed */}
                            {isChosen && <>
                                <StyledLink to="/question/2">
                                    <Continue
                                        as={motion.div}
                                        initial={"start"}
                                        animate={"end"}
                                        variants={animateContinue}
                                    >Continue
                                        <ArrowWrap>
                                            <BsArrowRight />
                                        </ArrowWrap>
                                    </Continue>
                                </StyledLink>
                            </>}

                        </ContinueWrap>
                    </InnerWrap>
                </Container>
            </Wrapper>
        </>)
}

export default Question1

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88vh;
    gap: 20px;
    `
const Container = styled.div`
    width: 1195px;
    height: 626px;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const InnerWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 70%;
`
const QuestionWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 2;
`
const Question = styled.h1`
    width: 900px;
    font-size: 50px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
    color: #9F9F92;
    flex:1;
    position: absolute;
`
const QuestionBox = styled.div`
    width: 100%;
    flex:1;
`
const ChoiceTitle = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 25px;
    width: 135px;
    letter-spacing: 0em;
    text-align: left;
    color: #7D7D7D;
    border-bottom: 2px solid #7D7D7D;
`
const Choices = styled.div`
    height: 100%;
    width: 700px;
    flex:1;
    top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    line-height: 10px;
    
`
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 3px;
    border: 3px solid #7D7D7D;
    font-size: 40px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    color:#b5b4b4;
    &:focus{
        color: black;
        font-weight: 300;
    }
    &:hover{
        background-color: #ffffff;
    }
    `
const ContinueWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    position: relative;
`
const Continue = styled(Link)`
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
    color: #7D7D7D;
    border-bottom: 1px solid #7D7D7D;
    display: flex;
    opacity: 0;
`
const ArrowWrap = styled.div`
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #7D7D7D;
    position: relative;
    top: 3px;
    margin-left: 5px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`