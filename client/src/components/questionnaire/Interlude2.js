// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// component imports
import BasicHeader from "../BasicHeader";

// animation imports
import { animateContinue, pageTransition } from "../AnimationHandlers";

const Interlude2 = () => {
    return (
        <>
            <BasicHeader />
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Message>You have just taken your very first step towards something better. Now begins your journey to a new and more fulfilling life. For your next step, you must complete the following assessment. It will evaluate just where you fit within our very large family. Take your time and be as honest as possible. Your next life will be shaped according to the results.</Message>
                <Continue to="/question/7">Continue</Continue>
            </Wrapper>
        </>
    )
}

export default Interlude2

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