import React from "react";
import { IndicatorStyled } from "./Indicator.styled";

export default function Indicator() {
  return (
    <IndicatorStyled>
      <span className="scroll">SCROLL</span>
      <span className="line" />
    </IndicatorStyled>
  );
}
