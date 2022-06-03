import React, { useContext, useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";

import MenuButton from "../MenuButton/MenuButton";
import LineDecor from "../LineDecor/LineDecor";
import { Container, Navbar, Wrapper, NavbarInfo } from "./NavFixed.styled";
import { Context } from "../../App";

function NavFixed() {
  const { setIsHover, isLoaded } = useContext(Context);
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

  const todayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };

  const timeNow = () => {
    const today = new Date();
    const time =
      (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()) +
      "." +
      today.getMinutes();
    return time;
  };

  return (
    <Container>
      <Navbar>
        <MenuButton />
        <Wrapper>
          <NavbarInfo>
            <li
              ref={(ref) => allRefs.current.push(ref)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {timeNow()}
            </li>
            <li
              ref={(ref) => allRefs.current.push(ref)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {todayDate()}
            </li>
            <li
              ref={(ref) => allRefs.current.push(ref)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              PRESENCE
            </li>
          </NavbarInfo>
          <LineDecor />
        </Wrapper>
      </Navbar>
    </Container>
  );
}

export default React.memo(NavFixed);
