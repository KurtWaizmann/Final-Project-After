// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// image imports
import imageTestimonail3 from "../../assets/testimonial-3.png"

// component imports
import { animateText, animateImageRight } from "../AnimationHandlers";

const Fold13 = () => {
  return (
    <FoldThirteen>
    <WrapTestimonial
      as={motion.div}
      initial={"start"}
      whileInView={"end"}
      viewport={{ once: true, amount: 0.9 }}
      variants={animateText}
    >
      <Stars>★★★★★</Stars>
      <Testimonial>Honestly, I was so fortunate to be able leave that so-called “real” world. Let me remind you, a world ravaged by global warming, economic crises, endless wars, and so much more hurt. I remember struggling for simple things like finding fresh fruit when all the groceries stores were empty, or hiding indoors from the yearly pandemic. In the After, it’s been nothing but beautiful weather and happy moments. Truly a paradise! </Testimonial>
      <Signed> Suzette Aguilar — Uploaded in 2022</Signed>
    </WrapTestimonial>
    <motion.img src={imageTestimonail3}
      initial={"start"}
      whileInView={"end"}
      viewport={{ once: true, amount: 0.9 }}
      variants={animateImageRight}
    />
  </FoldThirteen>
  )
}

export default Fold13

// thirteenth fold
const FoldThirteen = styled.div`
  width: 100%;
  height: 525px;
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