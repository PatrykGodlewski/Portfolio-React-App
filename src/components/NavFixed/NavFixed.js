import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import GitHubLogo from "../../images/GitHub-Mark.svg";

const MENU_VARS = {
  height: "4px",
  width: "35%",
};
const LINKS = [
  { link: "https://github.com/", icon: GitHubLogo },
  { link: "https://github.com/", icon: GitHubLogo },
  { link: "https://github.com/", icon: GitHubLogo },
  { link: "https://github.com/", icon: GitHubLogo },
];

export default function NavFixed() {
  const Container = styled.div`
    position: fixed;
    inset: 0;
  `;
  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    height: ${({ theme }) => theme.RATIO}px;
    width: 100%;
  `;
  const MenuItem = styled.li`
    list-style: none;
    background-color: white;
    width: ${({ theme }) => theme.RATIO}px;
    height: ${({ theme }) => theme.RATIO}px;
    position: absolute;
    &:nth-child(2n) {
      background-color: ${({ theme }) => theme.colors.semiWhite};
    }
    ${({ isRevealed, theme, children }) =>
      getAbsolutePosition(isRevealed, theme, children)}
  `;
  const MenuIcon = styled.li`
    position: absolute;
    display: grid;
    inset: 0;
    background: ${({ theme }) => theme.colors.white};
    z-index: 1;
    cursor: pointer;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 100%;
      height: 100%;
    }
    div > span:nth-child(1) {
      background-color: black;
      height: ${MENU_VARS.height};
      width: ${MENU_VARS.width};
    }
    div > span:nth-child(2) {
      background-color: black;
      height: ${MENU_VARS.height};
      width: ${MENU_VARS.width};
    }
    div > span:nth-child(3) {
      background-color: black;
      height: ${MENU_VARS.height};
      width: ${MENU_VARS.width};
    }
  `;
  const Menu = styled.ul`
    background-color: green;
    width: ${({ theme }) => theme.RATIO}px;
    height: ${({ theme }) => theme.RATIO}px;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      right: 0;
      height: 100vh;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.fadedWhite};
    }
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      height: 1px;
      width: 100vw;
      background-color: ${({ theme }) => theme.colors.fadedWhite};
    }
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
  const LineDecor = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: ${({ theme }) => theme.RATIO}px;
    & > span {
      display: flex;
      justify-content: center;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      height: max-content;
      color: white;
      font-weight: 700;
    }
  `;

  const Link = styled.a`
    display: grid;
    place-items: center;
    height: 100%;
    & > img {
      width: 30%;
      height: 30%;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
  `;

  const [isRevealed, setIsRevealed] = useState(false);

  const getAbsolutePosition = (isRevealed, theme, children) => {
    const upperHalf = Math.ceil(LINKS.length / 2);
    // const descendedHalf = Math.floor(LINKS.length / 2);
    const pos = +children.key + 1;

    const amount = upperHalf > children.key ? pos : pos - upperHalf;
    const position = upperHalf > pos ? "top" : "left";
    return css`
      ${position}: ${isRevealed ? positionValue(amount, theme) : "0px"};
    `;
  };

  const positionValue = (amount, theme) => {
    const posVal = theme.RATIO * amount + "px";

    return posVal;
  };

  const handleMenuReveal = (e) => {
    setIsRevealed((prev) => !prev);
  };

  return (
    <Container>
      <Navbar>
        <Menu>
          <MenuIcon onClick={handleMenuReveal}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MenuIcon>

          {LINKS.map((item, index) => (
            <MenuItem key={index} isRevealed={isRevealed}>
              <Link key={index} href={item.link}>
                <img src={item.icon} alt="logo" />
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <Wrapper>
          <NavbarInfo>
            <li>15.21</li>
            <li>25.11.2021</li>
            <li>PRESENCE</li>
          </NavbarInfo>
          <LineDecor>
            <span>
              Discover new way of future designing with me Discover new way of
              future designing with me Discover new way of future designing with
              me Discover new way of future designing with me Discover new way
              of future designing with me Discover new way of future designing
              with me
            </span>
          </LineDecor>
        </Wrapper>
      </Navbar>
    </Container>
  );
}
