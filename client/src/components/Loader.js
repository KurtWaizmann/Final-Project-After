import styled from "styled-components"
import { motion } from "framer-motion"

const Loader = () => {

    const loadingContainer = {
        start: {
            transition: {
                staggerChildren: 0.1
            }
        },
        end: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const loadingCircle = {
        start: {
            y: "0%"
        },
        end: {
            y: "100%"
        }
    }

    const circleTransition = {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    }

    return (
        <Container
            as={motion.div}
            variants={loadingContainer}
            initial="start"
            animate="end"
        >
            <Circle
                as={motion.div}
                variants={loadingCircle}
                transition={circleTransition}
            />
            <Circle
                as={motion.div}
                variants={loadingCircle}
                transition={circleTransition}
            />
            <Circle
                as={motion.div}
                variants={loadingCircle}
                transition={circleTransition}
            />
        </Container>
    )
}

export default Loader

const Container = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
`
const Circle = styled.span`
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: black;
`


