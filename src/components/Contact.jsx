import { EMAIL, socialLinks } from "../data.js";
import MailLink from "./MailLink.jsx";
import { ArrowUpRight } from "./icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section section-muted contact-section">
      <div className="container">
        <div className="contact-intro fade-in">
          <p className="section-label contact-prompt">
            <span className="accent">$</span> ./start-a-conversation
          </p>
          <h2 className="contact-headline">
            Let's build something that works <span className="accent">beautifully.</span>
          </h2>
          <MailLink className="contact-email-cta">{EMAIL}</MailLink>
        </div>

        <div className="contact-channels fade-in">
          <MailLink className="contact-channel">
            <span className="contact-channel-label">EMAIL</span>
            <span className="contact-channel-value">{EMAIL}</span>
            <ArrowUpRight className="contact-channel-icon" />
          </MailLink>
          <div className="contact-channel contact-channel-static" aria-label="Phone number available on request">
            <span className="contact-channel-label">PHONE</span>
            <span className="contact-channel-value">+27 60 *** ****</span>
            <span className="contact-channel-note">Available on request</span>
          </div>
          {socialLinks.map(({ label, value, url }) => (
            <a key={label} className="contact-channel" href={url} target="_blank" rel="noopener noreferrer">
              <span className="contact-channel-label">{label}</span>
              <span className="contact-channel-value">{value}</span>
              <ArrowUpRight className="contact-channel-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
