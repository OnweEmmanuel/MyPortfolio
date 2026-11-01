import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { projects } from "../data.js";
import BlockHead from "./BlockHead.jsx";

const PRICE_LINE = "M0 150 L40 138 L80 146 L120 112 L160 120 L200 84 L240 96 L280 60 L320 72 L360 34 L400 44";

// Little illustration at the top of each project window.
function Shot({ type }) {
  if (type === "crypto") {
    return (
      <div className="shot shot-crypto">
        <div className="tickers">
          <span className="ticker up">BTC ▲ 4.2%</span>
          <span className="ticker">ETH ▲ 2.8%</span>
        </div>
        <svg viewBox="0 0 400 180" preserveAspectRatio="none">
          <path className="area" d={`${PRICE_LINE} L400 180 L0 180 Z`} />
          <motion.path
            className="line"
            d={PRICE_LINE}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
          />
        </svg>
      </div>
    );
  }

  if (type === "api") {
    return (
      <pre className="shot shot-api">
        <span className="verb">GET</span> /api/v1/companies/42{"\n"}
        <span className="ok">200 OK</span> · 38ms{"\n"}
        {"{\n  "}<span className="ok">"name"</span>: "Acme (Pty) Ltd",
        {"\n  "}<span className="ok">"directors"</span>: [ … ],
        {"\n  "}<span className="ok">"status"</span>: "compliant"{"\n}"}
      </pre>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="shot shot-portfolio">
        <span className="mini-name">
          E<span className="accent">O.</span>
        </span>
        <div className="mini-blob"></div>
        <div className="mini-editor">
          <i></i><i></i><i></i><i></i>
        </div>
      </div>
    );
  }

  return (
    <div className="shot shot-dice">
      <div className="die">
        <b style={{ gridArea: "1/1" }}></b>
        <b style={{ gridArea: "2/2" }}></b>
        <b style={{ gridArea: "3/3" }}></b>
      </div>
      <div className="die">
        <b style={{ gridArea: "1/1" }}></b>
        <b style={{ gridArea: "1/3" }}></b>
        <b style={{ gridArea: "2/2" }}></b>
        <b style={{ gridArea: "3/1" }}></b>
        <b style={{ gridArea: "3/3" }}></b>
      </div>
    </div>
  );
}

// A browser-window card that tilts toward the mouse.
function ProjectWindow({ project, index }) {
  const reduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(tiltY, { stiffness: 200, damping: 20 });

  const handleMove = (event) => {
    if (reduceMotion) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    tiltY.set(((event.clientX - rect.left) / rect.width - 0.5) * 10);
    tiltX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 10);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.article
      className="win"
      style={{ rotateX, rotateY }}
      initial={reduceMotion ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: (index % 2) * 0.12 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="win-bar" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <span className="win-url">{project.url}</span>
      </div>
      <div aria-hidden="true">
        <Shot type={project.shot} />
      </div>
      <div className="win-body">
        <span className="badge">{project.badge}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && (
          <a className="more" href={project.link.href} target="_blank" rel="noopener noreferrer">
            {project.link.label} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="block projects" id="projects">
      <div className="wrap">
        <BlockHead title="Projects" cmd="ls ~/work" />
        <div className="project-grid">
          {projects.map((project, i) => (
            <ProjectWindow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
