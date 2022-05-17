import React, { useEffect, useState } from "react";
import NavFixed from "./components/NavFixed/NavFixed";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import DisplayPages from "./components/DisplayPages/DisplayPages";
import SplineBackground from "./components/SplineBackground/SplineBackground";
import MouseTracker from "./components/MouseTracker/MouseTracker";
import TestTracker from "./components/MouseTracker/Trackers/TestTracker";
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

  const value = {
    pagesInfo,
    setPagesInfo,
    setPageApi,
    pageApi,
    setSplineObject,
    splineObject,
    setIsLoading,
    isLoading,
  };

  return (
    <>
      <Context.Provider value={value}>
        {isLoading && <Loader />}
        <div style={isLoading ? { opacity: 0 } : { opacity: 1 }}>
          <MouseTracker
            render={(props) => {
              return <TestTracker pos={props} />;
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
