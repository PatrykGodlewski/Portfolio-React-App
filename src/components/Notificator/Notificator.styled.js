import styled from "styled-components";

const NotificatorStyled = styled.div`
  margin-top: 2rem;
  height: min-content;
  padding: 2rem;
  padding-right: 3rem;
  border-radius: 5px;
  border: solid 1px;
  border-color: ${({ theme, hover }) =>
    hover ? theme.colors.btnActive : "white"};
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.backgroundDimed};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: -4rem;
  top: -1px;
  bottom: -1px;
  border-radius: 0px 5px 5px 0px;
  background-color: white;
  padding: 1rem;
  padding-inline: 2rem;
  border: none;
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnActive};
  }
`;

const NotificatorContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  inset: 0;
`;

export { NotificatorStyled, NotificatorContainer, CloseButton };
