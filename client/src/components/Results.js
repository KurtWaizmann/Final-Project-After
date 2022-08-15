// package imports
import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "./questionnaire/QuestionContext";
import Summary from "./Summary";

// animation imports
import { pageTransition } from "./AnimationHandlers";

const Results = () => {
    const { answers } = useContext(QuestionContext);
    const [ profilePic, setProfilePic] = useState(null)

    useEffect(() => {
        fetch(`https://fakeface.rest/face/json`)
        .then((res) => res.json())
        .then((data) => {
          setProfilePic(data)
        })
    },[])
    
    profilePic && console.log(profilePic.image_url)

    return (
        <Wrapper>
            <Profile as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                {profilePic && <>
                <Photo src={profilePic.image_url}></Photo>
                </>}
                <Summary />
            </Profile>
        </Wrapper>
    )
}

export default Results

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    `
const Photo = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid green;
`
