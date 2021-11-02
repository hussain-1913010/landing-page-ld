import styled, { css } from "styled-components";
import "./App.css";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  /* width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; */
  ${Shape}

  clip-path: polygon(63% 0, 100% 0, 100% 100%, 54% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}

  clip-path: polygon(0 0, 54% 0, 37% 100%, 0% 100%);
  background-color: pink;
`;


const ServiceShape = styled.div`
  ${Shape}

  clip-path: polygon(0 0, 37% 0, 37% 100%, 0% 100%);
  background-color: #f88497;
`;


const PriceShape = styled.div`
  ${Shape}

  clip-path: polygon(37% 0, 100% 0, 100% 100%, 67% 100%);
  background-color: crimson;
`;


function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape/>
      </Container>

      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>

      <Container>
        <Service/>
        <ServiceShape/>
      </Container>

      <Container>
        <Price/>
        <PriceShape/>
      </Container>

      <Container>
        <Contact/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
