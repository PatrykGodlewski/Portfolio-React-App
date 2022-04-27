import React from "react";
import styled from "styled-components";
import MenuButton from "../MenuButton/MenuButton";
import LineDecor from "../LineDecor/LineDecor";

export default function NavFixed() {
  const Container = styled.header`
    position: fixed;
    inset: 0 0 calc(100vh - 112px) 0;
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

  return (
    <Container>
      <Navbar>
        <MenuButton />
        <Wrapper>
          <NavbarInfo>
            <li>15.21</li>
            <li>25.11.2021</li>
            <li>PRESENCE</li>
          </NavbarInfo>
          <LineDecor />
        </Wrapper>
      </Navbar>
    </Container>
  );
}
