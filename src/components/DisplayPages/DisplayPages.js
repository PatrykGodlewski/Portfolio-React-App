import React, { useEffect, useContext, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import ReactFullpage from "@fullpage/react-fullpage";
import { Context } from "../../App";

export const DisplayPages = (props) => {
  const { pagesInfo, setPagesInfo, setPageApi } = useContext(Context);
  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      scrollingSpeed={1000}
      afterLoad={(section, origin, destination, direction) => {
        setPagesInfo({
          currentPage: origin.index,
          pages: [...origin.item.parentNode.children].map((item) => item),
        });
      }}
      onLeave={(section, origin, destination, direction) => {
        setPagesInfo((prev) => ({ ...prev, currentPage: origin.index }));
      }}
      render={({ state, fullpageApi }) => {
        // const scrollTo = () => {
        //   fullpageApi.moveSectionUp();
        // };
        setPageApi(fullpageApi);
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <LandingPage />
            </div>
            <div className="section">
              <LandingPage />
            </div>
            <div className="section">
              <LandingPage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
