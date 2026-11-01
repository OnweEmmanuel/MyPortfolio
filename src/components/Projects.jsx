import { projects } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowUpRight } from "./icons.jsx";

function ProjectGlyph({ type }) {
  if (type === "dice") {
    return (
      <div className="project-glyph project-glyph-dice">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    );
  }
  return <div className="project-glyph project-glyph-php">&lt;?php</div>;
}

export default function Projects() {
  return (
    <section id="projects" className="section section-muted">
      <div className="container">
        <SectionHeading label="// section_04" title="Projects" file="// projects.log" />
        <p className="projects-status">
          <span className="accent">//</span> more projects coming soon
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.code} className="project-card fade-in">
              <div className="project-visual" aria-hidden="true">
                <div className="tech-grid"></div>
                <div className="project-visual-inner">
                  <span className="project-code">{project.code}</span>
                  <ProjectGlyph type={project.glyph} />
                  <span className="project-signal">{project.signal}</span>
                </div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="code-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} code`}
                >
                  View Code
                  <ArrowUpRight className="code-link-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
