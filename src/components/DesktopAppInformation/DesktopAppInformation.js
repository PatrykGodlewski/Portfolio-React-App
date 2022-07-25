import React from "react";
import { DesktopAppInformationStyled } from "./DesktopAppInformation.styled";

const DesktopAppInformation = () => {
  return (
    <DesktopAppInformationStyled>
      <span>
        Best experience on desktop wider than{" "}
        <span style={{ color: "red" }}>950px</span>
      </span>
      <span style={{ textDecoration: "underline" }}>
        mobile version is currently under development 👷
      </span>
    </DesktopAppInformationStyled>
  );
};

export default DesktopAppInformation;
