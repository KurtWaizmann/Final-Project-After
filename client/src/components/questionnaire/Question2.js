// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";

// component imports
import BasicHeader from "../BasicHeader";
import { QuestionContext } from "./QuestionContext";

// import icon
import { BsArrowRight } from "react-icons/bs";


const Question2 = () => {
    const {answers, setAnswers} = useContext(QuestionContext);
    console.log(answers)
    return (
        <>
            <BasicHeader />
            <Wrapper>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>How do you really feel about grapefruit?</Question>
                            <ChoiceTitle>Select an Option</ChoiceTitle>
                            <Choices>
                                <ChoiceRow>
                                    <Button onClick={() => setAnswers({...answers, question2: "smelly"})}>disillusioned</Button>
                                    <Button onClick={() => setAnswers({...answers, question2: "ugly"})}>lovesick</Button>
                                </ChoiceRow>
                                <ChoiceRow>
                                    <Button onClick={() => setAnswers({...answers, question2: "loving"})}>disrespected</Button>
                                    <Button onClick={() => setAnswers({...answers, question2: "beautiful"})}>manipulated</Button>
                                </ChoiceRow>
                            </Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                            <Continue to="/question-three">Continue
                                <ArrowWrap>
                                    <BsArrowRight />
                                </ArrowWrap>
                            </Continue>
                        </ContinueWrap>
                    </InnerWrap>
                </Container>
            </Wrapper>
        </>
    )
}

export default Question2

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 91vh;
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
    width: 100%;
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
