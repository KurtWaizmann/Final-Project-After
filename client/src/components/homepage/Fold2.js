// package imports
import styled from "styled-components"

// image imports
import imageBeach from "../../assets/man-walking-on-beach.png"

const Fold2 = () => {
    return (
        <FoldTwo>
            <Image src={imageBeach} />
        </FoldTwo>
    )
}

export default Fold2;

// Second Fold 
const FoldTwo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
`