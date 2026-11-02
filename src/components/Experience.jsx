import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { experience, experienceSummary } from "../data.js";
import { formatDuration, formatMonth } from "../utils.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

const PointList = ({ points }) => (
  <ul className="commit-points">
    {points.map((point) => (
      <li key={point}>{point}</li>
    ))}
  </ul>
);

function Commit({ job }) {
  const duration = formatDuration(job.start, job.end);
  const sameYear = job.start === job.end;
  const tags = job.stack ?? job.focus;

  return (
    <Reveal as="article" variant="left" className="commit">
      <div className="commit-meta">
        <div className="hash">
          {job.hash}
          {job.head && <em>HEAD</em>}
        </div>
        <p className="when">
          <time dateTime={job.start}>{formatMonth(job.start)}</time>
          {!sameYear && (
            <>
              {" → "}
              <time dateTime={job.end}>{formatMonth(job.end)}</time>
            </>
          )}
        </p>
        {duration && <p className="duration">{duration}</p>}
      </div>
      <div className="commit-body">
        <h3>{job.company}</h3>
        <p className="role">{job.role}</p>
        <p className="commit-summary">{job.summary}</p>
        {job.groups ? (
          <div className="commit-groups">
            {job.groups.map((group) => (
              <section key={group.title}>
                <h4>// {group.title}</h4>
                <PointList points={group.points} />
              </section>
            ))}
          </div>
        ) : (
          <PointList points={job.points} />
        )}
        <div className="commit-tags">
          <span>{job.stack ? "stack" : "focus"}</span>
          <ul aria-label={job.stack ? "Technologies" : "Areas of work"}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

// Career as a `git log`: the rail fills in as you scroll, and each commit
// node is wired to its card with current running along the wire.
export default function Experience() {
  const graphRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: graphRef, offset: ["start 60%", "end 60%"] });

  return (
    <section className="block experience" id="work">
      <span className="ghost-text" aria-hidden="true">
        git log
      </span>
      <div className="wrap">
        <BlockHead title="Experience" cmd="$ git log --stat --career" />
        <Reveal as="dl" className="exp-stat">
          {experienceSummary.map(({ value, label }) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </Reveal>
        <div className="graph" ref={graphRef}>
          <div className="rail" aria-hidden="true">
            <motion.div className="rail-fill" style={{ scaleY: scrollYProgress }} />
          </div>
          {experience.map((job) => (
            <div key={job.hash} className={`commit-row${job.head ? " is-head" : ""}`}>
              <span className="node" aria-hidden="true"></span>
              <span className="wire" aria-hidden="true"></span>
              <Commit job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
