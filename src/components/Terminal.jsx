import { useEffect, useRef, useState } from "react";
import { EMAIL, GITHUB_URL, GMAIL_COMPOSE_URL, LINKEDIN_URL, location } from "../data.js";

const ExternalLink = ({ href, children }) => (
  <a className="y" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const COMMANDS = {
  help: () => (
    <>
      commands: <span className="y">whoami  location  stack  hobbies  email  github  linkedin  sudo hire-me  clear</span>
    </>
  ),
  hobbies: () => "codm · clash of clans · one piece · black clover · manga & manhwa · bowling · mini golf",
  onepiece: () => (
    <>
      <span className="y">THE ONE PIECE IS REAL.</span> 🏴‍☠️ No further questions.
    </>
  ),
  whoami: () => "Emmanuel Onwe, full-stack engineer. Building for the web since 2019.",
  location: () => (
    <>
      built my career in {location.from}, moving back to <span className="y">{location.to}</span>. Open to projects
      anywhere in the world.
    </>
  ),
  stack: () => "laravel · .net · react · angular · typescript · mysql · redis · docker",
  email: () => {
    window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
    return (
      <>
        opening mail… <span className="y">{EMAIL}</span>
      </>
    );
  },
  github: () => <ExternalLink href={GITHUB_URL}>github.com/OnweEmmanuel</ExternalLink>,
  linkedin: () => <ExternalLink href={LINKEDIN_URL}>linkedin.com/in/emmanuel-onwe</ExternalLink>,
  "sudo hire-me": () => (
    <>
      <span className="o">[sudo]</span> access granted ✓ great choice. Email <span className="y">{EMAIL}</span> and
      let's talk.
    </>
  ),
};

const QUICK_COMMANDS = ["help", "whoami", "location", "email", "github", "sudo hire-me"];

// A small fake shell. Visitors can type commands or use the quick buttons underneath.
export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const outputRef = useRef(null);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [history]);

  const run = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) {
      return;
    }
    if (command === "clear") {
      setHistory([]);
      return;
    }
    const result = COMMANDS[command]?.() ?? (
      <>
        command not found: {command}. try <span className="o">help</span>
      </>
    );
    setHistory((lines) => [...lines, { id: Date.now() + Math.random(), command, result }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    run(input);
    setInput("");
  };

  return (
    <>
      <div className="shell">
        <div className="shell-bar">
          <div className="window-dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </div>
          guest@emmanuel.onwe: ~
        </div>
        <div className="shell-out" ref={outputRef} aria-live="polite">
          <p>
            <span className="y">Welcome.</span> This terminal works. Type <span className="o">help</span> to see what it
            can do.
          </p>
          {history.map(({ id, command, result }) => (
            <p key={id}>
              <span className="o">❯</span> {command}
              {"\n"}
              {result}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <span className="o" aria-hidden="true">
            ❯
          </span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command"
            placeholder="type a command…"
          />
        </form>
      </div>
      <div className="cmd-chips">
        {QUICK_COMMANDS.map((command) => (
          <button key={command} type="button" onClick={() => run(command)}>
            {command}
          </button>
        ))}
      </div>
    </>
  );
}
