// package imports
import styled from "styled-components"
import ReactPlayer from 'react-player'
import { motion } from "framer-motion";

// animation import
import { pageTransition } from "./AnimationHandlers";

const Intro = () => {
    return (
        <>
            <motion.div initial="out" animate="in" variants={pageTransition}>
            </motion.div >
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition}>
                <ReactPlayer 
                url='https://kurtwaizmann.wistia.com/medias/8iwibf7qp1' 
                style={{borderRadius: "20px"}}
                />
            </Wrapper>
        </>
    )
}

export default Intro

const Wrapper = styled.div`
    height: 91vh;
    display: flex;
    justify-content: center;
    align-items: center;
`