import { services } from "../data.js";
import { padIndex } from "../utils.js";
import BlockHead from "./BlockHead.jsx";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <BlockHead title="What I build" cmd="services.ts" cmdClassName="yellow" />
        <div className="services-list">
          {services.map((service, i) => (
            <Reveal key={service.title} as="article" className="service-row" delay={i * 0.08}>
              <div className="service-intro">
                <span className="n">{padIndex(i)}</span>
                <h3>{service.title}</h3>
                <p className="service-pitch">{service.pitch}</p>
                <p className="service-for">
                  <span>good for</span>
                  {service.goodFor}
                </p>
              </div>
              <div className="service-detail">
                <h4>// what you get</h4>
                <ul className="service-includes">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="service-stack" aria-label="Built with">
                  {service.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
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
