import React from "react";
import { Display, GooeySpinner } from "./Loader.styled";

export default function Loader() {
  return (
    <Display>
      <GooeySpinner
        width={300}
        height={300}
        period={1}
        nBlobs={20}
        colors={["turquoise", "orchid"]}
      />
      <h1 style={{ position: "absolute", color: "white" }}> LOADING </h1>
    </Display>
  );
}
