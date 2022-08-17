// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// component imports
import { animateText, animateImageLeft } from "../AnimationHandlers";

// image imports
import imageSleeper from "../../assets/sleeper.png"

const Fold9 = () => {
  return (
      <FoldNine>
        {/* image slide from left animation */}
        <motion.img src={imageSleeper}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true, amount: 0.7 }}
          variants={animateImageLeft}
        />
        
        {/* fade-in text animation */}
        <SloganDream
          as={motion.h1}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true, amount: 0.8 }}
          variants={animateText}
        >Drift into a Lovely Dream</SloganDream>
      </FoldNine>
  )
}

export default Fold9

// ninth fold — sleeper
const FoldNine = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
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