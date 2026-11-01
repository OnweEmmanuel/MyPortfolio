import { useEffect } from "react";

const STAGGERED_GROUPS = [
  ".experience-list",
  ".education-grid",
  ".skills-grid",
  ".projects-grid",
  ".services-grid",
];

// Adds `is-visible` to every `.fade-in` element as it scrolls into view,
// staggering cards that sit inside the same grid.
export function useRevealOnScroll() {
  useEffect(() => {
    const fadeItems = document.querySelectorAll(".fade-in");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      fadeItems.forEach((item) => {
        item.style.setProperty("--reveal-delay", "0ms");
        item.classList.add("is-visible");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      fadeItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    STAGGERED_GROUPS.forEach((selector) => {
      document.querySelectorAll(`${selector} > .fade-in`).forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 80}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    fadeItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
