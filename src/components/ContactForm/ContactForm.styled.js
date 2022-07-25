import styled from "styled-components";

export const ContactFormStyled = styled.section`
  padding: ${({ theme }) => theme.RATIO + 40}px;
  padding-right: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
  height: 100%;
  width: 100%;
  display: flex;
  h1 {
    font-size: 8vh;
  }

  & > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  & .form-group {
    display: flex;
    flex-direction: column;
    position: relative;

    label {
      display: none;
    }

    #yourName {
      border-color: ${({ error }) => (error.name ? "red" : "white")};
    }
    #emailContent {
      border-color: ${({ error }) => (error.content ? "red" : "white")};
    }
    #emailInput {
      border-color: ${({ error }) => (error.email ? "red" : "white")};
    }
    .form-control {
      background-color: transparent;
      border-style: none;
      border: solid 2px white;
      padding: 2vh;
      color: white;
      resize: none;
      border-radius: 5px;
      &::placeholder {
        color: white;
        opacity: 0.5;
      }
    }
  }
  .submit-button {
    /* font-family: Montserrat sans-serif; */
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding: 2rem;
    background-color: white;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      outline: 1px solid #f85555;
    }
  }
`;
