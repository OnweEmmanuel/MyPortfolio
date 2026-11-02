import {
  addOns,
  carePlanFeatures,
  carePlans,
  carePlansNote,
  formatPrice,
  packageFeatures,
  packages,
  packagesNote,
  paymentTerms,
  pricingIntro,
  steps,
} from "../../pricing.js";
import Cursor from "../Cursor.jsx";
import Footer from "../Footer.jsx";
import MailLink from "../MailLink.jsx";
import Nav from "../Nav.jsx";
import Reveal from "../Reveal.jsx";
import ScrollProgress from "../ScrollProgress.jsx";
import Comparison from "./Comparison.jsx";

const packagePlans = packages.map((pkg) => ({ ...pkg, price: formatPrice(pkg.price) }));

const carePlanPlans = carePlans.map((plan) => ({
  ...plan,
  price: `${formatPrice(plan.monthly)}/month`,
  priceNote: `or ${formatPrice(plan.yearly)}/year`,
}));

const GetStarted = (pkg) => (
  <MailLink className={`btn ${pkg.popular ? "btn-orange" : "btn-outline"} plan-cta`} subject={`Website enquiry: ${pkg.name} package`}>
    Get started
  </MailLink>
);

function PricingSection({ id, title, kicker, children }) {
  return (
    <section className="pricing-block" aria-labelledby={id}>
      <div className="wrap">
        <Reveal className="pricing-block-head">
          <h2 id={id}>{title}</h2>
          {kicker && <p>{kicker}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav page="pricing" />

      <main className="pricing-page">
        <header className="pricing-hero" id="top">
          <div className="wrap">
            <Reveal className="block-head">
              <h1>
                Pricing<span className="accent">.</span>
              </h1>
              <span className="cmd yellow">cat pricing.json</span>
            </Reveal>
            <Reveal as="p" className="pricing-intro" delay={0.1}>
              {pricingIntro}
            </Reveal>
          </div>
        </header>

        <PricingSection id="packages-title" title="Website packages" kicker="One-off payment, USD.">
          <Comparison
            caption="Website packages compared"
            plans={packagePlans}
            features={packageFeatures}
            renderAction={GetStarted}
          />
          <p className="pricing-note">{packagesNote}</p>
        </PricingSection>

        <PricingSection id="care-title" title="Monthly care plans" kicker="Pay yearly, get 2 months free.">
          <Comparison caption="Monthly care plans compared" plans={carePlanPlans} features={carePlanFeatures} />
          <p className="pricing-note">{carePlansNote}</p>
        </PricingSection>

        <PricingSection id="addons-title" title="Add-ons">
          <ul className="addon-list">
            {addOns.map((addOn) => (
              <li key={addOn.name}>
                <span className="addon-name">
                  {addOn.name}
                  {addOn.detail && <small> ({addOn.detail})</small>}
                </span>
                <span className="addon-price">{addOn.priceLabel ?? formatPrice(addOn.price)}</span>
              </li>
            ))}
          </ul>
        </PricingSection>

        <PricingSection id="steps-title" title="How it works">
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </PricingSection>

        <PricingSection id="terms-title" title="Payment terms">
          <div className="terms">
            {paymentTerms.map((term) => (
              <details key={term.title}>
                <summary>{term.title}</summary>
                <p>{term.text}</p>
              </details>
            ))}
          </div>
        </PricingSection>

        <section className="pricing-cta" aria-labelledby="cta-title">
          <div className="wrap">
            <Reveal as="h2" id="cta-title">
              Not sure which package fits?
            </Reveal>
            <Reveal delay={0.1}>
              <MailLink className="btn btn-green" subject="Free 15-minute chat about a website">
                Book a free 15-minute chat
              </MailLink>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
