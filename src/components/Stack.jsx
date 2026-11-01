import { useRef } from "react";
import { useAnimationFrame, useReducedMotion } from "motion/react";
import { stackRings } from "../data.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

const chips = stackRings.flatMap((ring) =>
  ring.skills.map(([name, style], i) => ({
    name,
    style,
    inset: ring.inset,
    seconds: ring.seconds,
    angle: (360 / ring.skills.length) * i + (ring.offset ?? 0),
  }))
);

// Skills circling a core on three rings. Chips are positioned every frame
// (rather than rotating the ring) so their labels always stay upright.
function Orbit() {
  const orbitRef = useRef(null);
  const chipRefs = useRef([]);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((time) => {
    const size = orbitRef.current?.offsetWidth ?? 0;
    const seconds = reduceMotion ? 0 : time / 1000;

    chips.forEach((chip, i) => {
      const el = chipRefs.current[i];
      if (!el) {
        return;
      }
      const radius = size / 2 - (size * chip.inset) / 100;
      const angle = ((chip.angle + (seconds * 360) / chip.seconds) * Math.PI) / 180;
      el.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
    });
  });

  return (
    <div className="orbit" ref={orbitRef}>
      {stackRings.map((ring) => (
        <div
          key={ring.inset}
          className="orbit-ring"
          style={{ inset: `${ring.inset}%`, animationDuration: `${ring.seconds}s` }}
          aria-hidden="true"
        />
      ))}
      <div className="orbit-core" aria-hidden="true">
        {"{ }"}
      </div>
      {chips.map((chip, i) => (
        <div key={chip.name} ref={(el) => (chipRefs.current[i] = el)} className={`orbit-chip ${chip.style ?? ""}`}>
          <span>{chip.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <section className="block stack" id="stack">
      <div className="wrap">
        <BlockHead title={<>The stack<span className="accent">.</span></>} cmd="package.json" cmdClassName="yellow" />
        <div className="stack-grid">
          <Reveal variant="pop">
            <Orbit />
          </Reveal>
          <Reveal as="pre" className="pkg" delay={0.15} aria-label="Tech stack written as a package.json file">
            <span className="p">{"{"}</span>
            {"\n  "}<span className="k">"name"</span>: <span className="s">"emmanuel-onwe"</span>,
            {"\n  "}<span className="k">"version"</span>: <span className="s">"7.0.0"</span>, <span className="p">// years in</span>
            {"\n  "}<span className="k">"dependencies"</span>: <span className="p">{"{"}</span>
            {"\n    "}<span className="k">"laravel"</span>: <span className="s">"^11"</span>,  <span className="k">"dotnet"</span>: <span className="s">"^8"</span>,
            {"\n    "}<span className="k">"react"</span>: <span className="s">"^19"</span>,    <span className="k">"angular"</span>: <span className="s">"^18"</span>,
            {"\n    "}<span className="k">"typescript"</span>: <span className="s">"^5"</span>,
            {"\n    "}<span className="k">"mysql"</span>: <span className="s">"*"</span>, <span className="k">"redis"</span>: <span className="s">"*"</span>, <span className="k">"docker"</span>: <span className="s">"*"</span>
            {"\n  "}<span className="p">{"}"}</span>,
            {"\n  "}<span className="k">"scripts"</span>: <span className="p">{"{"}</span>
            {"\n    "}<span className="k">"hire"</span>: <span className="o">"email cyberkuv@gmail.com"</span>
            {"\n  "}<span className="p">{"}"}</span>
            {"\n"}<span className="p">{"}"}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
