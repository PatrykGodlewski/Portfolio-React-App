import styled, { css } from "styled-components";

const MENU_GAP = "5px";

export const Menu = styled.ul`
  background-color: green;
  width: ${({ theme }) => theme.RATIO}px;
  height: ${({ theme }) => theme.RATIO}px;
  position: relative;
  z-index: 1002;
  & .before {
    position: absolute;
    right: 0;
    height: 0vh;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.fadedWhite};
  }
  & .after {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 0vw;
    background-color: ${({ theme }) => theme.colors.fadedWhite};
  }
`;

export const MenuIcon = styled.li`
  position: absolute;
  display: grid;
  inset: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1002;
  cursor: pointer;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${MENU_GAP};
    width: 100%;
    height: 100%;
  }
  div > span:nth-child(1) {
    background-color: black;
    height: ${({ theme }) => theme.menuVars.height};
    width: ${({ theme }) => theme.menuVars.width};
    transition: transform 500ms ease;
    ${({ isRevealed }) =>
      isRevealed &&
      css`
        -webkit-transform: rotate(-45deg) translate(0px, 0px);
        transform: translate(0, 9px) rotate(-45deg);
      `}
  }
  div > span:nth-child(2) {
    background-color: black;
    height: ${({ theme }) => theme.menuVars.height};
    width: ${({ theme }) => theme.menuVars.width};
    transition: opacity 200ms ease, transform 500ms ease;
    ${({ isRevealed }) =>
      isRevealed &&
      css`
        opacity: 0;
        transform: scale(0);
      `};
  }
  div > span:nth-child(3) {
    background-color: black;
    height: ${({ theme }) => theme.menuVars.height};
    width: ${({ theme }) => theme.menuVars.width};
    transition: transform 500ms ease;
    ${({ isRevealed }) =>
      isRevealed &&
      css`
        -webkit-transform: rotate(45deg) translate(5px, 5px);
        transform: translate(0, -8px) rotate(45deg);
      `}
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  background-color: white;
  width: ${({ theme }) => theme.RATIO}px;
  height: ${({ theme }) => theme.RATIO}px;
  position: absolute;
  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.semiWhite};
  }
  transition: top 500ms ease, left 500ms ease;
  ${({ customCss }) => customCss}
`;

export const Link = styled.a`
  display: grid;
  place-items: center;
  height: 100%;
  & > img {
    width: 30%;
    height: 30%;
  }
`;
