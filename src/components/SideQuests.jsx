import { motion, useReducedMotion } from "motion/react";
import { nowPlaying, sideQuests } from "../data.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

function StatBar({ label, value }) {
  const reduceMotion = useReducedMotion();
  const width = `${Math.min(value, 100)}%`;
  return (
    <div className="quest-stat">
      <div className="quest-stat-label">
        <span>{label}</span>
        <b>{value}%</b>
      </div>
      <div className="quest-bar" role="presentation">
        <motion.i
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
          style={reduceMotion ? { width } : undefined}
        />
      </div>
    </div>
  );
}

// Hobbies as game achievement cards, so the page isn't only serious.
export default function SideQuests() {
  return (
    <section className="block side-quests" id="side-quests">
      <span className="ghost-text" aria-hidden="true">
        afk
      </span>
      <div className="wrap">
        <BlockHead title={<>Side quests<span className="accent">.</span></>} cmd="cat ~/.hobbies" cmdClassName="yellow" />
        <Reveal className="now-playing">
          {nowPlaying.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>
        <div className="quest-grid">
          {sideQuests.map((quest, i) => (
            <Reveal key={quest.title} as="article" className="quest" delay={(i % 3) * 0.1}>
              <div className="quest-top">
                <span className="quest-icon" aria-hidden="true">
                  {quest.icon}
                </span>
                <span className="quest-tag">{quest.tag}</span>
              </div>
              <h3>{quest.title}</h3>
              <p>{quest.text}</p>
              <StatBar {...quest.stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
