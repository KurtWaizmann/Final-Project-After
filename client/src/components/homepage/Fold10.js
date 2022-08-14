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
        <motion.img src={imageSleepAssist}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true, amount: 0.9 }}
          variants={animateImageLeft}
        />
      </FoldTen>  )
}

export default Fold10

// tenth fold — sleeper assist
const FoldTen = styled.div`  width: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`