import { experience } from "../data.js";
import { padIndex } from "../utils.js";

export default function Experience() {
  return (
    <section id="experience" className="section section-muted">
      <div className="container">
        <p className="section-label fade-in">// section_02</p>
        <h2 className="fade-in">Experience</h2>
        <div className="experience-list">
          {experience.map((job, index) => (
            <article key={`${job.company}-${job.role}`} className="experience-row fade-in">
              <div className="experience-meta">
                <span className="experience-index">{padIndex(index)}</span>
                <p className="date">{job.date}</p>
              </div>
              <div className="experience-heading">
                <h3>{job.company}</h3>
                <p className="role">{job.role}</p>
              </div>
              <ul className="experience-points">
                {job.points.map((point) => (
                  <li key={point}>
                    <span className="point-marker" aria-hidden="true">
                      ›
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
