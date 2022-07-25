import styled, { keyframes } from "styled-components";

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
