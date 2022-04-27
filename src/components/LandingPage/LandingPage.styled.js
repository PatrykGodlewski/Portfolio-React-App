import styled from "styled-components";

export const LandingPageStyled = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  & > span {
    color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
    font-size: 10rem;
    /* color: white; */
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
      1px 1px 0 white;
  }
`;
