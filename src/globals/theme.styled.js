import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  RATIO: 64 * 1.5,
  textFaded: "rgba(255, 255, 255, 0.6)",
  colors: {
    white: "white",
    fadedWhite: "rgba(255, 255, 255, 0.6)",
    semiWhite: "rgba(255, 255, 255, 0.8)",
    background: "rgb(30,30,30)",
    backgroundFaded: "rgb(120,120,120)",
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
