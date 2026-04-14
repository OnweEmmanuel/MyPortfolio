const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");

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

if ("IntersectionObserver" in window && fadeItems.length > 0) {
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

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
}

if (navLinks) {
  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      const targetId = event.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 76;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
          event.preventDefault();
        }
      }
    }
  });
}
