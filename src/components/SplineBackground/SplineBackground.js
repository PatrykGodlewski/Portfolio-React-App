import Spline from "@splinetool/react-spline";
import React, { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";

export default function SplineBackground() {
  const style = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    inset: 0,
    zIndex: -1,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
  };

  const [spline, setSpline] = useState();
  const [animation, setAnimation] = useState({});
  const splineRef = useRef();
  const [hide, setHide] = useState(false);

  const { pagesInfo, setIsLoading } = useContext(Context);
  useEffect(() => {
    if (!pagesInfo) return;
    if (pagesInfo.currentPage > 0) {
      setAnimation({
        opacity: 0,
        transform: " translateX(-929px)",
      });
    } else {
      setAnimation({
        opacity: 1,
        transform: " translateX(0px)",
      });
    }
  }, [pagesInfo]);
  useEffect(() => {
    if (!splineRef.current.dataset.engine) return;
    setIsLoading(false);
  });

  function onLoad(spline) {
    setSpline(spline);
  }

  return (
    !hide && (
      <div style={{ backgroundColor: "#1e1e1e", boxShadow: "0 0 20em black" }}>
        <div style={{ ...style, ...animation }}>
          <Spline
            onLoad={onLoad}
            ref={splineRef}
            scene="https://draft.spline.design/AVWQ9wsOCwLr0Y4G/scene.splinecode"
          />
        </div>
      </div>
    )
  );
}
