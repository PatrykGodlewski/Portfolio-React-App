import React, { useEffect, useState } from "react";

export default function MouseTracker({ render }) {
  const [pos, setPos] = useState();

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return render(pos);
}
