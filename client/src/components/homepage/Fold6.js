// package imports
import styled from "styled-components"
import { Parallax } from 'react-scroll-parallax';

// image imports
import imageSurfing from "../../assets/surfing.png"

const Fold6 = () => {
    return (
        <FoldSix>
            <Image src={imageSurfing} />
            <Slogan speed={-10}>A world for you to reshape</Slogan>
        </FoldSix>)
}

export default Fold6

// sixth fold — surfing
const FoldSix = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
`
const Slogan = styled(Parallax)`
  font-size: 60px;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  width: 100%;
  text-align: center;
  font-family: 'Baskervville', serif;
  text-align: center;
  color: #FFFFFF;
  position: absolute;
`