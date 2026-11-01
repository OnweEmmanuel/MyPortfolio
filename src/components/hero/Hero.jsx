import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Circuits from "./Circuits.jsx";
import CodeEditor from "./CodeEditor.jsx";
import { location } from "../../data.js";

const LETTER_STAGGER_MS = 55;

// Splits text into letters that rise in one after another, starting at letter `from`.
function RisingText({ text, from, className }) {
  return (
    <span className={className}>
      {[...text].map((char, i) => (
        <span key={i} className="ch" style={{ animationDelay: `${250 + (from + i) * LETTER_STAGGER_MS}ms` }}>
          {char}
        </span>
      ))}
    </span>
  );
}

// Moves with the mouse; positive depth follows the pointer, negative moves against it.
function Parallax({ mouse, depth, className = "glyph", style, children }) {
  const x = useTransform(mouse.x, (v) => v * depth);
  const y = useTransform(mouse.y, (v) => v * depth);
  return (
    <motion.div className={className} style={{ ...style, x, y }} aria-hidden="true">
      {children}
    </motion.div>
  );
}

function useMouseOffset() {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }
    const handleMove = (event) => {
      rawX.set(event.clientX / window.innerWidth - 0.5);
      rawY.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, rawX, rawY]);

  return { x, y };
}

export default function Hero() {
  const mouse = useMouseOffset();

  return (
    <header className="hero" id="top">
      <Circuits />

      <Parallax mouse={mouse} depth={30} className="glyph glyph-top" style={{ left: "36%", top: "11%", fontSize: 54, color: "var(--orange)" }}>
        <span className="glyph-inner" style={{ "--r": "-12deg", animation: "bob 6s ease-in-out infinite" }}>{"{ }"}</span>
      </Parallax>
      <Parallax mouse={mouse} depth={-24} style={{ left: "44%", top: "18%", fontSize: 34, color: "var(--green)", opacity: 0.5 }}>
        {"</>"}
      </Parallax>
      <Parallax mouse={mouse} depth={40} style={{ left: "46%", bottom: "12%", fontSize: 42, color: "var(--orange)", opacity: 0.8 }}>
        {"=>"}
      </Parallax>
      <Parallax mouse={mouse} depth={-36} style={{ right: "3%", bottom: "8%", fontSize: 30, color: "var(--green)", opacity: 0.5 }}>
        $_
      </Parallax>
      <Parallax mouse={mouse} depth={18} style={{ left: "3%", bottom: "5%", fontSize: 26, color: "var(--green)", opacity: 0.35 }}>
        01101
      </Parallax>

      <div className="wrap hero-grid">
        <div>
          <span className="status-tag">
            <i></i>open to projects worldwide
          </span>
          <h1 aria-label="Emmanuel Onwe">
            <span className="line" aria-hidden="true">
              <RisingText text="Emmanuel" from={0} />
            </span>
            <span className="line" aria-hidden="true">
              <RisingText text="Onwe" from={8} className="accent" />
              <RisingText text="." from={12} className="outline" />
            </span>
          </h1>
          <p className="lede">
            Full-stack engineer. I build web apps and business sites that{" "}
            <span className="highlight">actually ship.</span>
          </p>
          <div className="btns">
            <a className="btn btn-orange" href="#projects">
              See my work ↓
            </a>
            <a className="btn btn-outline" href="#contact">
              Say hello ↗
            </a>
          </div>
        </div>

        <Parallax mouse={mouse} depth={-12} className="stage">
          <div className="blob"></div>
          <div className="spin-ring"></div>
          <div className="spin-ring small"></div>
          <CodeEditor />
          <div className="sticker" style={{ right: -6, bottom: 44, "--r": "6deg" }}>
            since 2019 ✦
          </div>
          <div
            className="sticker"
            style={{ left: -14, top: 30, background: "var(--cream)", "--r": "-8deg", animationDelay: "0.8s" }}
            title={`Moving from ${location.from} to ${location.to}`}
          >
            {location.route} ✈
          </div>
        </Parallax>
      </div>
    </header>
  );
}
