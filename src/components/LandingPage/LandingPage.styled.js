import styled from "styled-components";

export const LandingPageStyled = styled.section`
  padding: ${({ theme }) => theme.RATIO + "px"};
  height: 100%;
  /* width: calc(100vw - 6rem); */
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const HeadingElement = styled.div`
  height: 33%;
  & > span {
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
    font-size: 10rem;

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
