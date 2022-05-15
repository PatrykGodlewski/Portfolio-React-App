import React, { useEffect, useContext, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Context } from "../../App";
import LandingPage from "../LandingPage/LandingPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactForm from "../ContactForm/ContactForm";

const DisplayPages = (props) => {
  const { setPagesInfo, setPageApi } = useContext(Context);
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
        setPageApi(fullpageApi);
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <LandingPage pagename={"main"} />
            </div>
            <div className="section">
              <ProjectsPage pagename={"projects"} />
            </div>
            <div className="section">
              <ContactForm pagename={"Contact Me"} />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default DisplayPages;
