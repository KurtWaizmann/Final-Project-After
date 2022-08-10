import styled from "styled-components"
import { Link } from "react-router-dom";

const BasicHeader = () => {
    return (
    <Wrapper>
        <TitleWrap to={"/"}>
            <Title>After.</Title>
            <Trademark>TM</Trademark>
        </TitleWrap> 
    </Wrapper>
    )
}

export default BasicHeader;

const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const TitleWrap = styled(Link)`
    display: flex;
    text-decoration: none;
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;
`
const Trademark = styled.div`
    font-size: 8px;
    position: relative;
    top: 25px;
    font-weight: 500;
    color: #a7a5a5;
`
