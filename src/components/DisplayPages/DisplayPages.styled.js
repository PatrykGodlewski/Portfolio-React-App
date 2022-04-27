import styled from "styled-components";

export const DisplayPagesStyled = styled.main`
  margin: ${({ theme }) => theme.RATIO + "px"};
  height: ${({ theme }) => `calc(100vh - ${theme.RATIO * 2}px)`};
  width: ${({ theme }) => `calc(100vw - ${theme.RATIO * 2}px - 6rem)`};
`;
