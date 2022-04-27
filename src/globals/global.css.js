import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
}

body {
  background-color: rgb(30,30,30);
}
  `;
export default GlobalStyle;
