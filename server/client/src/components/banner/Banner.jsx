
import { Box, Typography, styled } from "@mui/material"

const Image = styled(Box)`
    background: url(https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%);
    }
`;


const Heading = styled(Typography)`
    font-size:70px;
    color: #FFFFFF;
    line-height: 1;
`
const SubHeading= styled(Typography)`
    font-size:20px;
    background: #FFFFFF;
`

const Banner = ()=>{

    return(
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Journey of Words</SubHeading>
            <Typography></Typography>
        </Image>
    )
}

export default Banner