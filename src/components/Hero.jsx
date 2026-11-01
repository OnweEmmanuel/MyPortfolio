import { heroMeta } from "../data.js";
import { ArrowDown, ArrowUpRight } from "./icons.jsx";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-enter">
        <p className="location">
          <span className="accent">$</span> whoami
          <span className="terminal-cursor" aria-hidden="true"></span>
        </p>
        <h1>
          Emmanuel Onwe<span className="accent">.</span>
        </h1>
        <p className="title">Full-Stack | Software Engineer | Cape Town, South Africa</p>
        <p className="pitch">
          I build efficient web applications and simple business websites that help businesses
          grow and operate better.
        </p>
        <div className="hero-actions">
          <a className="btn btn-signal" href="#projects">
            View My Work
            <ArrowDown className="btn-icon" />
          </a>
          <a className="btn btn-outline" href="#contact">
            Let’s Connect
            <ArrowUpRight className="btn-icon" size={16} />
          </a>
        </div>
        <dl className="hero-meta">
          {heroMeta.map(({ term, value }) => (
            <div key={term} className="hero-meta-item">
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
