import React, { useState } from 'react'
import styled from 'styled-components'
import how from '../img/app.png';
import { MiniCard } from './MiniCard';
import play from '../img/play.png';
import video from "../img/video.mp4"

const Container = styled.div`
    display: flex;
    height: 100%;
`;
const Left = styled.div`
    width: 50%;
    position: relative;
`;
const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
    margin-left: 70px;
    
`;

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`
const Right = styled.div`
    width: 50%;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`

`;
const Description = styled.h1`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

export default function Service() {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Left>
                <Image open={open} src={how} />
                <Video open={open} autoplay loop controls src={video} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>
                        Simple process to start
                    </Title>
                    <Description>
                        We provide digital experience services to startups and small business to looking for a partner of their digital media, deign & development, lead generation and communications requirements. We work with you, not for you. Although we have a great resources.
                    </Description>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={play} />
                        How It Works
                    </Button>
                </Wrapper>
            </Right>
        </Container>
    )
}
