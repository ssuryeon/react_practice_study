import Content from './Components/Content';
import {styled, createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Content />
      </Wrapper>
    </>
  )
}

export default App;
