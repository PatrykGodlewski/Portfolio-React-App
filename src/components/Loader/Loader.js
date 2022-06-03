import React, { useRef, useEffect, useState, useContext } from "react";
import { Display, Block, LoadingText, LoadingDiv } from "./Loader.styled";
import { gsap, Power1, Expo } from "gsap";
import { Context } from "../../App";

const AMOUNT = [...Array(12).keys()];

export default function Loader({ isLoading }) {
  const blockRef = useRef([]);
  const loaderRef = useRef([]);
  const [hide, setHide] = useState(false);

  const { setIsLoaded } = useContext(Context);

  useEffect(() => {
    if (!isLoading) return;
    gsap.to(loaderRef.current, {
      y: -30,
      opacity: 0,
      duration: 1.3,
      ease: Expo.easeInOut,
      delay: 1.5,
    });
    gsap.to(blockRef.current, {
      duration: 0.8,
      ease: Power1.easeInOut,
      stagger: 0.04,
      delay: 2,
      width: 0,
      onComplete: () => {
        setHide(true);
        setIsLoaded(true);
      },
    });
  }, [isLoading]);
  return (
    !hide && (
      <Display>
        {AMOUNT.map((item, i) => (
          <div
            key={i}
            style={{ width: `${100 / AMOUNT.length}%`, height: "100vh" }}
          >
            <Block
              ref={(el) => blockRef.current.push(el)}
              amount={AMOUNT.length}
            />
          </div>
        ))}
        <LoadingText ref={loaderRef}>
          <span>LOADING</span>
          <LoadingDiv />
        </LoadingText>
      </Display>
    )
  );
}

// return (
//   <Display>
//     <GooeySpinner
//       width={300}
//       height={300}
//       period={1}
//       nblobs={20}
//       colors={["turquoise", "orchid"]}
//     />
//     <h1
//       style={{
//         position: "absolute",
//         color: "white",
//         fontSize: "20px",
//         fontWeight: 300,
//         letterSpacing: "1rem",
//         fontFamily: "Montserrat",
//       }}
//     >
//       {" "}
//       LOADING{" "}
//     </h1>
//   </Display>
// );
