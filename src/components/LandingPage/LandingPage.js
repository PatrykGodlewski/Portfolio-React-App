import React, { useEffect, useRef, useState } from "react";
import { LandingPageStyled, HeadingElement } from "./LandingPage.styled";

const TEXT = "HELLO I'AM PATRYK";

export default function LandingPage() {
  const [headingHeight, setheadingHeight] = useState(0);
  const ref = useRef();
  useEffect(() => {
    setheadingHeight(ref.current.clientHeight);
  }, []);
  const makeHeading = (txt) => {
    const wordsArr = txt.split(" ");
    return wordsArr.map((item, index) => (
      <HeadingElement headingHeight={headingHeight} ref={ref} key={index}>
        {[...item].map((letter, index) => (
          <span key={index + "letter"} data-content={letter}>
            {letter}
          </span>
        ))}
      </HeadingElement>
    ));
  };

  return (
    <LandingPageStyled data-pagename={"main"}>
      {makeHeading(TEXT)}
    </LandingPageStyled>
  );
}
