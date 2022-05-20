import React from "react";
import { AboutStyled } from "./About.styled";

export default function About() {
  return (
    <AboutStyled>
      <div>
        <h1>Adres</h1>
        <p>40 059 Katowice ul.xxxxxxx</p>
      </div>
      <div>
        <h1>Kontakt</h1>
        <p>tel: xxx xxx xxx</p>
        <p>email: xxxx@xxxx.xx</p>
      </div>
    </AboutStyled>
  );
}
