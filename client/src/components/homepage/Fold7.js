// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// image imports
import imageEmployees from "../../assets/employees.png"

// component imports
import { animateText, animateImageRight } from "../AnimationHandlers";

const Fold7 = () => {
  return (
    <FoldSeven>
    <ContainerMind>
      <WrapperMind
        as={motion.div}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.8 }}
        variants={animateText}
      >
        <TitleMind>Your mind is in the best of hands</TitleMind>
        <DescriptionMind>Let us be your guide through the transition into a new life. Our employees, who we consider family, will be with you every step of the process. They will help you settled into the right spiritual mindset before initializing the upload.</DescriptionMind>
        <More>Find out more</More>
      </WrapperMind>
      <ImageEmployees src={imageEmployees}
        as={motion.img}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true, amount: 0.35 }}
        variants={animateImageRight}
      />
    </ContainerMind>
  </FoldSeven>
)
}

export default Fold7

// seventh fold — two employees
const FoldSeven = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContainerMind = styled.div`
  width: 100%;
  height: 463px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #F1F0EA;
`
const WrapperMind = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
  gap:30px;
  margin-left: 12%;
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
text-align: justify;
color: #6D6466;

`
const ImageEmployees = styled.img`
  margin-right: 12%;
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