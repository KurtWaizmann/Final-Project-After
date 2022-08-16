// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "./QuestionContext";

// import icon and pictures
import { BsArrowRight } from "react-icons/bs";
import imageRorschach from "../../assets/rorschach.jpeg"

// animation imports
import { animateText, animateContinue, quizTransition } from "../AnimationHandlers";



const Question4 = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const [isChosen, setIsChosen] = useState(false);
    return (
        <>
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={quizTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>What do you see in this image?</Question>
                            <ChoiceTitle>Select an Option</ChoiceTitle>
                            <Choices onClick={() => setIsChosen(true)}>
                                <ChoiceRow>
                                    <Button onClick={() => setAnswers({ ...answers, q4: "a speach impediment" })}>clothing</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q4: "an odd patch of hair growing on the back of your hand" })}>birth</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q4: "a bad habit of biting your nails" })}>statue</Button>
                                </ChoiceRow>
                                <ChoiceRow>
                                    <Button onClick={() => setAnswers({ ...answers, q4: "a pretty intense eye twitch" })}>hole</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q4: "a somewhat bulbous belly (you aren't pregnant)" })}>food</Button>
                                    <Button onClick={() => setAnswers({ ...answers, q4: "terrible breath that you cannot get rid of" })}>bathtub</Button>
                                </ChoiceRow>
                            </Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                            <ImageContainer>
                                <Image
                                    src={imageRorschach}
                                    as={motion.img}
                                    initial={"start"}
                                    animate={"end"}
                                    variants={animateText}
                                />
                            </ImageContainer>
                            {isChosen && <>
                                <StyledLink to="/question/5">
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

export default Question4

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
    width: 90%;
    font-size: 50px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
    color: #9F9F92;
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
    flex:1;
    position: relative;
    left: -50px;
    top: 30px;
`
const ChoiceRow = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0 0px;
    gap: 60px;
`
const Button = styled.button`
    height: 56px;
    width: 171px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #7D7D7D;
    text-transform: uppercase;
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
const Image = styled.img`
    width: 250px;
    top: 10px;
    left:0px;
`
const ImageContainer = styled.div`
    display: flex;
    border: 10px solid white;
    position: absolute;
    background-color: white;
    top: 10px;
    left:0px;
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