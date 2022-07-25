import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { PaginationStyled, PagePaginator } from "./Pagination.styled";

export default function Pagination({ forwardRef }) {
  const { pagesInfo, pageApi, setIsHoverSnap } = useContext(Context);
  const { currentPage, pages } = pagesInfo;
  const [spacing, setSpacing] = useState(
    window.innerWidth > 1100 ? 15 : window.innerWidth / 55
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSpacing(window.innerWidth > 1100 ? 15 : window.innerWidth / 55);
    });
  }, []);

  return (
    <PaginationStyled spacing={spacing} ref={forwardRef}>
      {pages &&
        pages.map((page, index) => {
          const pageName = page.children[0].children[0].dataset.pagename;
          return (
            <PagePaginator
              spacing={spacing}
              onClick={() => pageApi.moveTo(index + 1)}
              active={index === currentPage ? true : false}
              key={index}
              onMouseEnter={(e) =>
                setIsHoverSnap({ event: e, isHoverSnap: true })
              }
              onMouseLeave={(e) =>
                setIsHoverSnap({ event: e, isHoverSnap: false })
              }
            >
              <h4>{pageName}</h4> <span />
            </PagePaginator>
          );
        })}
    </PaginationStyled>
  );
}
