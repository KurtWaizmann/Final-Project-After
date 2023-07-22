// package imports
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { AnimatePresence, motion } from 'framer-motion';

// animation import
import { pageTransition } from './AnimationHandlers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [videoEnd, setVideoEnd] = useState(false);
  const date = new Date();

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        variants={pageTransition}
      ></motion.div>
      <Wrapper
        as={motion.div}
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <AnimatedBox
          as={motion.div}
          whileHover={
            !videoEnd
              ? {
                  scale: 1.1,
                  transition: { duration: 1 },
                }
              : {}
          }
          exit={{
            scale: 1,
            transition: { duration: 1 },
          }}
          className={videoEnd ? 'gone' : 'appear'}
        >
          <div>
            <AnimatePresence>
              {videoEnd ? (
                <Message
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1 },
                  }}
                >
                  Join the <LinkMessage to={'/home'}>After </LinkMessage>
                  life.
                </Message>
              ) : (
                <motion.div
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                  key="video"
                >
                  <ReactPlayer
                    url="https://kurtwaizmann.wistia.com/medias/8iwibf7qp1"
                    style={{ borderRadius: '20px' }}
                    onEnded={() => setVideoEnd(true)}
                  />
                  <Copyright>
                    Ⓒ {date.getFullYear()} TrueNeural. All Rights Reserved.
                  </Copyright>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedBox>
      </Wrapper>
    </>
  );
};

export default Intro;

const Wrapper = styled.div`
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Copyright = styled.div`
  margin-top: 5px;
  font-size: 0.5rem;
  text-align: end;
  opacity: 0.5;
  width: 40rem;
`;

const AnimatedBox = styled.div`
  &.appear {
    height: 29rem;
    width: 46rem;
    border: 1px solid black;
    padding: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &.gone {
    border-color: none;
    box-shadow: none;
  }
`;

const Message = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
`;

const LinkMessage = styled(Link)`
  font-family: 'Baskervville', serif;
  font-size: 1.6rem;
  line-height: 2rem;
  text-decoration: none;
  color: black;
`;
