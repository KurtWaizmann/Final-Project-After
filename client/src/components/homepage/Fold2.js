// package imports
import styled from "styled-components"

// image imports
import imageBeach from "../../assets/man-walking-on-beach.png"

//  Just the image of the dude on the beach
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
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
`