// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "./QuestionContext";

// import icon
import { BsArrowRight } from "react-icons/bs";

// animation imports
import { animateContinue, quizTransition } from "../AnimationHandlers";

const Question6 = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const [isChosen, setIsChosen] = useState(false);
    console.log(answers)

    return (
        <>
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={quizTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>A man with a knife confronts you and demands your wallet.</Question>
                            <QuestionBox />
                            <ChoiceTitle>Select an Option</ChoiceTitle>
                            <Choices onClick={() => setIsChosen(true)}>
                                    <Button onClick={() =>  setAnswers({ ...answers, q6: "painting your nails" })}><Letter>a. </Letter> Give the man your wallet.</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q6: "a good game of poker" })}><Letter>b. </Letter> Fight the man and risk your own life.</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q6: "table-tennis" })}><Letter>c. </Letter> Attempt to run away, screaming for help.</Button>
                                    <Button style={{width:"550px"}} onClick={() => setAnswers({ ...answers, q6: "travelling the world" })}><Letter>d. </Letter> Desperately wish to be released from this cruel world</Button>
                            </Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                        {isChosen && <>
                                <StyledLink to="/question/7">
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
        </>
    )
}

export default Question6

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
    height: 726px;
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    line-height: 10px;
`
const Letter = styled.h1`
    margin-right: 10px;
    color: #9F9F92;
`
const Button = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 38px;
    border: none;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 100;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    color: #9F9F92;
    &:focus{
        color: #414141;
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