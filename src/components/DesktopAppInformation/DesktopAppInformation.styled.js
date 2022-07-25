import styled from "styled-components";

export const DesktopAppInformationStyled = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: flex;
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 999999999999999999999999999999999;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 3vw;
  }
`;
