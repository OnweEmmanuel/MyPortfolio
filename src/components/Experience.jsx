import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { experience } from "../data.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

// Career as a `git log`: the rail fills in as you scroll past each commit.
export default function Experience() {
  const graphRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: graphRef, offset: ["start 60%", "end 60%"] });

  return (
    <section className="block experience" id="work">
      <span className="ghost-text" aria-hidden="true">
        git log
      </span>
      <div className="wrap">
        <BlockHead title="Experience" cmd="$ git log --oneline --career" />
        <div className="graph" ref={graphRef}>
          <div className="rail" aria-hidden="true">
            <motion.div className="rail-fill" style={{ scaleY: scrollYProgress }} />
          </div>
          {experience.map((job) => (
            <Reveal as="article" variant="left" key={job.hash} className={`commit${job.head ? " is-head" : ""}`}>
              <div>
                <div className="hash">
                  {job.hash}
                  {job.head && <em>HEAD</em>}
                </div>
                <div className="when">{job.date}</div>
              </div>
              <div>
                <h3>{job.company}</h3>
                <p className="role">{job.role}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
