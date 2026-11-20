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

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Circuits />

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
            <span className="highlight">actually ship</span>
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

        <div className="stage" aria-hidden="true">
          <div className="blob"></div>
          <CodeEditor />
          <div className="sticker" style={{ right: -6, bottom: 44, "--r": "6deg" }}>
            since 2019
          </div>
          <div
            className="sticker"
            style={{ left: -14, top: 30, background: "var(--cream)", "--r": "-8deg" }}
            title={`Moving from ${location.from} to ${location.to}`}
          >
            {location.route}
          </div>
        </div>
      </div>
    </header>
  );
}
