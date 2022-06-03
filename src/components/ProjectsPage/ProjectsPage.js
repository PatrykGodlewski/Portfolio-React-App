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
  const { pagesInfo } = useContext(Context);

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
            if (index % 2 === 1)
              return <React.Fragment key={index + "frag"}></React.Fragment>;
            return (
              <React.Fragment key={index + "wrapper"}>
                <Card key={index + "card"}>
                  <Overlay href={item.link} />
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
        <CardList>
          {PROJECTS.map((item, index) => {
            if (index % 2 === 0)
              return <React.Fragment key={index + "frag"}></React.Fragment>;
            return (
              <React.Fragment key={index + "wrapper"}>
                <Card key={index + "card"}>
                  <Overlay href={"#"} />
                  <CardTitle>Title</CardTitle>
                  <CardImg>
                    <img
                      src="https://via.placeholder.com/320x180"
                      alt="Project preview"
                    ></img>
                  </CardImg>
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet tempora, labore, quod quibusdam odit facilis,
                    perspiciatis vero maiores repudiandae eum libero
                    voluptatibus numquam a eius ex molestias earum totam
                    temporibus. Iusto odit pariatur repudiandae cumque aliquid
                    non voluptate autem natus, velit ut similique perferendis
                    dolorem nobis architecto, rem obcaecati consequuntur
                    molestiae iure explicabo delectus! Quasi eveniet excepturi a
                    repudiandae dolor.
                  </CardDescription>
                </Card>
              </React.Fragment>
            );
          })}
        </CardList>
      </CardListWrapper>
    </PageWrapper>
  );
}
