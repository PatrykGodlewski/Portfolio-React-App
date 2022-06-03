import React, { useEffect, useState } from "react";
import NavFixed from "./components/NavFixed/NavFixed";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import DisplayPages from "./components/DisplayPages/DisplayPages";
import SplineBackground from "./components/SplineBackground/SplineBackground";
import MouseTracker from "./components/MouseTracker/MouseTracker";
import AnimatedTracker from "./components/MouseTracker/AnimatedTracker/AnimatedTracker";
// import SplineBackgroundThree from "./components/SplineBackground/SplineBackgroundThree.js";

export const Context = React.createContext();

function App() {
  const [pagesInfo, setPagesInfo] = useState({
    currentPage: 0,
    pages: undefined,
  });
  const [pageApi, setPageApi] = useState();
  const [splineObject, setSplineObject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const [isHoverSnap, setIsHoverSnap] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const value = {
    pagesInfo,
    setPagesInfo,
    setPageApi,
    pageApi,
    setSplineObject,
    splineObject,
    setIsLoading,
    isLoading,
    setIsHover,
    setIsHoverSnap,
    setIsLoaded,
    isLoaded,
  };

  return (
    <>
      <Context.Provider value={value}>
        <Loader isLoading={isLoading} />
        <div style={isLoading ? { opacity: 0 } : { opacity: 1 }}>
          <MouseTracker
            render={(props) => {
              return (
                <AnimatedTracker
                  pos={props.pos}
                  opacity={props.trackerOpacity}
                  isHover={isHover}
                  isHoverSnap={isHoverSnap}
                />
              );
            }}
          />
          <NavFixed />
          <DisplayPages />
          <Footer />
          <SplineBackground />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
