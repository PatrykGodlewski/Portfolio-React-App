import React, { useEffect } from "react";
import { AnimatedTrackerStyled, Circle, Snap } from "./AnimatedTracker.styled";

export default function AnimatedTracker({
  pos,
  opacity,
  isHover,
  isHoverSnap,
}) {
  const options = {
    size: 8,
  };
  const ratio = 3;

  const isDatasetMenu =
    isHoverSnap?.event?.target?.parentNode?.parentNode?.dataset?.menu;

  const snapStyle = {
    transition: isHoverSnap.isHoverSnap && "all 250ms ease-in-out",
    left: isHoverSnap.isHoverSnap
      ? isHoverSnap.event.target.getBoundingClientRect().x +
        isHoverSnap.event.target.getBoundingClientRect().height / 2 -
        (options.size * (ratio / 2)) / 2
      : pos.delayedX - (options.size * (ratio / 2)) / 2,
    top: isHoverSnap.isHoverSnap
      ? isHoverSnap.event.target.getBoundingClientRect().y +
        isHoverSnap.event.target.getBoundingClientRect().height / 2 -
        (options.size * (ratio / 2)) / 2
      : pos.delayedY - (options.size * (ratio / 2)) / 2,
    backgroundColor: isHoverSnap.isHoverSnap && isDatasetMenu && "transparent",
    border: isHoverSnap.isHoverSnap && isDatasetMenu && "1px solid #f85555",
    transform: isHoverSnap.isHoverSnap && isDatasetMenu && "scale(8.5)",
    borderRadius: isHoverSnap.isHoverSnap && isDatasetMenu && "0",
  };

  useEffect(() => {
    // console.log(isHoverSnap?.event.target.parentNode.parentNode.dataset.menu);
  });

  return (
    <>
      <AnimatedTrackerStyled
        style={{
          left: pos.x - options.size / 2,
          top: pos.y - options.size / 2,
        }}
        opacity={opacity}
        size={options.size}
        fill={"#fff"}
        isHover={isHover}
      />
      <Circle
        style={{
          left: pos.delayedX - (options.size * ratio) / 2,
          top: pos.delayedY - (options.size * ratio) / 2,
        }}
        opacity={opacity}
        size={options.size * ratio}
        fill={"#fff"}
        isHover={isHover}
      />
      <Snap
        style={snapStyle}
        size={options.size * (ratio / 2)}
        fill={"#f85555"}
        snap={isHoverSnap}
        opacity={opacity}
      />
    </>
  );
}

// top: ${({ snap }) =>
// snap.isHoverSnap ? snap.event.screenY + "!important" : "initial"};
