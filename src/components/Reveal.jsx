import { motion, useReducedMotion } from "motion/react";

// Every variant is the same short fade and rise; the names stay so callers don't change.
const rise = { opacity: 0, y: 8 };
const hidden = { up: rise, left: rise, pop: rise };

// Fades its children in the first time they scroll into view.
export default function Reveal({ as = "div", variant = "up", delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reduceMotion ? false : hidden[variant]}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 120px 0px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: Math.min(delay, 0.24) }}
      {...props}
    >
      {children}
    </Component>
  );
}
