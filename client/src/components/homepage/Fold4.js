// package imports
import styled from "styled-components"
import { Parallax } from 'react-scroll-parallax';

// image imports
import imageMountains from "../../assets/mountains.png"

const Fold4 = () => {
    return (
        <FoldFour>
            <Image src={imageMountains} />
            <Slogan speed={20}>Why feel bad when you can feel good?</Slogan>
        </FoldFour>)
}

export default Fold4

// Fourth Fold 
const FoldFour = styled.div`
  width: 100%;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const Image = styled.img`
  width: 100%;
`
