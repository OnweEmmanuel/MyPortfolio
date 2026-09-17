const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    header.classList.toggle("nav-open");
  });
}

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (header?.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

const fadeItems = document.querySelectorAll(".fade-in");

if (prefersReducedMotion) {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window && fadeItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  fadeItems.forEach((item) => observer.observe(item));
} else {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
}

const sectionIds = [
  "home",
  "experience",
  "education",
  "skills",
  "projects",
  "services",
  "contact",
];
const sectionElements = sectionIds
  .map((id) => document.getElementById(id))
  .filter((section) => section instanceof HTMLElement);

const setActiveNav = (id) => {
  navLinkItems.forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("is-active", href === `#${id}`);
  });
};

setActiveNav("home");

if ("IntersectionObserver" in window && sectionElements.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    }
  );

  sectionElements.forEach((section) => sectionObserver.observe(section));
}

if (navLinks) {
  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      const targetId = event.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({
            top: offsetTop,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
          event.preventDefault();
        }
      }
    }
  });
}

document.querySelectorAll("a[href^='mailto:']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const webFallback = link.getAttribute("data-mail-web");
    if (!webFallback) {
      return;
    }

    // Many desktops have no mail app handler, so mailto appears to do nothing.
    // Open Gmail compose in a new tab so the click always has a visible result.
    event.preventDefault();
    window.open(webFallback, "_blank", "noopener,noreferrer");
  });
});
