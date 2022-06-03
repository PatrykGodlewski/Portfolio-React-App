import React, { useContext } from "react";
import { Context } from "../../App";
import { PaginationStyled, PagePaginator } from "./Pagination.styled";

export default function Pagination({ forwardRef }) {
  const { pagesInfo, pageApi, setIsHoverSnap } = useContext(Context);
  const { currentPage, pages } = pagesInfo;

  return (
    <PaginationStyled ref={forwardRef}>
      {pages &&
        pages.map((page, index) => {
          const pageName = page.children[0].children[0].dataset.pagename;
          return (
            <PagePaginator
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
