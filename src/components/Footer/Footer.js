import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import Indicator from "../Indicator/Indicator";
import Pagination from "../Pagination/Pagination";
import ReturnButton from "../ReturnButton/ReturnButton";
import { FooterContainer, Details } from "./Footer.styled";
import { Context } from "../../App";
import { Expo, gsap } from "gsap";

function Footer() {
  const { isLoaded } = useContext(Context);
  const allRefs = useRef([]);

  useEffect(() => {
    if (!isLoaded) return;
    const refsToAnimate = allRefs.current.filter((item, i) => i < 3 && item);
    gsap.to(refsToAnimate, {
      duration: 2,
      stagger: 0.2,
      ease: Expo.easeInOut,
      opacity: 1,
      y: 0,
    });
  }, [isLoaded]);

  return (
    <FooterContainer>
      <ReturnButton />
      <div
        style={{ opacity: 0, transform: "translateY(30px)" }}
        ref={(ref) => allRefs.current.push(ref)}
      >
        <Indicator />
      </div>
      <Pagination forwardRef={(ref) => allRefs.current.push(ref)} />
      <Details ref={(ref) => allRefs.current.push(ref)}>
        <div>
          <span className="heading">Proffesional</span>
          <span className="sub-heading">web flow</span>
        </div>
        <div>
          <span className="heading">Branding, digital</span>
          <span className="sub-heading">and communications</span>
        </div>
        <div>
          <span className="heading">Design-driven</span>
          <span className="sub-heading">creative person</span>
        </div>
      </Details>
    </FooterContainer>
  );
}

export default React.memo(Footer);
