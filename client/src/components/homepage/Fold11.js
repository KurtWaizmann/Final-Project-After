// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// image imports
import imageTestimonail1 from "../../assets/testimonial-1.png"

// component imports
import { animateText, animateImageRight } from "../AnimationHandlers";

const Fold11 = () => {
  return (
    <>
      <SectionTitle>Satisfied Customers</SectionTitle>
    <FoldEleven>
      <WrapTestimonial
        as={motion.div}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.9 }}
        variants={animateText}
      >
        <Stars>★★★★★</Stars>
        <Testimonial>At the age of 78, I signed up to After.  I was quite resistant at first. But my son wore me out. I guess I liked this option better than being sent into a retirement home. And thank god for my son’s insistance. Now I’m 50 years younger, verile, and full of energy. And after seeing all the fun I was having, my wife soon joined and she’s now in her 20s! What a georgeous thing.</Testimonial>
        <Signed>Richie Guzman — Uploaded in 2021</Signed>
      </WrapTestimonial>
      <motion.img src={imageTestimonail1}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.9 }}
        variants={animateImageRight}
      />
    </FoldEleven>
    </>
  )
}

export default Fold11

// eleventh fold 
const SectionTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  text-align: left;
  padding-left: 40px;
  font-size: 92px;
  border-radius: nullpx;
  color: #9F9F92;
  font-size: 60px;
  font-weight: 400;
`
const FoldEleven = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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