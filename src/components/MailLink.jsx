import { EMAIL, GMAIL_COMPOSE_URL } from "../data.js";

export default function MailLink({ className, children }) {
  const handleClick = (event) => {
    // Many desktops have no mail app handler, so mailto appears to do nothing.
    // Open Gmail compose in a new tab so the click always has a visible result.
    event.preventDefault();
    window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <a className={className} href={`mailto:${EMAIL}`} onClick={handleClick}>
      {children}
    </a>
  );
}
