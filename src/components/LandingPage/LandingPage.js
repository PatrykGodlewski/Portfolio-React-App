import React, { useEffect, useRef, useState } from "react";
import { LandingPageStyled, HeadingElement } from "./LandingPage.styled";

const MAIN_TEXT = "HELLO I_AM";
const ANIMATED_TEXT = ["PATRYK", "DEVELOPER", "DESIGNER", "GAMER"];

const CLASSES = ["show-front", "show-back", "show-top", "show-bottom"];

export default function LandingPage({ pagename }) {
  const refAnim = useRef();
  const [nth, setNth] = useState({ current: 1, prev: 3 });
  const [animation, setAnimation] = useState(false);

  const animateMyHeader = () => {
    const textContainer = refAnim.current;

    textContainer.classList.remove(CLASSES[nth.prev]);
    textContainer.classList.add(CLASSES[nth.current]);

    if (nth.current === 3) CLASSES.reverse();

    setNth((nthPrev) => {
      return {
        current: nthPrev.current >= 3 ? 1 : ++nthPrev.current,
        prev: 1,
      };
    });
  };

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
              {text}
            </div>
          ))}
        </HeadingElement>
      );
    };
    const page = [...heading, subHeading()];
    return page;
  };

  return (
    <LandingPageStyled data-pagename={pagename}>
      {makeHeading(MAIN_TEXT, ANIMATED_TEXT)}
    </LandingPageStyled>
  );
}
