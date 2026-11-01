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
            <Reveal key={service.title} className="service-row" delay={i * 0.08}>
              <span className="n">{padIndex(i)}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="arr" aria-hidden="true">
                →
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
