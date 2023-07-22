// package imports
import styled from 'styled-components';
import { motion } from 'framer-motion';

// component imports
import HomeNav from './HomeNav';
import { animateIntro, animateIntro2, animateText } from '../AnimationHandlers';

// import icons
import { AiOutlineDown } from 'react-icons/ai';

const Fold1 = () => {
  const arr = [...Array(10)];

  return (
    <>
      {/* Navbar wrapped in animated div — only for category buttons. "After" is set in App.js */}
      <motion.div initial={'start'} animate={'end'} variants={animateIntro2}>
        <HomeNav />
      </motion.div>

      {/* fold wrapper with fade in animation */}
      <FoldOne
        as={motion.div}
        initial={'start'}
        animate={'end'}
        variants={animateIntro}
      >
        {/* Intro text */}
        <IntroWrap>
          <TitleContainer>
            {arr.map((el, i) => {
              const delay = i * 0.1;
              return (
                <Title
                  as={motion.h1}
                  initial={{
                    opacity: 0,
                    translateY: -100,
                    translateX: 10 * i,
                  }}
                  animate={{
                    opacity: [0, 1],
                    color: [
                      'hsl(304.12, 70.93%, 50.27%, 1)',
                      'hsla(168, 100%, 50%, 1)',
                      'hsla(357, 100%, 50%, 1)',
                      'hsla(300, 95%, 48%, 1)',
                      'hsla(278, 40%, 48%, 1)',
                      'hsla(35, 100%, 50%, 1)',
                      'hsla(153, 100%, 50%, 1)',
                      'hsla(240, 2.92%, 27.45%, 1)',
                    ],
                    translateY: 0,
                    translateX: 0,
                    transition: {
                      duration: 2,
                      delay: delay,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  Upload your troubles away.
                </Title>
              );
            })}
            <Title
              as={motion.h1}
              className="back-title"
              animate={{
                opacity: 1,
                color: [
                  'hsla(168, 100%, 50%, 1)',
                  'hsla(357, 100%, 50%, 1)',
                  'hsla(300, 95%, 48%, 1)',
                  'hsla(278, 40%, 48%, 1)',
                  'hsla(35, 100%, 50%, 1)',
                  'hsla(153, 100%, 50%, 1)',
                  'hsla(57, 95%, 48%, 1)',
                  'hsla(221, 95%, 48%, 1)',
                ],
                transition: {
                  duration: 10,
                  delay: 1,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              Upload your troubles away.
            </Title>
          </TitleContainer>
          <SubHeader>INTO A WORLD DESIGNED FOR YOU</SubHeader>
          <Description>
            Begin your journey towards a new life full of richness and beauty.
            Shed the toubles of the past and upload yourself into a world
            designed by the finest minds to be as enriching as ever experienced.
            Come join us today in our digital paradise.
          </Description>
        </IntroWrap>

        {/* Arrow animation wrapping the arrow itself... not sure it's working though */}
        <ArrowWrap
          as={motion.div}
          initial={'start'}
          whileInView={'end'}
          viewport={{ once: false, amount: 0.4 }}
          variants={animateText}
        >
          <StyledArrow />
        </ArrowWrap>
      </FoldOne>
    </>
  );
};

export default Fold1;

const FoldOne = styled.div`
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 736px;
  gap: 34px;
`;
const Title = styled.h1`
  font-size: 92px;
  border-radius: nullpx;
  color: #9f9f92;
  font-size: 60px;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0px;
  position: absolute;
  top: -3rem;
  &.back-title {
    top: -2.88rem;
    left: -3px;
    color: red;
    z-index: -10;
  }
`;

const SubHeader = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  color: #6d6466;
`;
const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #6d6466;
  margin-bottom: 40px;
`;
const StyledArrow = styled(AiOutlineDown)`
  font-size: 50px;
  bottom: 20px;
  color: #9f9f92;
`;
const ArrowWrap = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 60px;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
`;
