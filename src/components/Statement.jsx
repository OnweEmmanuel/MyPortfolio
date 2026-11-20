import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { statement } from "../data.js";

const words = statement.split(" ").map((word) => ({
  text: word.replaceAll("*", ""),
  hot: word.startsWith("*"),
}));

// Each word goes from faint to solid as its slice of the scroll range passes.
function Word({ progress, index, hot, children }) {
  const start = (index / words.length) * 0.85;
  const opacity = useTransform(progress, [start, start + 0.85 / words.length], [0.12, 1]);
  return (
    <>
      <motion.span className={hot ? "hot" : undefined} style={{ opacity }}>
        {children}
      </motion.span>{" "}
    </>
  );
}

// A sentence pinned to the screen that lights up word by word as you scroll.
export default function Statement() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="statement" ref={ref} style={reduceMotion ? { height: "auto" } : undefined}>
      <div className="statement-pin">
        <div className="wrap">
          <span className="kicker">// what I actually do</span>
          <p className="big-say">
            {words.map((word, i) =>
              reduceMotion ? (
                <span key={i} className={word.hot ? "hot" : undefined}>
                  {word.text}{" "}
                </span>
              ) : (
                <Word key={i} progress={scrollYProgress} index={i} hot={word.hot}>
                  {word.text}
                </Word>
              )
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
