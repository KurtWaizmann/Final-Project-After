// package imports
import styled from "styled-components"
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// component imports
import BasicHeader from "../BasicHeader";
import Loader from "../Loader";

// animation imports
import { pageTransition } from "../AnimationHandlers";

const QComplete = () => {
    const [redirect, setRedirected] = useState(false)

    useEffect(() => {
        setTimeout(() => setRedirected(true), 15000)
    }, [])

    console.log(redirect)
    return (
        <>{redirect
            ? <Navigate to="/results" />
            : <>
                <BasicHeader />
                <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition} style={{ textDecoration: "none", padding: "none", margin: "none" }}>
                    <Loader><Loader /></Loader>
                    <Message>Please wait a moment as our system avaluates your answers. It is important that it goes through your responses with accurate precision to determine just who you will become in the next life.</Message>
                </Wrapper>
            </>}
        </>
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
