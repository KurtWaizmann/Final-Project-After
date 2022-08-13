import styled from "styled-components"

const HomeHeader = () => {
    return (
    <Wrapper>
        <InnerWrap>
            <Subtitle>product</Subtitle>
            <Subtitle>who we are</Subtitle>
        </InnerWrap>
        <TitleWrap>
            <Title>After.</Title>
            <Trademark>TM</Trademark>
        </TitleWrap> 
        <InnerWrap>
            <Subtitle>F.A.Q.</Subtitle>
            <Subtitle>sign up</Subtitle>
        </InnerWrap>
    </Wrapper>
    )
}

export default HomeHeader;

const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const TitleWrap = styled.div`
    display: flex;
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
const Subtitle = styled.div`
    font-size: 15px;
    font-weight: 200;
    text-transform: capitalize;
    cursor: pointer;
`
