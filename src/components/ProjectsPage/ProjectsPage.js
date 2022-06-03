import React, { useEffect, useContext, useState } from "react";
import {
  PageWrapper,
  CardList,
  Card,
  CardListWrapper,
  CardTitle,
  CardImg,
  CardDescription,
  Overlay,
} from "./ProjectsPage.styled";
import { Context } from "../../App";
import { PROJECTS } from "../../globals/siteOptions";

export default function ProjectsPage({ pagename }) {
  const [isActive, setIsActive] = useState(false);
  const { pagesInfo, setIsHover } = useContext(Context);

  useEffect(() => {
    const { currentPage, pages } = pagesInfo;
    if (!pages) return;
    const isOnView =
      pages[currentPage].children[0].children[0].attributes["data-pagename"]
        .nodeValue === pagename;
    isOnView ? setIsActive(true) : setIsActive(false);
  }, [pagesInfo, pagename]);

  const drag = () => {
    // window
  };

  return (
    <PageWrapper
      onDrag={() => drag()}
      data-pagename={pagename}
      active={isActive}
    >
      <CardListWrapper>
        <CardList>
          {PROJECTS.map((item, index) => {
            return (
              <React.Fragment key={index + "wrapper"}>
                <Card
                  key={index + "card"}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <Overlay
                    href={item.link}
                    target={item.link !== "#" && "_blank"}
                  />
                  <CardTitle>{item.title}</CardTitle>
                  <CardImg>
                    <img src={item.img} alt="Project preview"></img>
                  </CardImg>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </React.Fragment>
            );
          })}
        </CardList>
      </CardListWrapper>
    </PageWrapper>
  );
}
