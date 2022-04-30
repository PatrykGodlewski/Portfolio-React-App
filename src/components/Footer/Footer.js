import React from "react";
import styled from "styled-components";
import Indicator from "../Indicator/Indicator";
import Pagination from "../Pagination/Pagination";

function Footer() {
  const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: ${({ theme }) => theme.RATIO + "px"};
    padding-inline: ${({ theme }) => `calc(${theme.RATIO}px + 6rem)`};
    z-index: 998;
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
      <Pagination />
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

export default React.memo(Footer);
