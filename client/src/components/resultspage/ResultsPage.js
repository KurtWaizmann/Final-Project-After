// package imports
import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "../questionnaire/QuestionContext";
import Summary from "./Summary";

// animation imports
import { pageTransition } from "../AnimationHandlers";

const ResultsPage = () => {
    const { answers } = useContext(QuestionContext);
    console.log("check", answers)
    return (
        <Wrapper>
            {!answers ? <div>ERROR</div> : <>
                <Profile as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                    <Photo src={answers.profilePic} />
                    <Summary />
                </Profile>
            </>}
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
`
const Profile = styled.img`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    border: 2px solid green;
    height: 420px;
    `
const Photo = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`
