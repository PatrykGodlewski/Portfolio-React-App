import styled, { css } from "styled-components";

export const LandingPageStyled = styled.section`
  padding: ${({ theme }) => theme.RATIO + "px"};
  padding-right: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const HeadingElement = styled.div`
  height: calc(100% / 3);
  transition: transform 300ms ease-in;
  position: relative;
  ${({ animated }) =>
    animated &&
    css`
      transform-style: preserve-3d;
      transition: transform 1s, opacity 1s;
    `}
  /* transform: rotateX(0deg) translateY(0%); */
  /* &:hover {
    transform: rotateX(90deg) translateY(-100%);
  } */

  & > .animatedHeading {
    position: absolute;
    right: 0;
    height: 100%;
    color: white;
    transition: opacity 1s;
    font-size: ${({ theme }) =>
      `${(window.innerHeight - theme.RATIO * 2) / 3 - 35}px`};

    &:nth-child(1) {
      transform: rotateY(0deg) translateZ(100px);
      opacity: 0;
    }
    &:nth-child(2) {
      transform: rotateX(-90deg) translateZ(100px);
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotateY(180deg) translateZ(100px);
      opacity: 0;
    }
    &:nth-child(4) {
      transform: rotateX(90deg) translateZ(100px);
      opacity: 0;
    }
  }

  &.show-front {
    transform: translateZ(-100px) rotateY(0deg);
    & .animatedHeading:nth-child(1) {
      opacity: 1;
    }
  }

  &.show-back {
    transform: translateZ(-100px) rotateY(-180deg);
    & .animatedHeading:nth-child(2) {
      opacity: 1;
    }
  }

  &.show-top {
    transform: translateZ(-100px) rotateX(-90deg);
    & .animatedHeading:nth-child(3) {
      opacity: 1;
    }
  }

  &.show-bottom {
    transform: translateZ(-100px) rotateX(90deg);
    & .animatedHeading:nth-child(4) {
      opacity: 1;
    }
  }

  & > span {
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
    font-size: ${({ theme }) =>
      `${(window.innerHeight - theme.RATIO * 2) / 3 - 35}px`};
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
      1px 1px 0 white;
    cursor: default;
    &::before {
      content: attr(data-content);
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      height: 0%;
      pointer-events: none;
      overflow: hidden;
      color: white;
      transition: height 200ms ease-out;
    }
    &:hover {
      &::before {
        height: 100%;
      }
    }
  }
`;
