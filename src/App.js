//package imports
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

//component imports
import { Heading } from './components/Heading/Heading';
import { Home } from './pages/Home/Home';
import { Locations } from './pages/Locations/Locations';
import { Ghosts } from './pages/Ghosts/Ghosts';
import { Equipment } from './pages/Equipment/Equipment';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  background: linear-gradient(180deg, #12202b 0%, #030b10 100%);
  min-height: 100vh;
  box-sizing: border-box;
`;
const Body = styled.div`
  padding-bottom: 35px;
  flex: 1 0 auto;
`;

function App() {
  return (
    <MainContainer>
      <Heading />
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/ghosts" element={<Ghosts />} />
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
      </Body>
    </MainContainer>
  );
}

export default App;
