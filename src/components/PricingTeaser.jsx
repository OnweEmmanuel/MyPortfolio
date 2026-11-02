import { PRICING_PATH, formatPrice, packages, startingPrice } from "../pricing.js";
import Reveal from "./Reveal.jsx";

// A small nudge towards /pricing. Kept light so it doesn't compete with the portfolio.
export default function PricingTeaser() {
  return (
    <section className="pricing-teaser" aria-labelledby="pricing-teaser-title">
      <div className="wrap">
        <Reveal className="teaser-copy">
          <h2 id="pricing-teaser-title">Need a website like this?</h2>
          <p>Personal CV websites, starting at {formatPrice(startingPrice)}.</p>
        </Reveal>
        <ul className="teaser-cards">
          {packages.map((pkg, i) => (
            <Reveal as="li" key={pkg.id} delay={i * 0.08} className={`teaser-card${pkg.popular ? " is-popular" : ""}`}>
              <div className="teaser-card-top">
                <h3>{pkg.name}</h3>
                {pkg.popular && <span className="popular-badge">Most popular</span>}
              </div>
              <p className="teaser-price">{formatPrice(pkg.price)}</p>
              <p className="teaser-best">{pkg.bestFor}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.2}>
          <a className="btn btn-outline" href={PRICING_PATH}>
            See full pricing →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
