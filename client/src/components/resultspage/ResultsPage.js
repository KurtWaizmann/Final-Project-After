// package imports
import styled from "styled-components"
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "../questionnaire/QuestionContext";
import Summary from "./Summary";
import { DoNNut } from "./chartdata";
import Countdown from "./Countdown";

// animation imports
import { pageTransition, animateText } from "../AnimationHandlers";




const ResultsPage = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const userId = localStorage.getItem("After-userId")


    useEffect(() => {
        console.log(userId)
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

    console.log(answers)
    return (
        <>
            {!answers
                ? <Blank></Blank>
                : <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                    <Profile>
                        <PhotoBox>
                            <Photo src={answers.profilePic} as={motion.img} initial={"start"} animate={"end"} variants={animateText} />
                            <Circle />
                            <Name>{answers.name}</Name>
                                <Countdown />
                            </PhotoBox>
                        <Summary />
                    </Profile>
                    <Stats>
                        <div>Instructions: saddsdasdsdadasdsa</div>
                        <DoNNut />
                    </Stats>
                </Wrapper>}
        </>
    )
}

export default ResultsPage

const Blank = styled.div`
    width: 100%;
    height: 88vh;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 88vh;
`
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
    height: 500px;
    flex: 1;
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
const Stats = styled.div`
    border: 2px solid red;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
