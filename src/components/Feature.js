import React from "react";
import styled from "styled-components";
import app from "../img/app.png";
import Animated from "./Animated";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 80%;
`;
const Title = styled.span`
  font-size: 70px;
  text-transform: capitalize;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

export default function Feature() {
  return (
    <Container>
      <Left>
        <Image src={app} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Description>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieving
          marketing goals, and look fantastic.
        </Description>
        <Description>
          We care your business and gurantee you to achieve marketing goals
        </Description>
        <Button>Learn More</Button>
      </Right>
      <Animated />
    </Container>
  );
}
