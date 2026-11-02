import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

const INTERACTIVE = "a, button, input, summary, .win, .edu-card";

// Orange dot that tracks the mouse, plus a trailing ring that grows over clickable things.
export default function Cursor() {
  const hasMouse = useMediaQuery("(pointer: fine)");
  const reduceMotion = useReducedMotion();
  const enabled = hasMouse && !reduceMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setHovering(Boolean(event.target.closest?.(INTERACTIVE)));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div className="cursor" style={{ x, y }} aria-hidden="true" />
      <motion.div className={`cursor-ring${hovering ? " big" : ""}`} style={{ x: ringX, y: ringY }} aria-hidden="true" />
    </>
  );
}
