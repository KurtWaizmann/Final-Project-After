// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// animation imports
import { pageTransition } from "../AnimationHandlers";


// CURRENTLY UNUSED — Wanted to put this in between some questions
const Interlude1 = () => {
    return (
        <>
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Message>Good job on completing the first three questions.</Message>
                <Message>On another note — we apologies for any bugs that you might find in this assessment. Words and letters may appear out of place. Rest assured that we are working on resolving these issues.</Message>

                <Continue to="/question/4">Continue</Continue>
            </Wrapper>
        </>
    )
}

export default Interlude1

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88vh;
    gap: 20px;
    `

const Message = styled.div`
    font-size: 16px;
    width: 60%;
    line-height: 24px;
    font-weight: 200;
`
const Continue = styled(Link)`
width: 60%;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #6d6466;
  cursor: pointer;
  opacity: 0.7;
`;