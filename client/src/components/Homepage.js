// package imports
import styled from "styled-components"
import { motion, Variants } from "framer-motion";

// component imports
import HomeHeader from "./headers/HomeHeader"
import HomeFooter from "./footers/HomeFooter"

// image imports
import imageBeach from "../assets/man-walking-on-beach.png"
import imageCEO from "../assets/ceo-portrait.png"
import imageMountains from "../assets/mountains.png"
import imageSurfing from "../assets/surfing.png"
import imageEmployees from "../assets/employees.png"
import imageSleeper from "../assets/sleeper.png"
import imageSleepAssist from "../assets/sleeper-assist.png"
import imageTestimonail1 from "../assets/testimonial-1.png"
import imageTestimonail2 from "../assets/testimonial-2.png"
import imageTestimonail3 from "../assets/testimonial-3.png"
import imageTestimonail4 from "../assets/testimonial-4.png"
import imageBoy from "../assets/littleboy.png"



const Homepage = () => {
  return (
    <Body>
      <HomeHeader />

     {/* first fold — intro message */}
      <FoldOne>
        <motion.IntroWrap
        initial={{x:-1000}}
        animate={{
          x:1,
          rotate:10,
        }}
        transition={{duration:2}}
        >
          <Title>Upload your troubles away</Title>
          <SubHeader>INTO A WORLD DESIGNED FOR YOU</SubHeader>
          <Description>Begin your journey towards a new life full of richness and beauty. Shed the toubles of the past and upload yourself into a world designed by the finest minds to be as enriching as ever experienced. Come join us today in our digital paradise.</Description>
        </motion.IntroWrap>
      </FoldOne>

      {/* second fold — man on beach image */}
      <FoldTwo>
      <Image src={imageBeach} />
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
        <Image src={imageMountains} />
        <Slogan>Why feel bad when you can feel good?</Slogan>
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
          <PillarDescription>Boundaries are broken with a world that’s yours to fully explore and create.</PillarDescription>
        </Pillar>
      </WrapperPillars>
      </FoldFive>

      {/* sixth fold — surfing */}
      <FoldSix>
        <Image src={imageSurfing} />
        <Slogan>A world for you to reshape</Slogan>
      </FoldSix>

      {/* seven fold — two employees */}
      <FoldSeven>
        <ContainerMind>
          <WrapperMind>
            <TitleMind>Your mind is in the best of hands</TitleMind>
            <DescriptionMind>Let us be your guide through the transition into a new life. Our employees, who we consider family, will be with you every step of the process. They will help you settled into the right spiritual mindset before initializing the upload.</DescriptionMind>
            <More>Find out more</More>
          </WrapperMind>
          <ImageEmployees src={imageEmployees} />
        </ContainerMind>
      </FoldSeven>

      {/* eigth fold — three more pillars */}
      <FoldEight>
      <WrapperPillars>
        <Pillar>
          <PillarName>Belonging</PillarName>
          <PillarDescription>Develop profound relationships with other avatars who will value you for you.</PillarDescription>
        </Pillar>
        <Pillar>
          <PillarName>Transcendence</PillarName>
          <PillarDescription>Break apart the old paradigms of what it means to live a life, and follow ever life paths without fear or regret.</PillarDescription>
        </Pillar>
        <Pillar>
          <PillarName>Storytelling</PillarName>
          <PillarDescription>We are the authors of our lives, so create the narrative that brings clarity and reenforces your purpose.</PillarDescription>
        </Pillar>
      </WrapperPillars>
      </FoldEight>

      {/* ninth fold — customer going to sleep */}
      <FoldNine>
        <img src={imageSleeper} />
        <SloganDream>Drift into a Lovely Dream</SloganDream>
      </FoldNine>

      {/* tenth fold — employee assisting customer */}
      <FoldTen>
        <img src={imageSleepAssist} />
      </FoldTen>

      <FoldEleven>
        <WrapTestimonial>
        <Stars>★★★★★</Stars>
          <Testimonial>At the age of 78, I signed up to After.  I was quite resistant at first. But my son wore me out. I guess I liked this option better than being sent into a retirement home. And thank god for my son’s insistance. Now I’m 50 years younger, verile, and full of energy. And after seeing all the fun I was having, my wife soon joined and she’s now in her 20s! What a georgeous thing.</Testimonial>
          <Signed>Richie Guzman — Uploaded in 2021</Signed>
        </WrapTestimonial>
        <img src={imageTestimonail1} />
      </FoldEleven>

      <FoldTwelve>
        <img src={imageTestimonail2} />
        <WrapTestimonial>
        <Stars>★★★★★</Stars>
          <Testimonial>I was dying from cancer with only a few months to live when I discovered After. What a miracle. I’ve left my diseased body behind for everlasting vitality. I only wish I could get my loved ones to join me. I guess they will someday :)</Testimonial>
          <Signed>Jordan Hutchinson — Uploaded in 2020</Signed>
        </WrapTestimonial>
      </FoldTwelve>

      <FoldThirteen>
        <WrapTestimonial>
        <Stars>★★★★★</Stars>
          <Testimonial>Honestly, I was so fortunate to be able leave that so-called “real” world. Let me remind you, a world ravaged by global warming, economic crises, endless wars, and so much more hurt. I remember struggling for simple things like finding fresh fruit when all the groceries stores were empty, or hiding indoors from the yearly pandemic. In the After, it’s been nothing but beautiful weather and happy moments. Truly a paradise! </Testimonial>
          <Signed> Suzette Aguilar — Uploaded in 2022</Signed>
        </WrapTestimonial>
        <img src={imageTestimonail3} />
      </FoldThirteen>

      <FoldFourteen>
        <img src={imageTestimonail4} /> 
        <WrapTestimonial>
          <Stars>★★★★★</Stars>
          <Testimonial>After getting married, me and my wife moved into After. Sadly, we divorced within the year as my wife had trouble adapting. But there’s love all around! I was even able to make the woman of my dreams, with all the best features  and a wonderful personality. And let me tell you, Kiri is as real as any woman! We just connect on such a level that me and my ex-wife (rip) never could. I thank every day that I got on the path that led me to my precious Kiri...</Testimonial>
          <Signed>Caleb Pierce — Uploaded in 2020</Signed>
        </WrapTestimonial>
      </FoldFourteen>


      <FoldFifteen>
        <ImageBoy style ={ { backgroundImage: `url(${imageBoy})` } }/>
        <Forever>Preserve the people that are dearest to you, forever</Forever>
        <Button>UPLOAD NOW</Button>
      </FoldFifteen>

      <FoldSixteen>
        <HomeFooter />
      </FoldSixteen>

    </Body>
  )
}

