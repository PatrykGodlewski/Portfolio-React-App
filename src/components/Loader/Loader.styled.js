import styled, { keyframes, css } from "styled-components";
import _ from "lodash";
import chroma from "chroma-js";

export const Display = styled.div`
  display: flex;
  position: fixed;
  font-family: monospace;
  width: 100%;
  height: 100%;
  z-index: 99999999999999999;
`;

export const LoadingText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1rem;
  font-family: Montserrat;

  & > span {
    transform: translate(0.5rem, 0.5rem);
    z-index: 1;
  }
`;

const gradient = keyframes`
 	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const LoadingDiv = styled.div`
  position: absolute;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 4s ease infinite;
  margin-top: 1rem;
  width: 20%;
  height: 4rem;
  border-radius: 50px;
`;

export const Block = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
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
    {_.range(props.nblobs).map((i) => (
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
