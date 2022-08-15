// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuid } from 'uuid';

// component imports
import BasicHeader from "../BasicHeader";
import { QuestionContext } from "./QuestionContext";

// import icon
import { BsArrowRight } from "react-icons/bs";

// animation imports
import { animateContinue, quizTransition, buttonHover } from "../AnimationHandlers";

const Question1 = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const [isChosen, setIsChosen] = useState(false);
    console.log(answers)

    const buttons = [];
    for (let i = 1; i < 11; i++) {
        buttons.push(<Button key={uuid()} as={motion.button} initial={"start"} whileHover={"end"} variants={buttonHover} onClick={() => setAnswers({ ...answers, q1: i })}>{i}</Button>)
    }


    return (
        <>
            
            <Wrapper className="WHEREAREYOU" as={motion.div} initial="out" animate="in" exit="out" variants={quizTransition}>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>On a scale 1 to 10, how spiritual would you consider yourself?</Question>
                            <QuestionBox />
                            <ChoiceTitle>Select an Option</ChoiceTitle>
                            <Choices onClick={() => setIsChosen(true)}>{buttons}</Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                            {isChosen && <>
                                <StyledLink to="/question/2">
                                    <Continue
                                        as={motion.div}
                                        initial={"start"}
                                        animate={"end"}
                                        variants={animateContinue}
                                        onClick={() => localStorage.setItem("answers", JSON.stringify(answers))}
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
    color:#7D7D7D;
    &:focus{
        border-color: green;
        color: black;
    }
    &:hover{
        color: black;    
        font-weight: 500;
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