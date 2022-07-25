import React, { useContext, useEffect, useRef } from "react";
import { LandingPageStyled, HeadingElement } from "./LandingPage.styled";
import { gsap, Expo, Power1 } from "gsap";
import { Context } from "../../App";

const MAIN_TEXT = "HELLO I_AM";
const ANIMATED_TEXT = ["PATRYK", "DEVELOPER", "DESIGNER", "GAMER"];

function LandingPage({ pagename }) {
  const headingRef = useRef([]);
  const { isLoaded } = useContext(Context);

  useEffect(() => {
    if (!isLoaded) return;
    const refs = [
      headingRef.current[0],
      headingRef.current[1],
      headingRef.current[2],
    ];
    // gsap.timeline({ repeat: -1 });
    gsap.to(refs, {
      duration: 0.5,
      opacity: 1,
      ease: Power1.easeInOut,
      stagger: 0.2,
    });
    gsap.to(refs, {
      duration: 2,
      y: 0,
      ease: Expo.easeOut,
      stagger: 0.2,
    });
  }, [isLoaded]);

  const makeHeading = (staticText, animatedText) => {
    const wordsArr = staticText.split(" ");

    const heading = wordsArr.map((item, index) => {
      item = item.replace("_", " ");
      return (
        <HeadingElement key={index}>
          <div
            className="notAnimatedHeading"
            key={index + "wrapper"}
            ref={(el) =>
              el &&
              headingRef.current.indexOf(el) &&
              headingRef.current.push(el)
            }
          >
            {[...item].map((letter, index) => (
              <span key={index + "letter"} data-content={letter}>
                {letter}
              </span>
            ))}
          </div>
        </HeadingElement>
      );
    });

    const subHeading = () => {
      return (
        <HeadingElement key={"animated-container"}>
          <div
            ref={(el) =>
              el &&
              headingRef.current.indexOf(el) &&
              headingRef.current.push(el)
            }
            className={"divWithTitles"}
          >
            {animatedText.map((text, index) => (
              <div key={index} className="animatedHeadings">
                {text}
              </div>
            ))}
          </div>
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

export default React.memo(LandingPage);
