import { EMAIL } from "../data.js";
import MailLink from "./MailLink.jsx";
import Reveal from "./Reveal.jsx";
import Terminal from "./Terminal.jsx";

export default function Contact() {
  return (
    <section className="block contact" id="contact">
      <span className="ghost-text" aria-hidden="true">
        hello()
      </span>
      <div className="wrap">
        <Reveal as="h2">
          Let's build
          <br />
          something <em>loud.</em>
        </Reveal>
        <Reveal delay={0.1}>
          <MailLink className="contact-email">{EMAIL} ↗</MailLink>
        </Reveal>
        <Reveal delay={0.15}>
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
