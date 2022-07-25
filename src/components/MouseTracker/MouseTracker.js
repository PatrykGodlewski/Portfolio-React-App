import { useEffect, useState } from "react";
import lerp from "../../helpers/lerp";

export default function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0, delayedX: 0, delayedY: 0 });
  const [trackerOpacity, setTrackerOpacity] = useState(1);
  let onceDone = false;
  let rawY = 0;
  let rawX = 0;

  useEffect(() => {
    if (!onceDone) handleAnimation();
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (e) => {
    rawX = e.clientX;
    rawY = e.clientY;
  };
  const handleMouseLeave = (e) => setTrackerOpacity(0);
  const handleMouseEnter = (e) => setTrackerOpacity(1);

  const handleAnimation = () => {
    const interpolationRate = 0.5; // default in lerp func is 0.2
    onceDone = true;
    setPos((prev) => ({
      x: lerp(prev.x, rawX, interpolationRate),
      y: lerp(prev.y, rawY, interpolationRate),
      delayedY: lerp(prev.delayedY, rawY, 0.1),
      delayedX: lerp(prev.delayedX, rawX, 0.1),
    }));
    requestAnimationFrame(handleAnimation);
  };

  return render({ pos, trackerOpacity });
}
