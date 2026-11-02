import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { navItems } from "../data.js";
import { PRICING_PATH } from "../pricing.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

const sectionIds = navItems.filter((item) => !item.page).map((item) => item.id);
const HOME_PATH = import.meta.env.BASE_URL;

// `page` is "home" on the homepage; on other pages section links point back home.
export default function Nav({ page = "home" }) {
  const onHome = page === "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 860px)");
  const activeSection = useActiveSection(onHome ? sectionIds : []);
  const activeId = onHome ? activeSection : page;
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
        <a className="logo" href={onHome ? "#top" : HOME_PATH}>
          ~/emmanuel<span className="accent">.</span>onwe
        </a>
        <ul className="nav-links" inert={isMobile && !menuOpen}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.page ? PRICING_PATH : `${onHome ? "" : HOME_PATH}#${item.id}`}
                className={activeId === item.id ? "is-active" : undefined}
                aria-current={item.page && activeId === item.id ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a className="hire" href={onHome ? "#contact" : `${HOME_PATH}#contact`}>
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
