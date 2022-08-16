// import package
import styled from "styled-components"

//import icon
import { TbWorldUpload } from "react-icons/tb";

const Countdown = () => {
    // Date until upload
    const now = new Date().getTime();
    const countdown = new Date("Sep 22, 2022 12:00:00").getTime();
    const timeleft = countdown - now;
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));



    return (
        <UploadDate><StyledTbWorldUpload /><UploadSpan1>Upload in</UploadSpan1> <UploadSpan2>{days} days</UploadSpan2><UploadSpan3> {hours} hours</UploadSpan3></UploadDate>
    )
}

export default Countdown

const UploadDate = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    bottom: 15px;
`
const UploadSpan1 = styled.span`
    font-weight: 800;
`
const UploadSpan2 = styled.span`
    font-weight: 800;
    color: green;
`
const UploadSpan3 = styled.span`
    font-weight: 800;
    color: blue;
`
const StyledTbWorldUpload = styled(TbWorldUpload)`
    transform: scale(1.8);
    margin-right: 10px;
`