// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// component imports
import { animateText } from "../AnimationHandlers";

const Fold8 = () => {
  return (
      <FoldEight>
        <WrapperPillars
          as={motion.div}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ staggerChildren: 0 }}
        >
          <Pillar
            as={motion.div}
            variants={animateText}
          >
            <PillarName>Belonging</PillarName>
            <PillarDescription>Develop profound relationships with other avatars who will value you for you.</PillarDescription>
          </Pillar>
          <Pillar
            as={motion.div}
            variants={animateText}
          >
            <PillarName>Transcendence</PillarName>
            <PillarDescription>Break apart the old paradigms of what it means to live a life, and follow ever life paths without fear or regret.</PillarDescription>
          </Pillar>
          <Pillar
            as={motion.div}
            variants={animateText}
          >
            <PillarName>Storytelling</PillarName>
            <PillarDescription>We are the authors of our lives, so create the narrative that brings clarity and reenforces your purpose.</PillarDescription>
          </Pillar>
        </WrapperPillars>
      </FoldEight>
  )
}

export default Fold8

// eigth fold — 3 more pillars
const FoldEight = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WrapperPillars = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8%;
`
const Pillar = styled.div`
  width: 300px;
`
const PillarName = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 12px;
`
const PillarDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`