// package imports
import styled from "styled-components"
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "../questionnaire/QuestionContext";
import Summary from "./Summary";
import { DoNNut } from "./chartdata";

// animation imports
import { pageTransition, animateText } from "../AnimationHandlers";




const ResultsPage = () => {
    const { answers, setAnswers } = useContext(QuestionContext);

    // Date until upload
    const now = new Date().getTime();
    const countdown = new Date("Sep 22, 2022 12:00:00").getTime();
    const timeleft = countdown - now;
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    const addUser = (data) => {
        setAnswers({
            userId: data._id,
            imageSrc: data.profilePic,
            name: data.name,
            q1: data.age,
            q2: data.job,
            q3: data.quality,
            q4: data.quirk,
            q5: data.passion1,
            q6: data.passion2,
            q8: data.passion3,
            q7: data.nickname,
            q9: data.companion,
            q10: data.companionName
        })
    }

    useEffect(() => {
        fetch("/profile")
            .then((res) => res.json())
            .then((data) => {
                addUser(data)
            })
    }, [])

    console.log(answers)
    return (
        <Wrapper>
            {!answers ? <div>ERROR</div> : <>
                <Profile as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                    <PhotoBox>
                        <Photo
                            src={answers.profilePic}
                            as={motion.img}
                            initial={"start"}
                            animate={"end"}
                            variants={animateText} />
                        <Circle />
                        <Name>Henry</Name>
                        <UploadDate><UploadSpan1>Upload in</UploadSpan1> <UploadSpan2>{days} days</UploadSpan2><UploadSpan3> {hours} hours</UploadSpan3></UploadDate>
                    </PhotoBox>
                    <Summary />
                </Profile>
            </>}
            <Stats>
                <DoNNut/>
            </Stats>
        </Wrapper>
    )
}

export default ResultsPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 88vh;
    border: 2px solid blue;

`
const Profile = styled.img`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
    border: 2px solid green;
    height: 500px;
    flex: 1;
    `
const Photo = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: azure;
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
const UploadDate = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    bottom: 15px;
`
const UploadSpan1 = styled.span`
    font-weight: 800;
`
const UploadSpan2 = styled.span`
    font-weight: 800;
    color: green;
`
const UploadSpan3 = styled.span`
    font-weight: 800;
    color: blue;
`
const Stats = styled.div`
    border: 2px solid red;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
