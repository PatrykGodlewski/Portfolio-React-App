import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*, *:hover{
  cursor: none !important;

}
html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
}

canvas {
  position: fixed;
  inset: 0;
  z-index: -1;
}

body {
  background-color: #1e1e1e;
}
  `;
export default GlobalStyle;
