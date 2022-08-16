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



const Question5 = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const [isChosen, setIsChosen] = useState(false);
    console.log(answers)

    return (
        <>
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={quizTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>Which of these smells is most interesting to you?</Question>
                            <QuestionBox />
                            <ChoiceTitle>Select an Option</ChoiceTitle>
                            <Choices onClick={() => setIsChosen(true)}>
                            <ChoiceRow>
                                    <Button onClick={() =>  setAnswers({ ...answers, q5: "socializing with friends" })}>Christmas Trees </Button>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "making charicatures of deceased actors" })}>Sharpies </Button>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "spending time with family" })}>Baby </Button>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "going on road trips across the country" })}>Gasoline</Button>
                                    </ChoiceRow>
                                    <ChoiceRow>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "going to raves and staying up late" })}>New Car</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "staying-in and watching tv-shows" })}>Fresh paint</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "going to wineries on weekends" })}>Wine</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q5: "going on hiking expeditions" })}>Bacon</Button>
                                    </ChoiceRow>
                            </Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                        {isChosen && <>
                                <StyledLink to="/question/6">
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

export default Question5

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
    width: 40%;
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
    flex-wrap: wrap;
    gap: 10px;
    line-height: 10px;
`
const Letter = styled.h1`
    margin-right: 10px;
    color: #9F9F92;

`
const Button = styled.button`
    width: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    color: #9F9F92;
    border-radius: 30px;
    &:hover{
        border: 2px solid #c7c7c7;
    }
    &:focus{
        border: 2px solid #7D7D7D;
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
const ChoiceRow = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0 0px;
    gap: 20px;
`