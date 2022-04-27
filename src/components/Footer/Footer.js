import React from "react";
import styled from "styled-components";
import Indicator from "../Indicator/Indicator";

export default function Footer() {
  const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: ${({ theme }) => theme.RATIO + "px"};
    padding-inline: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
  `;

  const Pagination = styled.div`
    display: flex;
    align-items: center;
    gap: 8rem;
  `;
  const PagePaginator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    &:last-child {
      & > span {
        display: none;
      }
    }
    & > h6 {
      position: absolute;
      top: -1.5rem;
      color: white;
    }
    & > span {
      position: absolute;
      left: 0;
      width: calc(8rem + 20px);
      height: 4px;
      background-color: white;
    }
  `;
  const Details = styled.div`
    display: flex;
    align-items: center;
    gap: 8rem;
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

  return (
    <FooterContainer>
      <Indicator />
      <Pagination>
        <PagePaginator active>
          <h6>MAIN</h6> <span />
        </PagePaginator>
        <PagePaginator>
          <h6>MAIN</h6> <span />
        </PagePaginator>
        <PagePaginator>
          <h6>MAIN</h6> <span />
        </PagePaginator>
        <PagePaginator>
          <h6>MAIN</h6> <span />
        </PagePaginator>
      </Pagination>
      <Details>
        <div>
          <span className="heading">Proffesional</span>
          <span className="sub-heading">web flow</span>
        </div>
        <div>
          <span className="heading">Branding, digital</span>
          <span className="sub-heading">and communications</span>
        </div>
        <div>
          <span className="heading">Design-driven</span>
          <span className="sub-heading">creative person</span>
        </div>
      </Details>
    </FooterContainer>
  );
}
