import styled from "styled-components";
import About from "./About/About";

export const ContactFormStyled = styled.section`
  padding: ${({ theme }) => theme.RATIO + "px"};
  padding-right: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
  height: 100%;
  width: 100%;
  display: flex;
  & > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  & .form-group {
    display: flex;
    flex-direction: column;

    label {
      color: white;
    }
    .form-control {
      background-color: transparent;
      border-style: none;
      border: solid 2px white;
      padding: 2rem;
      color: white;
      resize: none;
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
    &:hover,
    &:focus {
      outline: 1px solid #f85555;
    }
  }
`;
