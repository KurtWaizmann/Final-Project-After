// package imports
import styled from "styled-components"
import { motion } from "framer-motion";

// component imports
import Fold1 from "./Fold1";
import Fold2 from "./Fold2";
import Fold3 from "./Fold3";
import Fold4 from "./Fold4";
import Fold5 from "./Fold5";
import Fold6 from "./Fold6";
import Fold7 from "./Fold7";
import Fold8 from "./Fold8";
import Fold9 from "./Fold9";
import Fold10 from "./Fold10";
import Fold11 from "./Fold11";
import Fold12 from "./Fold12";
import Fold13 from "./Fold13";
import Fold14 from "./Fold14";
import Fold15 from "./Fold15";
import HomeFooter from "./HomeFooter"

// animation import
import { pageTransition } from "../AnimationHandlers";


const Homepage = () => {

  return (
    
    // wrapper containing each "fold" component and footer 
    // ( HomeNav in contained is in Fold1 )
    <Body
      as={motion.div}
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Fold1 />
      <Fold2 />
      <Fold3 />
      <Fold4 />
      <Fold5 />
      <Fold6 />
      <Fold7 />
      <Fold8 />
      <Fold9 />
      <Fold10 />
      <Fold11 />
      <Fold12 />
      <Fold13 />
      <Fold14 />
      <Fold15 />
      <HomeFooter />
    </Body>
  )
}

export default Homepage

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
