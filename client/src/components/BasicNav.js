// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";

const BasicNav = () => {
    return (
    <Wrapper>
        <TitleWrap to={"/home"}>
            <Title>After.</Title>
            <Trademark>TM</Trademark>
        </TitleWrap> 
    </Wrapper>
    )
}

export default BasicNav;

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
    color: #232323;

`
const Trademark = styled.div`
    font-size: 8px;
    position: relative;
    top: 45px;
    height: 15px;
    font-weight: 500;
    color: #a7a5a5;
`
