import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  inset: 0 0 calc(100vh - ${({ theme }) => theme.RATIO}px) 0;
  z-index: 999;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: ${({ theme }) => theme.RATIO}px;
  width: 100%;
`;

export const NavbarInfo = styled.ul`
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

export const Wrapper = styled.div`
  display: flex;
`;
