import styled from "styled-components";
import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;

`;

const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(63% 0, 100% 0, 100% 100%, 54% 100%);

  z-index: -1;
  background-color: crimson;
`;
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Intro />
        <IntroShape/>
      </Container>
    </div>
  );
}

export default App;
