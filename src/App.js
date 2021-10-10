import styled from 'styled-components';
import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

const Container = styled.div`
  height: 100vh;

`
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar/>
        <Intro/>
      </Container>
    </div>
  );
}

export default App;
