import styled, { keyframes } from "styled-components";

const infiniteScroll = keyframes`
 0% { transform: translateY(0px);  }
 100% { transform: translateY(-974px);  }
`;

export const LineDecorStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${({ theme }) => theme.RATIO}px;
  transform: translateX(-23px);
  & > span {
    display: flex;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    height: max-content;
    color: white;
    font-weight: 700;
    font-size: 2rem;
    animation-name: ${infiniteScroll};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;
