import styled from "styled-components";

const CIRCLE_SIZE = 20;
const SPACING = 15;

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING}rem;
`;

export const PagePaginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: 50%;
  transition: background-color 800ms ease;
  background-color: ${({ theme, active }) =>
    active ? "white" : "transparent"};
  border: 2px solid white;
  position: relative;
  cursor: pointer;
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
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
  }
  & > span {
    position: absolute;
    left: 17px;
    width: calc(${SPACING}rem + 2px);
    height: 4px;
    background-color: white;
    cursor: default;
    user-select: none;
    pointer-events: none;
  }
`;
