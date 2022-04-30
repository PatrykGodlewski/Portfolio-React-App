import React, { useContext } from "react";
import { IndicatorStyled } from "./Indicator.styled";
import { Context } from "../../App";

function Indicator() {
  const { pagesInfo } = useContext(Context);

  return (
    <IndicatorStyled pagination={pagesInfo.currentPage}>
      <span className="scroll">SCROLL</span>
      <span className="line" />
    </IndicatorStyled>
  );
}

export default Indicator;
