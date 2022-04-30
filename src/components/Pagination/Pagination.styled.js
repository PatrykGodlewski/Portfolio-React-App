import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
`;

export const PagePaginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background-color 800ms ease;
  background-color: ${({ theme, active }) =>
    active ? "white" : theme.colors.background};
  border: 2px solid white;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundFaded};
  }
  &:last-child {
    & > span {
      display: none;
    }
  }
  & > h4 {
    position: absolute;
    top: -2rem;
    color: white;
    text-transform: uppercase;
  }
  & > span {
    position: absolute;
    left: 17px;
    width: calc(8rem + 20px);
    height: 4px;
    background-color: white;
    cursor: default;
  }
`;
