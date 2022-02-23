//package imports
import { Routes, Route } from 'react-router-dom';
import  styled  from "styled-components"

//component imports
import { Heading } from './components/Heading/Heading';
import { Home } from "./pages/Home/Home";
import { Locations } from './pages/Locations/Locations';
import { Ghosts } from './pages/Ghosts/Ghosts';
import { Equipment } from './pages/Equipment/Equipment';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  background: linear-gradient(180deg, #12202B 0%, #030B10 100%);
  min-height: 100vh;
  box-sizing: border-box;
`

function App() {
  return (
    <PageContainer >
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/ghosts" element={<Ghosts />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </PageContainer>
  );
}

export default App;
