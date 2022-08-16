// package imports
import styled from "styled-components"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// animation import
import { pageTransition } from "../AnimationHandlers";

const HomeNav = () => {
    const userId = JSON.parse(localStorage.getItem("After-userId"))

    return (
        <Wrapper>
            <InnerWrap as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition}>
                <Subtitle to="/productdetails">product</Subtitle>
                <Subtitle to="/companydetails">who we are</Subtitle>
            </InnerWrap>
       
            <InnerWrap as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition}>
                <Subtitle to="/faq">F.A.Q.</Subtitle>
                {userId
                    ? <Subtitle to="/profile">profile</Subtitle>
                    : <Subtitle to="/registration">sign up</Subtitle>
                }
            </InnerWrap>
        </Wrapper>
    )
}

export default HomeNav;

const Wrapper = styled.div`
    height: 70px;
    width: 99%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
`
const InnerWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15%;
`
const Subtitle = styled(Link)`
    font-size: 15px;
    font-weight: 200;
    text-transform: capitalize;
    cursor: pointer;
    text-decoration: none;
    color: #232323;
`
