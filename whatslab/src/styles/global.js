import { createGlobalStyle } from 'styled-components';

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

.page-container {
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-rows: 5vw 1fr 5vw;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 95%;
    box-shadow: 1px 1px 10px #a39d9d34;
}

@media screen and (max-width: 700px) {
  body {
    min-width: 400px;
  }
  .page-container {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: 60px 67vh;
    }
  header {
    height: 60px;
  }
  main {
    height: 80vh;
    padding-bottom: 50px;
    box-sizing: border-box;
  }

  header,
  main,
  footer,
  body {
    min-width: 400px;
  }
}



`;
export default GlobalStyle;