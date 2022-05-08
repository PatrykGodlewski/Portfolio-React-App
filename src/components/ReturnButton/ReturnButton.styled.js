import styled from "styled-components";

export const StyledReturnButton = styled.div`
  width: ${({ theme }) => theme.RATIO}px;
  display: grid;
  place-items: center;
  transition: opacity 200ms ease;
  opacity: ${({ pagination }) => (pagination > 0 ? 1 : 0)};
  pointer-events: ${({ pagination }) => (pagination > 0 ? "all" : "none")};
  & > div {
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.white};
    width: 70%;
    height: 70%;
    color: ${({ theme }) => theme.colors.white};
    display: grid;
    place-items: center;
    svg {
      width: 40%;
      height: 40%;
    }
  }
`;
