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
      {/* image slide from left animation */}
      <Image
        src={imageSleepAssist}
        as={motion.img}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.8 }}
        variants={animateImageLeft}
      />
      <Box />
    </FoldTen>)
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
  height: 500px;
`
const Box = styled.div`
  width: 100%;
  height: 700px;
  position: absolute;
  z-index: -1;
  background: rgb(241,240,234);
  background: linear-gradient(0deg, rgba(241,240,234,1) 0%, rgba(255,255,255,1) 100%); 
  top: 50%;
  `