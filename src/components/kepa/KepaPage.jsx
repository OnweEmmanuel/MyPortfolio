import {
  KEPA_EMAIL,
  KEPA_PLAY_URL,
  KEPA_PRIVACY_PATH,
  kepaAsset,
  kepaFacts,
  kepaFeatures,
  kepaIntro,
  kepaPrivacy,
  kepaScreens,
  kepaStack,
} from "../../kepa.js";
import Cursor from "../Cursor.jsx";
import Footer from "../Footer.jsx";
import Nav from "../Nav.jsx";
import Reveal from "../Reveal.jsx";
import ScrollProgress from "../ScrollProgress.jsx";

function Phone({ screen, className = "" }) {
  return (
    <figure className={`kepa-phone ${className}`}>
      <img
        src={kepaAsset(screen.file)}
        alt={`Kepa's ${screen.title} screen: ${screen.caption}`}
        width="540"
        height="1115"
        loading="lazy"
      />
    </figure>
  );
}

function MailIcon() {
  return (
    <svg className="kepa-btn-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/* Status is information, not an action: a dot and a line of text, never a box. */
function StoreNote() {
  if (KEPA_PLAY_URL) return null;
  return (
    <p className="kepa-status">
      <span className="kepa-status-dot" aria-hidden="true" />
      <span>
        In closed testing on Google Play<span className="kepa-status-sep"> · </span>
        <span className="kepa-status-later">iPhone later</span>
      </span>
    </p>
  );
}

export default function KepaPage() {
  const [home, ...rest] = kepaScreens;

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav page="projects" />

      <main className="kepa-page">
        <header className="kepa-hero" id="top">
          <div className="wrap kepa-hero-grid">
            <div className="kepa-hero-copy">
              <Reveal className="kepa-brand">
                <img src={kepaAsset("kepa-icon.png")} alt="" width="64" height="64" />
                <span className="kepa-kicker">Android app · 2026</span>
              </Reveal>
              <Reveal as="h1" delay={0.05}>
                Kepa<span className="kepa-dot">.</span>
              </Reveal>
              <Reveal as="p" className="kepa-tagline" delay={0.1}>
                Never get caught by a debit order again.
              </Reveal>
              <Reveal as="p" className="kepa-intro" delay={0.15}>
                {kepaIntro}
              </Reveal>
              <Reveal className="kepa-actions" delay={0.2}>
                <StoreNote />
                <div className="kepa-btns">
                  {KEPA_PLAY_URL && (
                    <a className="btn kepa-btn kepa-btn-play" href={KEPA_PLAY_URL} target="_blank" rel="noopener noreferrer">
                      Get it on Google Play <span aria-hidden="true">→</span>
                    </a>
                  )}
                  <a className="btn kepa-btn" href={KEPA_PRIVACY_PATH}>
                    Privacy policy <span className="kepa-btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <a className="btn kepa-btn ghost" href={`mailto:${KEPA_EMAIL}?subject=Kepa`}>
                    <MailIcon />
                    {KEPA_EMAIL}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="kepa-hero-phones" variant="left" delay={0.1}>
              <Phone screen={rest[2]} className="back" />
              <Phone screen={home} className="front" />
            </Reveal>
          </div>
        </header>

        <section className="kepa-facts" aria-label="Kepa in numbers">
          <div className="wrap kepa-facts-row">
            {kepaFacts.map((fact) => (
              <Reveal key={fact.label} className="kepa-fact">
                <b>{fact.value}</b>
                <span>{fact.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="kepa-block" aria-labelledby="kepa-what">
          <div className="wrap">
            <Reveal className="block-head">
              <h2 id="kepa-what">
                What it does<span className="accent">.</span>
              </h2>
              <span className="cmd yellow">flutter run --release</span>
            </Reveal>
            <div className="kepa-features">
              {kepaFeatures.map((feature, i) => (
                <Reveal key={feature.title} className="kepa-feature" delay={(i % 2) * 0.08}>
                  <span className="badge">{feature.tag}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="kepa-block kepa-screens-block" aria-labelledby="kepa-screens">
          <div className="wrap">
            <Reveal className="block-head">
              <h2 id="kepa-screens">
                Screens<span className="accent">.</span>
              </h2>
              <span className="cmd">dark mode · real phone</span>
            </Reveal>
          </div>
          <div className="kepa-screens" tabIndex={0} aria-label="Kepa screenshots, scroll sideways">
            {kepaScreens.map((screen) => (
              <figure key={screen.file} className="kepa-shot">
                <Phone screen={screen} />
                <figcaption>
                  <b>{screen.title}</b> {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="kepa-block" aria-labelledby="kepa-private">
          <div className="wrap kepa-private">
            <Reveal>
              <h2 id="kepa-private">
                Private by design<span className="kepa-dot">.</span>
              </h2>
              <p className="kepa-private-lead">
                Kepa was built to push back on apps that charge and track people for tracking their own subscriptions.
                It stays free, and what you enter stays yours.
              </p>
              <a className="btn btn-orange" href={KEPA_PRIVACY_PATH}>
                Read the privacy policy <span aria-hidden="true">→</span>
              </a>
            </Reveal>
            <Reveal as="ul" className="kepa-checks" delay={0.1}>
              {kepaPrivacy.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="kepa-block" aria-labelledby="kepa-built">
          <div className="wrap kepa-built">
            <Reveal className="block-head">
              <h2 id="kepa-built">
                Built with<span className="accent">.</span>
              </h2>
              <span className="cmd">cat pubspec.yaml</span>
            </Reveal>
            <Reveal as="ul" className="kepa-stack">
              {kepaStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Reveal>
            <Reveal as="p" className="kepa-note" delay={0.1}>
              The code is private while Kepa heads to the Play Store. Questions, ideas, or a till slip Kepa misread?
              Write to <a href={`mailto:${KEPA_EMAIL}?subject=Kepa`}>{KEPA_EMAIL}</a>.
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
