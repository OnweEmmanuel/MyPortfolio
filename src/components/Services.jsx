import { services } from "../data.js";
import { padIndex } from "../utils.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading label="// section_05" title="What I Build" file="// services.ts" />
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-panel fade-in">
              <span className="service-index">{padIndex(index)}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
