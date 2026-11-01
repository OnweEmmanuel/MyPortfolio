import { motion, useReducedMotion } from "motion/react";

const hidden = {
  up: { opacity: 0, y: 60 },
  left: { opacity: 0, x: 80 },
  pop: { opacity: 0, scale: 0.85, rotate: -3 },
};

// Fades its children in the first time they scroll into view.
export default function Reveal({ as = "div", variant = "up", delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reduceMotion ? false : hidden[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
