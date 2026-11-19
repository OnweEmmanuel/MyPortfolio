import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import Matter from "matter-js";
import { stackGroups } from "../data.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

const { Engine, Bodies, Body, Composite, Constraint } = Matter;

const chips = stackGroups.flatMap((group) => group.skills.map((name) => ({ name, group: group.label })));

const WALL = 400; // thickness of the invisible walls
const STEP = 1000 / 60; // physics step, ms
const MAX_THROW = 24; // px per step a released chip may fly at
const SPAWN_EVERY = 70; // ms between chips joining the drop
const GAP = 3; // px between neighbouring chips in a row
const FILL = 0.92; // how much of the tank the pile should reach beside the card
const HEADROOM = 56; // px above the pile on a phone, for the hint and a throw
const SIDE_BY_SIDE = "(min-width: 961px)"; // tank beside the card, same height

const shuffle = (list) => list.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(([, v]) => v);

// Tetris-style placement on a skyline (stack height per px column): each chip,
// in drop order, goes where it would land lowest, leftmost on ties. Returns
// each chip's left edge and the height its bottom rests at, plus the pile's
// top. Chips never rotate, so every one lands flat and readable.
function plan(sizes, width, order) {
  const sky = new Float64Array(Math.max(1, Math.floor(width)));
  const spots = [];
  let top = 0;
  for (const i of order) {
    const w = Math.min(Math.ceil(sizes[i].w + GAP), sky.length);
    let bestX = 0;
    let bestY = Infinity;
    for (let x = 0; x + w <= sky.length; x += 2) {
      let y = 0;
      for (let k = x; k < x + w; k++) if (sky[k] > y) y = sky[k];
      if (y < bestY) {
        bestY = y;
        bestX = x;
      }
    }
    // Gap sideways only: stacked rows rest on each other.
    for (let k = bestX; k < bestX + w; k++) sky[k] = bestY + sizes[i].h;
    spots[i] = { x: bestX + GAP / 2, bottom: bestY };
    top = Math.max(top, bestY + sizes[i].h);
  }
  return { spots, top };
}

const measure = (els) => els.map((el) => ({ w: el.offsetWidth, h: el.offsetHeight }));

// Sets up one drop. Beside the card the tank's height is fixed, so the chips
// are scaled until the planned pile fills about FILL of it; stacked on a
// phone the tank instead fits the pile at normal size plus HEADROOM.
function buildPile(box, els) {
  const width = box.clientWidth;
  const order = shuffle(els.map((_, i) => i));
  let height;

  box.style.setProperty("--chip-scale", "1");
  if (window.matchMedia(SIDE_BY_SIDE).matches) {
    box.style.height = "";
    height = box.clientHeight;
    const base = measure(els);
    let scale = 1;
    for (let pass = 0; pass < 3; pass++) {
      const scaled = base.map(({ w, h }) => ({ w: w * scale, h: h * scale }));
      const { top } = plan(scaled, width, order);
      scale *= Math.sqrt((height * FILL) / Math.max(top, 1));
      scale = Math.min(Math.max(scale, 0.75), 1.6);
    }
    box.style.setProperty("--chip-scale", scale.toFixed(3));
  }

  const sizes = measure(els);
  const { spots, top } = plan(sizes, width, order);
  if (height === undefined) {
    height = Math.round(Math.max(260, top + HEADROOM));
    box.style.height = `${height}px`;
  }

  // Extra solver passes keep stacked rows from sinking into each other.
  const engine = Engine.create({ positionIterations: 12, velocityIterations: 8 });
  const chipH = Math.max(...sizes.map((sz) => sz.h));
  const spawnTop = -chipH - 24; // ceiling during the drop: just above the spawn line
  const side = height - spawnTop;
  // Frictionless walls, so a thrown chip can't cling to them.
  const wall = { isStatic: true, friction: 0, frictionStatic: 0 };
  const ceiling = Bodies.rectangle(width / 2, spawnTop - WALL / 2, width + WALL * 2, WALL, wall);
  Composite.add(engine.world, [
    Bodies.rectangle(width / 2, height + WALL / 2, width + WALL * 2, WALL, { isStatic: true }),
    Bodies.rectangle(-WALL / 2, spawnTop + side / 2, WALL, side + WALL * 2, wall),
    Bodies.rectangle(width + WALL / 2, spawnTop + side / 2, WALL, side + WALL * 2, wall),
    ceiling,
  ]);

  // Each chip waits above its column and falls straight into its slot.
  // Infinite inertia: chips slide and stack but never tip over.
  const bodies = sizes.map(({ w, h }, i) =>
    Bodies.rectangle(spots[i].x + w / 2, -h / 2 - 4, w, h, {
      chamfer: { radius: Math.min(6, h / 2) },
      inertia: Infinity,
      restitution: 0,
      friction: 0.9,
      frictionStatic: 1,
      frictionAir: 0.01,
      density: 0.002,
    })
  );
  return { engine, bodies, sizes, width, height, queue: order, spawnIn: 0, ceiling, lowered: false };
}

