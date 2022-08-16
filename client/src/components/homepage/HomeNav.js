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
            <TitleWrap>
                <Title>After.</Title>
                <Trademark>TM</Trademark>
            </TitleWrap>
            <InnerWrap as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition}>
                <Subtitle to="/faq">F.A.Q.</Subtitle>
                {userId
                    ? <Subtitle to="/results">profile</Subtitle>
                    : <Subtitle to="/registration">sign up</Subtitle>
                }
            </InnerWrap>
        </Wrapper>
    )
}

export default HomeNav;

const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
`
const TitleWrap = styled.div`
    display: flex;
    opacity:0;
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;
    color: #232323;
`
const Trademark = styled.div`
    font-size: 8px;
    position: relative;
    top: 25px;
    font-weight: 300;
    color: #a7a5a5;
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
