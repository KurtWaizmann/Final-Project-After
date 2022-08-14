// package imports
import styled from "styled-components";
import { motion } from "framer-motion";

// image imports
import imageCEO from "../../assets/ceo-portrait.png";

// component imports
import { animateText, animateImageRight } from "../AnimationHandlers";

const Fold3 = () => {
    return (
        <FoldThree>
            <WrapperCeo>
                <CEOText
                    as={motion.div}
                    initial={"start"}
                    whileInView={"end"}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={animateText}
                >
                    <Leader>Our Leader</Leader>
                    <InnerWrapCEO>
                        <TitleCEO>
                            From the spark of a glorious mind is born a revolution
                        </TitleCEO>
                        <DecriptionTwo>
                            From humble beginnings, TrueNeural CEO Alan Rowe gathered the best
                            people in the industry to build a new revolutionary technology.
                            Others had deemed it impossible, but he chose to invest his own
                            life to create a new and better one for others to enjoy. As luck
                            would have it, he succeeded.
                        </DecriptionTwo>
                        <More>Find out more</More>
                    </InnerWrapCEO>
                </CEOText>
                <ImageTwo
                    src={imageCEO}
                    as={motion.img}
                    initial={"start"}
                    whileInView={"end"}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={animateImageRight}
                />
            </WrapperCeo>
        </FoldThree>
    );
};

export default Fold3;

// Third Fold
const FoldThree = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;
const WrapperCeo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 8%;
`;
const CEOText = styled.div`
  display: flex;
  gap: 8%;
`;
const Leader = styled.div`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d6466;
  display: flex;
  width: 85px;
`;
const InnerWrapCEO = styled.div`
  width: 518px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TitleCEO = styled.h1`
  font-size: 92px;
  border-radius: nullpx;
  color: #9f9f92;
  font-size: 60px;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
`;
const DecriptionTwo = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d6466;
`;
const More = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #6d6466;
  cursor: pointer;
`;
const ImageTwo = styled.img`
  margin-top: 20px;
  width: 342px;
  height: 342px;
`;
