// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// animation imports
import { sentenceAnimation, letterAnimation } from "./AnimationHandlers";


const Summary = () => {
    const line1 = "Welcome Henry to your new life. It's a pleasure to have you join our family. According to our assessment... you are 26 years old, and your current profession is tax-collector. You are currently balding, and are terribly self-conscious about it. You have a weird habit of picking your ear for wax. And you have a pet chinchinla, which you've called Pete."
    const line2 = "It's a pleasure to have you join our family."
    const line3 = "According to our assessment... you are 26 years"
    const line4 = "old, and your current profession is tax-collector."
    const line5 = "You are currently balding, and are terribly self-"
    const line6 = "conscious about it. You have a weird habit of picking"
    const line7 = "your ear for wax. And you have a pet chinchinla, which"
    const line8 = "you've called Pete."



    return (
            <Text as={motion.div} initial="hidden" animate="visible" variants={sentenceAnimation}>
                {line1.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letterAnimation}>{char}</motion.span>
                    )
                })}
                <br />


                {/* You are a {answers.q1} and {answers.q2} man. But fortunetaly, you are also {answers.q3}. */}
            </Text>
    )
}

export default Summary

const Text = styled.div`
    width: 600px;
    word-wrap: normal;
    font-size: 25px;
    font-weight: 100;
    line-height: 40px;
`