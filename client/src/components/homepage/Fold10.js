// package imports
import styled from 'styled-components';
import { motion } from 'framer-motion';

// component imports
import { animateImageLeft } from '../AnimationHandlers';

// image imports
import imageSleepAssist from '../../assets/sleeper-assist.png';

const Fold10 = () => {
  const arr = [...Array(8)];

  return (
    <FoldTen>
      {/* image slide from left animation */}
      <Image
        src={imageSleepAssist}
        as={motion.img}
        initial={'start'}
        whileInView={'end'}
        viewport={{ once: true, amount: 0.8 }}
        variants={animateImageLeft}
      />
      {arr.map((el, i) => {
        const delay = i * 0.1;
        const positionX = Math.ceil(Math.random() * 50);
        const positionY = Math.ceil(Math.random() * 50);

        return (
          <Warning
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
              translateX: positionX,
              translateY: positionY,
              skewX: positionX,
              skewY: -positionY,
              transition: {
                duration: 1,
                delay: 2 + delay,
                // repeat: Infinity,
                // ease: 'linear',
              },
            }}
          >
            HeLp mE
          </Warning>
        );
      })}
      <Box />
    </FoldTen>
  );
};

export default Fold10;

// tenth fold — sleeper assist
const FoldTen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;
const Image = styled.img`
  height: 500px;
`;
const Box = styled.div`
  width: 100%;
  height: 700px;
  position: absolute;
  z-index: -1;
  background: rgb(241, 240, 234);
  background: linear-gradient(
    0deg,
    rgba(241, 240, 234, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  top: 50%;
`;

const Warning = styled.div`
  font-size: 1.3rem;
  color: black;
  font-family: 'Cutive Mono', monospace;
  position: absolute;
  right: 14rem;
  bottom: 15rem;
`;
