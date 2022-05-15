import styled, { keyframes, css } from "styled-components";
import _ from "lodash";
import chroma from "chroma-js";

export const Display = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 99999999999999999;
`;

const spin = keyframes`
  to {
    transform: rotate(400grad);
  }
`;

const animation = (props) =>
  css`
    ${spin} ${props.cx / props.v}s linear infinite;
  `;

const Goo = styled.circle`
  fill: ${(props) => props.color};
  animation: ${animation};
`;

export const GooeySpinner = (props) => (
  <svg viewBox="-1.2 -1.2 2.4 2.4" filter="url(#goo)" {...props}>
    {_.range(props.nBlobs).map((i) => (
      <Goo
        key={i}
        color={chroma.scale(props.colors)(Math.random())}
        cx={0.5 * (1 + Math.random())}
        r={0.1 * (1 + Math.random())}
        v={(0.3 + 0.3 * Math.random()) / props.period}
      />
    ))}
    <defs>
      <filter id="goo">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="10"
          colorInterpolationFilters="sRGB"
          result="blur"
        />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0  0  0  
                  0 1 0  0  0  
                  0 0 1  0  0  
                  0 0 0 18 -7"
          result="goo"
        />
      </filter>
    </defs>
  </svg>
);
