// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// animation import
import { pageTransition } from "./AnimationHandlers";

// icon import 
import { AiFillHeart } from "react-icons/ai";


const RegConfirm = () => {
    const name = sessionStorage.getItem("name")

    return (
        <>
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Title>Thank you {name}. <StyledAiFillHeart /></Title>
                <Message>You have just taken your very first step towards something better. Now begins your journey to a new and more fulfilling life. For your next step, you must complete the following assessment. It will evaluate just where you fit within our very large family. Take your time and be as honest as possible. Your next life will be shaped according to the results.</Message>
                <Continue to="/question/1">Continue</Continue>
            </Wrapper>
            </>    )
}

export default RegConfirm

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 91vh;
    gap: 20px;
    `
const Title = styled.h1`
    font-size: 30px;
`
const Message = styled.div`
    font-size: 16px;
    width: 35%;
    line-height: 24px;
    font-weight: 200;
    text-align: justify;
`
const Continue = styled(Link)`
    display: flex;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-decoration: none;
    color: #7D7D7D;
    border-bottom: 1px solid #7D7D7D;
  cursor: pointer;
`;
const StyledAiFillHeart = styled(AiFillHeart)`
    color: red;
    position: relative;
    top:5px;
`