import { education } from "../data.js";
import { padIndex } from "../utils.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section className="block education" id="education">
      <span className="ghost-text" aria-hidden="true">
        learn()
      </span>
      <div className="wrap">
        <BlockHead title={<>Education<span className="accent">.</span></>} cmd="cat education.log" cmdClassName="yellow" />
        <div className="edu-grid">
          {education.map((school, i) => (
            <Reveal
              as="a"
              key={school.name}
              delay={i * 0.12}
              className="edu-card"
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${school.name}: ${school.qualification} (opens their website)`}
            >
              <span className="edu-code">EDU_{padIndex(i)}</span>
              <h3>
                {school.name}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{school.qualification}</p>
              <p className="edu-dates">
                {school.field} · {school.dates}
              </p>
              <div className="chips">
                {school.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
