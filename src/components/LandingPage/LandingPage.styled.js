import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

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
      /* transition: transform 1s, opacity 1s; */
      font-weight: 600;

      animation-name: spincube;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 20s;
      transform-style: preserve-3d;
      transform-origin: 40px 40px 0;
    `}

  & > .animatedHeading {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0%;
    height: 18.5vh;


    font-size: 18.5vh;

    &:nth-child(1) {
      color: #f1c40f;
      transform: translateZ(40px);
      -webkit-backface-visibility: hidden;
      
    background: -webkit-linear-gradient(#d07cff, #ff0059);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    &:nth-child(2) {
      color: #fff;
      transform: rotateX(90deg) translateZ(40px);
      -webkit-backface-visibility: hidden;
    }
    &:nth-child(3) {
      color: #f85555;
      transform: rotateX(180deg) translateZ(40px);
      -webkit-backface-visibility: hidden;
      
    background: -webkit-linear-gradient(#d07cff, #ff0059);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    &:nth-child(4) {
      color: #fff;  
      transform: rotateX(270deg) translateZ(40px);
      -webkit-backface-visibility: hidden;
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

  @-webkit-keyframes spincube {
    from,to  { -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);}
    15%      { -webkit-transform: rotateX(90deg);}
    25%      { -webkit-transform: rotateX(90deg);}
    40%      { -webkit-transform: rotateX(180deg);}
    50%      { -webkit-transform: rotateX(180deg);}
    65%      { -webkit-transform: rotateX(270deg);}
	75%      { -webkit-transform: rotateX(270deg);}
	95%      { -webkit-transform: rotateX(360deg);}
	100%      { -webkit-transform: rotateX(360deg);}
  }@keyframes spincube {
    from,to {
	  -webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      -ms-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    15% {
	  -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      -ms-transform: rotateX(90deg);
      transform: rotateX(90deg);
    }
	25% {
	  -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      -ms-transform: rotateX(90deg);
      transform: rotateX(90deg);
    }
	40% {
	  -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -ms-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
	50% {
	  -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -ms-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
    65% {
	  -webkit-transform: rotateX(270deg);
      -moz-transform: rotateX(270deg);
      -ms-transform: rotateX(270deg);
      transform: rotateX(270deg);
    }
	75% {
	  -webkit-transform: rotateX(270deg);
      -moz-transform: rotateX(270deg);
      -ms-transform: rotateX(270deg);
      transform: rotateX(270deg);
    }
	90% {
	  -webkit-transform: rotateX(360deg);
      -moz-transform: rotateX(360deg);
      -ms-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
    100% {
	  -webkit-transform: rotateX(360deg);
      -moz-transform: rotateX(360deg);
      -ms-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
`;
