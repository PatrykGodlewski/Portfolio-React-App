import styled from "styled-components";
import { keyframes } from "styled-components";

const circleAnimation = keyframes`
0% {
    inset: 0
} 50% {
    inset: -20px
} 100% {
    inset: 0
}
`;

export const AnimatedTrackerStyled = styled.div`
  position: absolute;
  z-index: 99999;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ fill }) => fill};
  opacity: ${({ opacity }) => opacity};
  border-radius: 50%;
  transition: opacity 250ms ease-in-out;
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ fill }) => fill};
    opacity: 0.1;
    border-radius: 50%;
    animation: ${circleAnimation} 2s ease infinite;
  }
`;
export const Circle = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 99998;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ fill }) => fill} solid 1px;
  opacity: ${({ opacity }) => opacity};
  border-radius: 50%;
  transform: ${({ isHover }) => (isHover ? "scale(2)" : "scale(1)")};
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  pointer-events: none;
  user-select: none;
`;
export const Snap = styled.div`
  position: absolute;
  z-index: 1000;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ fill }) => fill};
  opacity: ${({ opacity }) => opacity};
  border-radius: 50%;
  transform: ${({ snap }) => (snap.isHoverSnap ? "scale(2.5)" : "scale(1)")};
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  pointer-events: none;
  user-select: none;
`;
