// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// image imports
import imageTestimonail4 from "../../assets/testimonial-4.png"

// component imports
import { animateText, animateImageLeft } from "../AnimationHandlers";


const Fold14 = () => {
  return (
    <FoldFourteen>
      <motion.img src={imageTestimonail4}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.8 }}
        variants={animateImageLeft}
      />
      <WrapTestimonial
        as={motion.div}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.8 }}
        variants={animateText}
      >
        <Stars>★★★★★</Stars>
        <Testimonial>After getting married, me and my wife moved into After. Sadly, we divorced within the year as my wife had trouble adapting. But there’s love all around! I was even able to make the woman of my dreams, with all the best features  and a wonderful personality. And let me tell you, Kiri is as real as any woman! We just connect on such a level that me and my ex-wife (rip) never could. I thank every day that I got on the path that led me to my precious Kiri...</Testimonial>
        <Signed>Caleb Pierce — Uploaded in 2020</Signed>
      </WrapTestimonial>
    </FoldFourteen>
  )
}

export default Fold14

// fourteenth fold
const FoldFourteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid blue; */
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