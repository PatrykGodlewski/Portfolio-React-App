import styled, { keyframes } from "styled-components";

const indicateAnimation = keyframes`
 0% { height: 20px;  }
 50% { height: 50px;  }
 100% { height: 20px;  }
`;

export const IndicatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
  .scroll {
    color: white;
    font-weight: 200;
    letter-spacing: 0.3rem;
  }
  .line {
    height: 40px;
    width: 1px;
    background: white;
    animation-name: ${indicateAnimation};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;
