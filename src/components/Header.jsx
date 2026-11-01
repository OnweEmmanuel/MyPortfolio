import { useEffect, useState } from "react";
import { navItems } from "../data.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

const HEADER_OFFSET = 64;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 699px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const activeId = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const handleNavClick = (event, id) => {
    setMenuOpen(false);

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <header className={`site-header${menuOpen ? " nav-open" : ""}`}>
      <nav className="navbar container">
        <a className="logo" href="#home">
          <span className="logo-prompt">~/</span>emmanuel.onwe
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="nav-links" inert={isMobile && !menuOpen}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? "is-active" : undefined}
                onClick={(event) => handleNavClick(event, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
