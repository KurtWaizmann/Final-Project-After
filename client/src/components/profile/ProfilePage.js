// package imports
import styled from "styled-components"
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "../questionnaire/QuestionContext";
import Summary from "./Summary";
import Countdown from "./Countdown";

// animation imports
import { pageTransition, animateText } from "../AnimationHandlers";




const ProfilePage = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const userId = JSON.parse(localStorage.getItem("After-userId"))


    useEffect(() => {
        fetch(`/profile/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setAnswers({
                    userId: data.data._id,
                    profilePic: data.data.profilePic,
                    name: data.data.name,
                    q1: data.data.age,
                    q2: data.data.job,
                    q3: data.data.quality,
                    q4: data.data.quirk,
                    q5: data.data.passion1,
                    q6: data.data.passion2,
                    q8: data.data.passion3,
                    q7: data.data.nickname,
                    q9: data.data.companion,
                    q10: data.data.companionName
                })
            })
    }, [])

    return (
        <>
            {!answers
                ? <Blank></Blank>
                : <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                    <InnerWrap>
                        <Profile>
                            <PhotoBox>
                                <Photo src={answers.profilePic} as={motion.img} initial={"start"} animate={"end"} variants={animateText} />
                                <Circle />
                                <Name>{answers.name}</Name>
                                <Countdown />
                            </PhotoBox>
                            <Summary />
                        </Profile>
                        <InstructionsBox>
                            <Instructions><Important>IMPORTANT!</Important> You will receive further intructions in both your mail and email for preparing yourself for the transition period, If you have any further questions of concerns, contact the closest TrueNeural information center or contact us by phone (555-0199).</Instructions>
                        </InstructionsBox>
                    </InnerWrap>
                </Wrapper>}
        </>
    )
}

export default ProfilePage

const Blank = styled.div`
    width: 100%;
    height: 88vh;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88vh;
`
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 100px;
    height: 500px;
    `
const Photo = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: black;
`
const PhotoBox = styled.div`
    position: relative;
`
const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #A4BDBA;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: -1;
`
const Name = styled.h1`
    padding-top: 20px;
    font-size: 50px;
`
const InstructionsBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F1F1F1;
    border-radius: 5px;
    padding: 30px;
`
const Important = styled.span`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0em;
    color: #9F9F92;
`
const Instructions = styled.div`
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0em;
    color: #9F9F92;
`

const InnerWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    height: 50vh;
`

