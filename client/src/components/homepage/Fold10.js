// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// component imports
import { animateImageLeft } from "../AnimationHandlers";

// image imports
import imageSleepAssist from "../../assets/sleeper-assist.png"

const Fold10 = () => {
  return (
      <FoldTen>
        <Image 
          src={imageSleepAssist}
          as={motion.img}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true, amount: 0.8 }}
          variants={animateImageLeft}
        />
        <Box />
      </FoldTen>  )
}

export default Fold10

// tenth fold — sleeper assist
const FoldTen = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`
const Image = styled.img`
  width: 95%;
`
const Box = styled.div`
  width: 100%;
  height: 700px;
  position: absolute;
  z-index: -1;
  background-color: #F1F0EA;
  top: 50%;
  `