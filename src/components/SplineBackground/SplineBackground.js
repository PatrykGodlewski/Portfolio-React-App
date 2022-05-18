import Spline from "@splinetool/react-spline";
import React, { Suspense, useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import Loader from "../Loader/Loader";
import Loadable from "react-loadable";

export default function SplineBackground() {
  const style = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    inset: 0,
    zIndex: -1,
    transition: "all 0.5s",
  };

  const [spline, setSpline] = useState();
  const [animation, setAnimation] = useState({});
  const splineRef = useRef();

  const { pagesInfo, setIsLoading } = useContext(Context);

  useEffect(() => {
    if (!pagesInfo) return;
    if (pagesInfo.currentPage === 1) {
      setAnimation({ opacity: 0, transform: " translateX(-929px)" });
    } else {
      setAnimation({ opacity: 1, transform: " translateX(0px)" });
    }
  }, [pagesInfo]);

  function onLoad(spline) {
    setSpline(spline);
  }

  function tiltSpline(e) {}

  function triggerAnimation() {
    spline.setZoom(-100);
    spline.emitEvent("mouseHover", "05E45C89-DF6B-46B0-AA7B-B8CCB98E4220");
  }

  useEffect(() => {
    if (!splineRef.current.dataset.engine) return;
    setIsLoading(false);
  });

  return (
    <div style={{ backgroundColor: "#1e1e1e", boxShadow: "0 0 20em black" }}>
      <div style={{ ...style, ...animation }}>
        <Spline
          onLoad={onLoad}
          ref={splineRef}
          scene="https://draft.spline.design/AVWQ9wsOCwLr0Y4G/scene.splinecode"
        />
      </div>
    </div>
  );
}
