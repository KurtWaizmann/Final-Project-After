// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// component imports
import { animateText } from "../AnimationHandlers";

const Fold5 = () => {
    return (
        < FoldFive >
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
                    <PillarName>Positivity</PillarName>
                    <PillarDescription>Structured to minimize negative emotion and instead promote positivity and happiness.</PillarDescription>
                </Pillar>
                <Pillar
                    as={motion.div}
                    variants={animateText}
                >
                    <PillarName>Meaning</PillarName>
                    <PillarDescription>Algoriths to monitor and impart insightful meaning to every piece of your new existance.</PillarDescription>
                </Pillar>
                <Pillar
                    as={motion.div}
                    variants={animateText}
                >
                    <PillarName>Freedom</PillarName>
                    <PillarDescription>Boundaries are broken with a world that’s yours to fully explore and create.</PillarDescription>
                </Pillar>
            </WrapperPillars>
        </FoldFive >
    )
}

export default Fold5

// fifth fold
const FoldFive = styled.div`
  width: 100%;
  height: 70vh;
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