import React from "react";
import styled from "styled-components";
import MenuButton from "../MenuButton/MenuButton";
import LineDecor from "../LineDecor/LineDecor";

function NavFixed() {
  const Container = styled.header`
    position: fixed;
    inset: 0 0 calc(100vh - 112px) 0;
    z-index: 999;
  `;
  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    height: ${({ theme }) => theme.RATIO}px;
    width: 100%;
  `;

  const NavbarInfo = styled.ul`
    display: flex;
    list-style: none;
    & > li {
      display: grid;
      place-content: center;
      padding-inline: 6rem;
      color: ${({ theme }) => theme.textFaded};
      transition: background-color 0.5s;
      background-color: rgba(255, 255, 255, 0);
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  `;

  const Wrapper = styled.div`
    display: flex;
  `;

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
            <li>{timeNow()}</li>
            <li>{todayDate()}</li>
            <li>PRESENCE</li>
          </NavbarInfo>
          <LineDecor />
        </Wrapper>
      </Navbar>
    </Container>
  );
}

export default React.memo(NavFixed);