// Every tool as a chip in a tank with real physics. They drop in like Tetris
// pieces when the section comes into view; grab one to drag or throw it.
// Empty space in the tank still scrolls the page on touch screens.
function ChipPile() {
  const reduceMotion = useReducedMotion();
  const boxRef = useRef(null);
  const chipRefs = useRef([]);
  const [drop, setDrop] = useState(0);
  const [grabbed, setGrabbed] = useState(-1);
  const pile = useRef(null);
  const drag = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const box = boxRef.current;
    const sideBySide = window.matchMedia(SIDE_BY_SIDE);
    let frame = 0;
    let visible = false;
    let last = 0;
    let lag = 0;
    let lastW = box.clientWidth;
    let lastH = box.clientHeight;
    let cancelled = false;

    const render = () => {
      const p = pile.current;
      if (!p) return;
      p.bodies.forEach((body, i) => {
        const el = chipRefs.current[i];
        const { w, h } = p.sizes[i];
        el.style.transform = `translate3d(${body.position.x - w / 2}px, ${body.position.y - h / 2}px, 0)`;
      });
    };

    const loop = (time) => {
      frame = requestAnimationFrame(loop);
      if (!visible || !pile.current) {
        last = time;
        return;
      }
      lag = Math.min(lag + (time - (last || time)), STEP * 4);
      last = time;
      const p = pile.current;
      while (lag >= STEP) {
        p.spawnIn -= STEP;
        if (p.queue.length && p.spawnIn <= 0) {
          const body = p.bodies[p.queue.shift()];
          Body.setVelocity(body, { x: 0, y: 8 });
          Composite.add(p.engine.world, body);
          p.spawnIn = SPAWN_EVERY;
        }
        // Once every chip is in, the ceiling drops to the tank's top edge,
        // so a thrown chip can't hide behind the legend bar.
        if (!p.queue.length && !p.lowered && p.bodies.every((b, i) => b.position.y - p.sizes[i].h / 2 > 2)) {
          Body.setPosition(p.ceiling, { x: p.width / 2, y: -WALL / 2 });
          p.lowered = true;
        }
        Engine.update(p.engine, STEP);
        lag -= STEP;
      }
      render();
    };

    const rebuild = () => {
      if (pile.current) Engine.clear(pile.current.engine);
      pile.current = buildPile(box, chipRefs.current);
      lastW = box.clientWidth;
      lastH = box.clientHeight;
      render();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && entry.intersectionRatio > 0.25 && !pile.current && !cancelled) rebuild();
      },
      { threshold: [0, 0.25] }
    );

    // New size, new walls: drop again. On a phone the script sets the
    // height itself, so only width counts there.
    const ro = new ResizeObserver(() => {
      if (!pile.current) return;
      const dw = Math.abs(box.clientWidth - lastW);
      const dh = sideBySide.matches ? Math.abs(box.clientHeight - lastH) : 0;
      if (dw > 2 || dh > 2) rebuild();
    });

    // Fonts change chip widths, so measure once they're in.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      io.observe(box);
      ro.observe(box);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      if (pile.current) Engine.clear(pile.current.engine);
      pile.current = null;
      drag.current = null;
    };
  }, [reduceMotion, drop]);

  const pointIn = (event) => {
    const rect = boxRef.current.getBoundingClientRect();
    const p = pile.current;
    return {
      x: Math.min(Math.max(event.clientX - rect.left, 0), p.width),
      y: Math.min(Math.max(event.clientY - rect.top, 0), p.height),
    };
  };

  const grab = (i) => (event) => {
    const p = pile.current;
    if (!p || drag.current || event.button > 0 || p.queue.includes(i)) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const body = p.bodies[i];
    const at = pointIn(event);
    const constraint = Constraint.create({
      pointA: at,
      bodyB: body,
      pointB: { x: at.x - body.position.x, y: at.y - body.position.y },
      stiffness: 0.2,
      damping: 0.1,
      length: 0,
    });
    Composite.add(p.engine.world, constraint);
    drag.current = { constraint, body, id: event.pointerId };
    setGrabbed(i);
  };

  const move = (event) => {
    const d = drag.current;
    if (!d || d.id !== event.pointerId) return;
    d.constraint.pointA = pointIn(event);
  };

  const release = (event) => {
    const d = drag.current;
    if (!d || d.id !== event.pointerId) return;
    Composite.remove(pile.current.engine.world, d.constraint);
    const v = d.body.velocity;
    const speed = Math.hypot(v.x, v.y);
    if (speed > MAX_THROW) Body.setVelocity(d.body, { x: (v.x / speed) * MAX_THROW, y: (v.y / speed) * MAX_THROW });
    drag.current = null;
    setGrabbed(-1);
  };

  return (
    <div className="pile">
      <div className="pile-bar">
        <ul className="pile-legend">
          {stackGroups.map((group) => (
            <li key={group.label} className={`g-${group.label}`}>
              {group.label} <b>{group.skills.length}</b>
            </li>
          ))}
        </ul>
        {!reduceMotion && (
          <button type="button" className="pile-again" onClick={() => setDrop((n) => n + 1)}>
            ↻ drop again
          </button>
        )}
      </div>

      <div ref={boxRef} className={`pile-tank ${reduceMotion ? "still" : ""}`} aria-hidden="true">
        {!reduceMotion && <span className="pile-hint">grab · throw · stack</span>}
        {chips.map((chip, i) => (
          <span
            key={chip.name}
            ref={(el) => (chipRefs.current[i] = el)}
            className={`pile-chip g-${chip.group} ${grabbed === i ? "grabbed" : ""}`}
            onPointerDown={grab(i)}
            onPointerMove={move}
            onPointerUp={release}
            onPointerCancel={release}
          >
            {chip.name}
          </span>
        ))}
      </div>

      {/* The pile is decoration; this is the same list for screen readers. */}
      <div className="sr-only">
        {stackGroups.map((group) => (
          <p key={group.label}>
            {group.label}: {group.skills.join(", ")}.
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="block stack" id="stack">
      <div className="wrap">
        <BlockHead title={<>The stack<span className="accent">.</span></>} cmd="package.json" cmdClassName="yellow" />
        <div className="stack-grid">
          <Reveal className="pile-col">
            <ChipPile />
          </Reveal>
          <Reveal as="pre" className="pkg" delay={0.15} aria-label="Tech stack written as a package.json file">
            <span className="p">{"{"}</span>
            {"\n  "}<span className="k">"name"</span>: <span className="s">"emmanuel-onwe"</span>,
            {"\n  "}<span className="k">"version"</span>: <span className="s">"7.0.0"</span>, <span className="p">// years in</span>
            {"\n  "}<span className="k">"dependencies"</span>: <span className="p">{"{"}</span>
            {"\n    "}<span className="k">"laravel"</span>: <span className="s">"^13"</span>, <span className="k">"dotnet"</span>: <span className="s">"^8"</span>,
            {"\n    "}<span className="k">"react"</span>: <span className="s">"^19"</span>, <span className="k">"angular"</span>: <span className="s">"^22"</span>,
            {"\n    "}<span className="k">"flutter"</span>: <span className="s">"^3"</span>, <span className="k">"kotlin"</span>: <span className="s">"^2"</span>,
            {"\n    "}<span className="k">"typescript"</span>: <span className="s">"^5"</span>, <span className="k">"tailwindcss"</span>: <span className="s">"^4"</span>,
            {"\n    "}<span className="k">"postgresql"</span>: <span className="s">"*"</span>, <span className="k">"mysql"</span>: <span className="s">"*"</span>,
            {"\n    "}<span className="k">"redis"</span>: <span className="s">"*"</span>, <span className="k">"docker"</span>: <span className="s">"*"</span>,
            {"\n    "}<span className="k">"remotion"</span>: <span className="s">"^4"</span>
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
