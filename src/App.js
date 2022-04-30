import React, { useEffect, useState } from "react";
import NavFixed from "./components/NavFixed/NavFixed";
import Footer from "./components/Footer/Footer";
import { DisplayPages } from "./components/DisplayPages/DisplayPages";

export const Context = React.createContext();

function App() {
  const [pagesInfo, setPagesInfo] = useState({
    currentPage: 0,
    pages: undefined,
  });
  const [pageApi, setPageApi] = useState();

  const value = {
    pagesInfo,
    setPagesInfo,
    setPageApi,
    pageApi,
  };

  return (
    <>
      <Context.Provider value={value}>
        <NavFixed />
        <DisplayPages />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
