// package imports
import styled from "styled-components"
import { motion, Variants } from "framer-motion";

// image imports
import imageBoy from "../../assets/littleboy.png"

// component imports
import { animateText } from "../AnimationHandlers";


const Fold15 = () => {
  return (
    <FoldFifteen>
    <ImageBoy style={{ backgroundImage: `url(${imageBoy})` }}>
      <Forever>Preserve the people that are dearest to you, forever</Forever>
      <Button
        as={motion.button}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 1 }}
        variants={animateText}
      >UPLOAD NOW</Button>
    </ImageBoy>
  </FoldFifteen>  )
}

export default Fold15

// fifteenth fold
const FoldFifteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  position: relative;
`
const ImageBoy = styled.div`
  background-size: stretch;
  height: 637px;
  width: 100%;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 50px;
  padding-left: 100px;
`
const Forever = styled.div`
  width: 389px;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
  color: #545F75;
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
`