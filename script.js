const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");
const scrollProgress = document.querySelector(".scroll-progress");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileNavQuery = window.matchMedia("(max-width: 699px)");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setMobileMenuOpen = (open) => {
  if (!header || !menuToggle) {
    return;
  }

  header.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));

  if (navLinks) {
    const shouldInert = mobileNavQuery.matches && !open;
    if (shouldInert) {
      navLinks.setAttribute("inert", "");
    } else {
      navLinks.removeAttribute("inert");
    }
  }
};

if (menuToggle && header) {
  setMobileMenuOpen(false);

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMobileMenuOpen(!isExpanded);
  });
}

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (header?.classList.contains("nav-open")) {
      setMobileMenuOpen(false);
    }
  });
});

mobileNavQuery.addEventListener("change", () => {
  if (!mobileNavQuery.matches) {
    setMobileMenuOpen(false);
  } else if (header && !header.classList.contains("nav-open")) {
    setMobileMenuOpen(false);
  }
});

const fadeItems = document.querySelectorAll(".fade-in");

const assignRevealDelays = () => {
  const groupSelectors = [
    ".experience-list",
    ".education-grid",
    ".skills-grid",
    ".projects-grid",
    ".services-grid",
  ];

  groupSelectors.forEach((selector) => {
    document.querySelectorAll(`${selector} > .fade-in`).forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 80}ms`);
    });
  });
};

if (prefersReducedMotion) {
  fadeItems.forEach((item) => {
    item.style.setProperty("--reveal-delay", "0ms");
    item.classList.add("is-visible");
  });
} else if ("IntersectionObserver" in window && fadeItems.length > 0) {
  assignRevealDelays();

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

if (scrollProgress) {
  let progressTicking = false;

  const updateScrollProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    progressTicking = false;
  };

  updateScrollProgress();

  window.addEventListener(
    "scroll",
    () => {
      if (!progressTicking) {
        progressTicking = true;
        window.requestAnimationFrame(updateScrollProgress);
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    if (!progressTicking) {
      progressTicking = true;
      window.requestAnimationFrame(updateScrollProgress);
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
