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
export const CardList = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
`;
export const CardDescription = styled.div`
  position: absolute;
  bottom: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height ${timeing}ms ease-out;
`;
export const CardTitle = styled.h1`
  overflow: hidden;
  position: absolute;
  top: 0;
  max-height: 0;
  padding: 0rem;
  transition: padding ${timeing}, max-height ${timeing}ms ease-out;
  background-color: rgba(255 255 255 0.4);
`;

export const Card = styled.div`
  position: relative;
  /* max-width: 200px; */
  height: min-content;
  background-color: gray;
  transition: outline ${timeing * 1.6}ms, box-shadow ${timeing * 1.6}ms,
    transform ${timeing}ms;
  outline: 0px solid white;
  cursor: pointer;
  &:hover {
    outline: 10px solid white;
    box-shadow: -20px 20px 30px black;
    z-index: 999999;
    transform: translate(20px, -20px);
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
export const CardShadow = styled.div``;

export const CardImg = styled.div`
  & > img {
    width: 400px;
  }
`;

export const Overlay = styled.a`
  position: absolute;
  inset: 0;
`;
