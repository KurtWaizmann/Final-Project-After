// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";

// component imports
import Loader from "../Loader";
import { QuestionContext } from "../questionnaire/QuestionContext";

// animation imports
import { pageTransition, animateContinue } from "../AnimationHandlers";

const QComplete = () => {
    const [redirect, setRedirected] = useState(false)
    const [isCompleted, setIsCompleted] = useState(null)
    const { answers, setAnswers } = useContext(QuestionContext);

    const postProfileInfo = (imageSrc) =>{
        localStorage.setItem("After-userId", JSON.stringify(answers.userId))
            fetch("/profile", {
                method: "POST",
                body: JSON.stringify({
                    _id: answers.userId,
                    profilePic: imageSrc,
                    name: answers.name,
                    age: answers.q1,
                    job: answers.q2,
                    quality: answers.q3,
                    quirk: answers.q4,
                    passion1: answers.q5,
                    passion2: answers.q6,
                    passion3: answers.q8,
                    nickname: answers.q7,
                    companion: answers.q9,
                    companionName: answers.q10,
                }),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then(() =>
                    setAnswers({ ...answers, profilePic: imageSrc})
                )
    }



    useEffect(() => {
        if (answers && (Object.keys(answers).length >= 12)) {
            console.log("INSIDE")
            fetch(`https://fakeface.rest/face/json?minimum_age=${answers.q1}&maximum_age=${answers.q1 + 10}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("pictureinfo", data.image_url)
                    // setProfilePic(data.image_url)
                    postProfileInfo(data.image_url)
                }).then(()=> {
                    setIsCompleted(true)
                })
        } else {
            console.log("creating false?")
            setIsCompleted(false)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => setRedirected(true), 15000)
    }, [])


    return (
        <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
            {!isCompleted ? <div>ERROR — Registration Incomplete. Please start again.</div> : <>
                <Message>Please wait a moment as our system avaluates your answers. We are analysing the data provided from not only the assessment you just fulfilled, but also the neural scans we took while you were intently focused on giving us the best possible answers. From this analysis your avatar will soon be created, awaiting for your neural upload. But that will come in due time. A date for the transfer has been set for the Autumnal equinox on September 22nd, at which you will be taken to our headquarters to finalize the transferance. Please confirm with TrueNeural's closest information center for further details. (555-0199)</Message>
                <Message>In the meantime, we recommend you settle any outstanding debts, resolve any lingering quarrels, and say your final goodbyes to your loved ones. Just remember, it isn't goodbye forever. Only until they, just like you, make the courageous choice to better  their lives.</Message>
                <Message>What wonders and beauty awaits you in the near future.</Message>
                <Message>We can't wait for you to see it for yourself!.</Message>
                <LoadingBox>
                    {redirect
                        ? <StyledLink to="/results"><Continue as={motion.div} initial={"start"} animate={"end"} variants={animateContinue}>Continue</Continue></StyledLink>
                        : <Loader />
                    }
                </LoadingBox>
            </>}
        </Wrapper>

    )
}

export default QComplete

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 91vh;
    gap: 20px;
    `

const Message = styled.div`
    font-size: 16px;
    width: 550px;
    line-height: 24px;
    font-weight: 200;
`
const LoadingBox = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Continue = styled.div`
    position: relative;
    bottom:10px;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-decoration: none;
    color: #7D7D7D;
    border-bottom: 1px solid #7D7D7D;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`