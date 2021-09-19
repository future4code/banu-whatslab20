import Principal from "./pages/Principal";
import { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";

const animateEntrance = keyframes`
0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #141f29;
  height: 100vh;
  box-sizing: border-box;
  animation-name: ${animateEntrance};
  animation-duration: 1s;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Principal />
    </>
  );
}

export default App;
