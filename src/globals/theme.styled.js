import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  RATIO: 64 * 1.5,
  textFaded: "rgba(255, 255, 255, 0.6)",
  fontWeight: {
    regular: 300,
    semiBold: 600,
    bold: 900,
  },
  colors: {
    white: "white",
    fadedWhite: "rgba(255, 255, 255, 0.6)",
    semiWhite: "rgba(255, 255, 255, 0.8)",
    background: "rgb(30,30,30)",
    backgroundDimed: "rgba(50,50,50,0.8)",
    backgroundFaded: "rgb(120,120,120)",
    btnActive: "rgb(160,160,160)",
  },
  menuVars: {
    height: "4px",
    width: "35%",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
