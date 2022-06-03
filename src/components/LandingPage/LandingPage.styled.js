import styled from "styled-components";

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
  position: relative;

  & > .notAnimatedHeading {
    height: 100%;
    opacity: 0;
    transform: translateY(30px);
  }

  & .divWithTitles {
    position: relative;
    opacity: 0;
    transform: translateY(30px);
  }
  & .animatedHeadings {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0%;
    height: 100%;
    font-weight: 800;

    font-size: 18.5vh;

    &:nth-child(1) {
      color: #fff;
    }
    &:nth-child(2) {
      color: #fff;
      opacity: 0;
    }
    &:nth-child(3) {
      color: #f85555;
      opacity: 0;
    }
    &:nth-child(4) {
      color: #fff;
      opacity: 0;
    }
  }

  & span {
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 800;
    font-size: ${({ theme }) =>
      `${(window.innerHeight - theme.RATIO * 2) / 3 - 35}px`};
    font-size: 21vh;

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
