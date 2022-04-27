import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  RATIO: 64 * 1.5,
  textFaded: "rgba(255, 255, 255, 0.6)",
  colors: {
    white: "white",
    fadedWhite: "rgba(255, 255, 255, 0.6)",
    semiWhite: "rgba(255, 255, 255, 0.8)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
