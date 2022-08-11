// package imports
import styled from "styled-components"

// component imports
import BasicHeader from "./BasicHeader";

const RegConfirm = () => {
    const name = sessionStorage.getItem("name")

    return (
        <>
            <BasicHeader />
            <Wrapper>
                <Title>Thank you {name}.</Title>
                <Message>You have just begun your journey to a new and better life. Before we can continue, you must complete the following assessment.</Message>
            </Wrapper>
        </>
    )
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
    width: 50%;
    line-height: 24px;
`