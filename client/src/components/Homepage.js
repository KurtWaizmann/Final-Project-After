// package imports
import styled from "styled-components"

// component imports
import HomeHeader from "./headers/HomeHeader"

// image imports
import imageBeach from "../assets/man-walking-on-beach.png"
import imageCEO from "../assets/ceo-portrait.png"
import imageMountains from "../assets/mountains.png"

const Homepage = () => {
  return (
    <Body>
      <HomeHeader />

     {/* first fold — intro message */}
      <FoldOne>
        <IntroWrap>
          <Title>Upload your troubles away</Title>
          <SubHeader>INTO A WORLD DESIGNED FOR YOU</SubHeader>
          <Description>Begin your journey towards a new life full of richness and beauty. Shed the toubles of the past and upload yourself into a world designed by the finest minds to be as enriching as ever experienced. Come join us today in our digital paradise.</Description>
        </IntroWrap>
      </FoldOne>

      {/* second fold — man on beach image */}
      <FoldTwo>
      <ImageOne src={imageBeach} />
      </FoldTwo>

      {/* third fold — CEO */}
      <FoldThree>
        <WrapperCeo>
        <Leader>Our Leader</Leader>
        <InnerWrapCEO>
          <TitleCEO>From the spark of a glorious mind is born a revolution</TitleCEO>
          <DecriptionTwo>From humble beginnings, TrueNeural CEO Alan Rowe gathered the best people in the industry to build a new revolutionary technology. Others had deemed it impossible, but he chose to invest his own life to create a new and better one for others to enjoy. As luck would have it, he succeeded.</DecriptionTwo>
          <More>Find out more</More>
        </InnerWrapCEO>
        <ImageTwo src={imageCEO} />
        </WrapperCeo>
      </FoldThree>

      {/* fourth fold — mountains */}
      <FoldFour>
        <ImageOne src={imageMountains} />
        <FeelGood>Why feel bad when you can feel good?</FeelGood>
      </FoldFour>


      {/* fifth fold — three pillars */}
      <FoldFive>
      <WrapperPillars>
        <Pillar>
          <PillarName>Positivity</PillarName>
          <PillarDescription>Structured to minimize negative emotion and instead promote positivity and happiness.</PillarDescription>
        </Pillar>
        <Pillar>
          <PillarName>Meaning</PillarName>
          <PillarDescription>Algoriths to monitor and impart insightful meaning to every piece of your new existance.</PillarDescription>
        </Pillar>
        <Pillar>
          <PillarName>Freedom</PillarName>
          <PillarDescription>Boundaries are broken with a world that’s yours to fully explore and reshape as you see fit.</PillarDescription>
        </Pillar>
      </WrapperPillars>
      </FoldFive>


    </Body>
  )
}

export default Homepage

const Body = styled.div`
  width: 100%;
  height:10438px;
`

// Fist Fold CSS 
const FoldOne = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`
const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 736px;
  gap: 34px;
`
const Title = styled.h1`
font-size: 92px;
border-radius: nullpx;
color: #9F9F92;
font-size: 60px;
font-weight: 400;
line-height: 78px;
letter-spacing: 0em;
text-align: center;
`
const SubHeader = styled.div`
font-size: 24px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0em;
text-align: center;
color: #6D6466;
`
const Description = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: #6D6466;
`


// Second Fold 
const FoldTwo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid blue; */
`
const ImageOne = styled.img`
  width: 100%;
`


// Third Fold 
const FoldThree = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:2%;
`
const WrapperCeo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap:8%;
`
const Leader = styled.div`
font-size: 24px;
font-weight: 600;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
color: #6D6466;
display: flex;
width: 85px;
`
const InnerWrapCEO = styled.div`
  width: 518px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const TitleCEO = styled.h1`
  font-size: 92px;
  border-radius: nullpx;
  color: #9F9F92;
  font-size: 60px;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
`
const DecriptionTwo = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #6D6466;
`
const More = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #6D6466;
  cursor: pointer;
`
const ImageTwo = styled.img`
  margin-top: 20px;
  width: 342px;
  height: 342px;
`


// Fourth Fold 
const FoldFour = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
`
const FeelGood = styled.h1`
font-size: 60px;
font-weight: 400;
line-height: 78px;
letter-spacing: 0em;
width: 100%;
text-align: center;
color: #FFFFFF;
position: absolute;
`




// fifth fold
const FoldFive = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`
const WrapperPillars = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8%;
`
const Pillar = styled.div`
  width: 271px;
`
const PillarName = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
`
const PillarDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`