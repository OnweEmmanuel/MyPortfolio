import { Fragment } from "react";

// "Yes"/"Included" get a tick, "Not included" a dash; the words stay for screen readers.
function FeatureValue({ value }) {
  if (value === "Yes" || value === "Included") {
    return (
      <span className="fv fv-yes">
        <i aria-hidden="true">✓</i>
        {value}
      </span>
    );
  }
  if (value === "Not included") {
    return (
      <span className="fv fv-no">
        <i aria-hidden="true">–</i>
        {value}
      </span>
    );
  }
  return <span className="fv">{value}</span>;
}

function PlanHead({ plan, as: Heading }) {
  return (
    <>
      <span className="plan-name-row">
        <Heading className="plan-name">{plan.name}</Heading>
        {plan.popular && <span className="popular-badge">Most popular</span>}
      </span>
      <span className="plan-price">{plan.price}</span>
      {plan.priceNote && <span className="plan-price-note">{plan.priceNote}</span>}
      {plan.bestFor && (
        <span className="plan-best">
          <b>Best for:</b> {plan.bestFor}
        </span>
      )}
    </>
  );
}

// A full table on wide screens and stacked cards on narrow ones, so nothing
// ever scrolls sideways. CSS decides which one is shown.
export default function Comparison({ caption, plans, features, renderAction }) {
  return (
    <>
      <table className="compare-table">
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <td></td>
            {plans.map((plan) => (
              <th key={plan.id} scope="col" className={plan.popular ? "is-popular" : undefined}>
                <PlanHead plan={plan} as="span" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.label}>
              <th scope="row">{feature.label}</th>
              {feature.values.map((value, i) => (
                <td key={plans[i].id} className={plans[i].popular ? "is-popular" : undefined}>
                  <FeatureValue value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {renderAction && (
          <tfoot>
            <tr>
              <td></td>
              {plans.map((plan) => (
                <td key={plan.id} className={plan.popular ? "is-popular" : undefined}>
                  {renderAction(plan)}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>

      <ul className="compare-cards">
        {plans.map((plan, i) => (
          <li key={plan.id} className={`compare-card${plan.popular ? " is-popular" : ""}`}>
            <PlanHead plan={plan} as="h3" />
            <dl>
              {features.map((feature) => (
                <Fragment key={feature.label}>
                  <dt>{feature.label}</dt>
                  <dd>
                    <FeatureValue value={feature.values[i]} />
                  </dd>
                </Fragment>
              ))}
            </dl>
            {renderAction?.(plan)}
          </li>
        ))}
      </ul>
    </>
  );
}
