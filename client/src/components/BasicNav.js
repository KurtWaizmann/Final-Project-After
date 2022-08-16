// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";

const BasicNav = () => {
    return (
        <Wrapper>
            <TitleWrap to={"/home"}>
                <Title>After.<Trademark>TM</Trademark></Title>
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
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    text-decoration: none;

`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;
    color: #232323;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`
const Trademark = styled.div`
    font-size: 8px;
    /* position: relative; */
    top: 45px;
    height: 15px;
    font-weight: 500;
    color: #a7a5a5;
`
