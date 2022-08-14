// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// image imports
import imageTestimonail2 from "../../assets/testimonial-2.png"

// component imports
import { animateText, animateImageLeft } from "../AnimationHandlers";


const Fold12 = () => {
  return (
    <FoldTwelve>
    <motion.img src={imageTestimonail2}
      initial={"start"}
      whileInView={"end"}
      viewport={{ once: true, amount: 0.9 }}
      variants={animateImageLeft}
    />
    <WrapTestimonial
      as={motion.div}
      initial={"start"}
      whileInView={"end"}
      viewport={{ once: true, amount: 0.9 }}
      variants={animateText}
    >
      <Stars>★★★★★</Stars>
      <Testimonial>I was dying from cancer with only a few months to live when I discovered After. What a miracle. I’ve left my diseased body behind for everlasting vitality. I only wish I could get my loved ones to join me. I guess they will someday :)</Testimonial>
      <Signed>Jordan Hutchinson — Uploaded in 2020</Signed>
    </WrapTestimonial>
  </FoldTwelve>
  )
}

export default Fold12

// twelfth fold
const FoldTwelve = styled.div`
  width: 100%;
  height: 525px;
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