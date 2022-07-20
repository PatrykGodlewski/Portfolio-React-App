import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${({ theme }) => theme.RATIO + "px"};
  padding-right: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
  z-index: 998;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  opacity: 0;
  transform: translateY(30px);
  & > div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: white;
  }
  .heading {
    font-weight: 600;
  }
  .sub-heading {
    font-weight: 300;
  }
`;
