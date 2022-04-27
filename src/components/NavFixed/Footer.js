import React from "react";
import styled from "styled-components";

export default function Footer() {
  const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: ${({ theme }) => theme.RATIO + "px"};
    padding-inline: ${({ theme }) => theme.RATIO + "px"};
  `;
  const Indicator = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1.5rem;
    .scroll {
      color: white;
      font-weight: 200;
      letter-spacing: 0.3rem;
    }
    .line {
      height: 40px;
      width: 1px;
      background: white;
    }
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
      <Indicator>
        <span className="scroll">SCROLL</span>
        <sapn className="line" />
      </Indicator>
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
