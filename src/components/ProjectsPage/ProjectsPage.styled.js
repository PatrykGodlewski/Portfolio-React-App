import styled from "styled-components";

const timeing = 200;

export const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.RATIO + "px"};
  padding-right: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
  position: relative;
  height: 100%;
  width: 100%;
  transition: opacity 600ms ease-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const CardListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: ${({ theme }) => theme.RATIO}px;
  left: ${({ theme }) => theme.RATIO}px;
  right: 2px;
  bottom: ${96 * 2}px;
  overflow: auto;
  gap: 5rem;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    outline: 1px solid ${({ theme }) => theme.colors.fadedWhite};
  }
`;

export const CardList = styled.div`
  white-space: nowrap;
  margin-left: 5rem;
`;
export const CardDescription = styled.div`
  position: absolute;
  max-height: 0;
  overflow: hidden;
  white-space: initial;
  bottom: 20px;
  left: 20px;
  transition: max-height ${timeing}ms ease-out;
`;
export const CardTitle = styled.h2`
  overflow: hidden;
  position: absolute;
  font-size: 3rem;
  top: 10px;
  left: 20px;
  max-height: 0;
  padding: 0rem;
  transition: padding ${timeing}, max-height ${timeing}ms ease-out;
  background-color: rgba(255 255 255 0.4);
`;

const MULTIPLICATOR = 40;
const borderRadius = "10px";
export const Card = styled.div`
  position: relative;
  display: inline-block;

  border: 2px white solid;

  width: ${16 * MULTIPLICATOR}px;
  height: min-content;

  border-radius: ${borderRadius};
  margin-right: 5rem;
  transition: outline ${timeing * 1.6}ms, box-shadow ${timeing * 1.6}ms,
    transform ${timeing}ms;
  outline: 0px solid white;
  cursor: pointer;

  &:hover {
    outline: 10px solid white;
    box-shadow: -20px 20px 30px black;
    z-index: 999999;
    ${CardDescription} {
      transition: max-height ${timeing * 2}ms ease-in;
      max-height: 100%;
    }
    ${CardTitle} {
      transition: max-height ${timeing * 2}ms ease-in;
      max-height: 100%;
      padding: 1rem;
    }
  }
`;

export const CardImg = styled.div`
  & > img {
    border-radius: ${borderRadius};
    width: 100%;
  }
`;

export const Overlay = styled.a`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.5;
  border-radius: 10px;
`;
