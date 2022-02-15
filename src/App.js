import './App.css';
import { Heading } from './components/Heading/Heading'
import { Home } from "./pages/Home/Home";
import  styled  from "styled-components"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #A9D6E5;
  height: 100vh;
  width: 100%;
`

function App() {
  return (
    <PageContainer >
      <Heading />
      <Home/>
    </PageContainer>
  );
}

export default App;
