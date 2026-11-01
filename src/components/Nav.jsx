import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { navItems } from "../data.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

const sectionIds = navItems.map((item) => item.id);

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 860px)");
  const activeId = useActiveSection(sectionIds);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const classes = ["site-nav", scrolled && "scrolled", menuOpen && "open"].filter(Boolean).join(" ");

  return (
    <nav className={classes}>
      <div className="wrap">
        <a className="logo" href="#top">
          ~/emmanuel<span className="accent">.</span>onwe
        </a>
        <ul className="nav-links" inert={isMobile && !menuOpen}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? "is-active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a className="hire" href="#contact">
            $ hire --me
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "close" : "menu"}
          </button>
        </div>
      </div>
    </nav>
  );
}
