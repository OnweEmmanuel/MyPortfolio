import { education } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import SkillChips from "./SkillChips.jsx";
import { ArrowUpRight } from "./icons.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading label="// section_03" title="Education" file="// education.log" />
        <div className="education-grid">
          {education.map((school) => (
            <article key={school.code} className="education-card fade-in">
              <a
                className="education-identity"
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${school.name} website`}
              >
                <div className="education-visual" aria-hidden="true">
                  <div className="tech-grid"></div>
                  <div className="education-visual-inner">
                    <span className="education-code">{school.code}</span>
                    <svg
                      className={`education-mark education-mark-${school.mark}`}
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2" y="2" width="52" height="52" stroke="currentColor" strokeWidth="1.5" />
                      <path d={school.markPath} fill="currentColor" />
                    </svg>
                    <span className="education-signal">{school.signal}</span>
                  </div>
                </div>
                <h3>
                  {school.name}
                  <ArrowUpRight className="education-identity-icon" />
                </h3>
              </a>
              <div className="education-body">
                <p className="education-qualification">{school.qualification}</p>
                <p className="education-field">{school.field}</p>
                <p className="education-dates">{school.dates}</p>
                <SkillChips skills={school.skills} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
