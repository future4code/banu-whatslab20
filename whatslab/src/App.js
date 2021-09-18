import Principal from "./pages/Principal";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #141f29;
  height: 50vh;
  box-sizing: border-box;
}
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Principal />
    </>
  );
}

export default App;
