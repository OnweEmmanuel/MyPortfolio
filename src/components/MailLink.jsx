import { EMAIL, GMAIL_COMPOSE_URL } from "../data.js";

// `subject` pre-fills the email subject line.
export default function MailLink({ className, subject, children }) {
  const query = subject ? encodeURIComponent(subject) : "";
  const composeUrl = subject ? `${GMAIL_COMPOSE_URL}&su=${query}` : GMAIL_COMPOSE_URL;
  const mailto = subject ? `mailto:${EMAIL}?subject=${query}` : `mailto:${EMAIL}`;

  const handleClick = (event) => {
    // Many desktops have no mail app handler, so mailto appears to do nothing.
    // Open Gmail compose in a new tab so the click always has a visible result.
    event.preventDefault();
    window.open(composeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <a className={className} href={mailto} onClick={handleClick}>
      {children}
    </a>
  );
}
