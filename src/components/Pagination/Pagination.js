import React, { useContext, useEffect } from "react";
import { Context } from "../../App";
import { PaginationStyled, PagePaginator } from "./Pagination.styled";

export default function Pagination() {
  const { pagesInfo, pageApi } = useContext(Context);
  const { currentPage, pages } = pagesInfo;

  return (
    <PaginationStyled>
      {pages &&
        pages.map((page, index) => {
          const pageName = page.children[0].children[0].dataset.pagename;
          return (
            <PagePaginator
              onClick={() => pageApi.moveTo(index + 1)}
              active={index === currentPage ? true : false}
              key={index}
            >
              <h4>{pageName}</h4> <span />
            </PagePaginator>
          );
        })}
    </PaginationStyled>
  );
}
