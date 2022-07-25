import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 50%;
  h1 {
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.background};
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
      1px 1px 0 white;
    cursor: default;
  }
  .container {
    padding-right: 5rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
  }
  .mail {
    font-size: 1.5rem;
    word-break: break-all;
    background-color: white;
    color: black;
    padding: 3rem;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    & > button {
      outline: none;
      background-color: ${({ theme }) => theme.colors.background};
      text-transform: uppercase;
      padding: 1.5rem;
      display: grid;
      border-radius: 5px;
      place-items: center;
      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundFaded};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.btnActive};
      }
    }
    & > strong {
      color: green;
    }
  }
`;
