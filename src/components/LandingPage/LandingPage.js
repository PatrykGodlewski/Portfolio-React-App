import React, { useEffect, useRef, useState } from "react";
import { LandingPageStyled, HeadingElement } from "./LandingPage.styled";

const MAIN_TEXT = "HELLO I_AM";
const ANIMATED_TEXT = ["PATRYK", "DEVELOPER", "DESIGNER", "GAMER"];

export default function LandingPage() {
  const refAnim = useRef();
  useEffect(() => {}, []);
  const makeHeading = (staticText, animatedText) => {
    const wordsArr = staticText.split(" ");
    const heading = wordsArr.map((item, index) => {
      item = item.replace("_", " ");
      return (
        <HeadingElement key={index}>
          {[...item].map((letter, index) => (
            <span key={index + "letter"} data-content={letter}>
              {letter}
            </span>
          ))}
        </HeadingElement>
      );
    });

    const subHeading = () => {
      return (
        <HeadingElement ref={refAnim} animated key={"animated-container"}>
          {animatedText.map((text, index) => (
            <div key={index} className="animatedHeading">
              {[...text].map((letter, index) => (
                <span key={index + "animatedLetter"} data-content={letter}>
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </HeadingElement>
      );
    };

    heading.push(subHeading());
    return heading;
  };

  return (
    <LandingPageStyled data-pagename={"main"}>
      <div>
        <button
          style={{ cursor: "pointer", padding: "30px" }}
          onClick={() => console.log(refAnim)}
        >
          front
        </button>
        <button>bottom</button>
        <button>back</button>
        <button>top</button>
      </div>
      {makeHeading(MAIN_TEXT, ANIMATED_TEXT)}
    </LandingPageStyled>
  );
}
