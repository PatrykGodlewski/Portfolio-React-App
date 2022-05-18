import React, { useContext } from "react";
import MenuButton from "../MenuButton/MenuButton";
import LineDecor from "../LineDecor/LineDecor";
import { Container, Navbar, Wrapper, NavbarInfo } from "./NavFixed.styled";
import { Context } from "../../App";

function NavFixed() {
  const { setIsHover } = useContext(Context);

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
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {timeNow()}
            </li>
            <li
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {todayDate()}
            </li>
            <li
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
