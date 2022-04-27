import React from "react";
import { DisplayPagesStyled } from "./DisplayPages.styled";
import LandingPage from "../LandingPage/LandingPage";

export default function DisplayPages() {
  return (
    <DisplayPagesStyled>
      <LandingPage />
      <LandingPage />
    </DisplayPagesStyled>
  );
}