export default Homepage

const Body = styled.div`
  width: 100%;
  /* height:10438px; */
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
const Image = styled.img`
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
const Slogan = styled.h1`
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
  width: 300px;
`
const PillarName = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 12px;
`
const PillarDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`





// sixth fold — surfing
const FoldSix = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
`


// seventh fold — two employees
const FoldSeven = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`
const ContainerMind = styled.div`
  width: 100%;
  height: 463px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #F1F0EA;
  padding: 0 15% 0 7%;
  gap: 20%;
`
const WrapperMind = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
  gap:30px;
`
const TitleMind = styled.h1`
font-size: 50px;
font-weight: 400;
line-height: 65px;
letter-spacing: 0em;
text-align: left;
color: #837777;
`
const DescriptionMind = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #6D6466;
`
const ImageEmployees = styled.img`
`

// eigth fold — 3 more pillars
const FoldEight = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
`

// ninth fold — sleeper
const FoldNine = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid red;
  gap: 7%;
`
const SloganDream = styled.h1`
  font-size: 92px;
  border-radius: nullpx;
  color: #9F9F92;
  font-size: 60px;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
  width:27%;
`

// ninth fold — sleeper assist
const FoldTen = styled.div`  width: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid blue;
`

// eleventh fold 
const FoldEleven = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  gap: 40px;
`
const WrapTestimonial = styled.div`
  width: 510px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const Testimonial = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`
const Stars = styled.div`
  font-size: 20px;
`
const Signed = styled.div`
  color: #9F9F92
`

// twelfth fold
const FoldTwelve = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
  gap: 40px;
`
// thirteenth fold
const FoldThirteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  gap: 40px;
`
// fourteenth fold
const FoldFourteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
  gap: 40px;
`
// fifteenth fold
const FoldFifteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  position: relative;
`
const ImageBoy = styled.div`
  background-size: stretch;
  height: 637px;
  width: 100%;
  border: 2px solid red;
`
const Forever = styled.div`
  position: absolute;
  width: 389px;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
  color: #545F75;
  left: 70px;
`
const Button = styled.div`
  height: 61px;
  width: 249px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  font-variant: small-caps;
  color: #FFFFFF;
  background-color: #545F75;
  position: absolute;
  left: 70px;
  top: 500px;
`
// sixteenth fold
const FoldSixteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
`
