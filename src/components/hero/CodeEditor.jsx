import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { editorSnippets } from "../../data.js";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Renders the first `typed` characters of a snippet, keeping each token's colour.
function TypedCode({ tokens, typed }) {
  let remaining = typed;
  return tokens.map(([type, text], i) => {
    if (remaining <= 0) {
      return null;
    }
    const visible = text.slice(0, remaining);
    remaining -= text.length;
    return (
      <span key={i} className={`tok-${type}`}>
        {visible}
      </span>
    );
  });
}

// An editor that types out each snippet, "runs" it in the terminal strip, then moves to the next.
export default function CodeEditor() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      for (let i = 0; !cancelled; i++) {
        const snippet = editorSnippets[i % editorSnippets.length];
        const length = snippet.tokens.reduce((sum, [, text]) => sum + text.length, 0);
        setIndex(i % editorSnippets.length);
        setCommand("");
        setOutput("");

        if (reduceMotion) {
          setTyped(length);
        } else {
          for (let n = 0; n <= length && !cancelled; n++) {
            setTyped(n);
            await wait(26 + Math.random() * 30);
          }
        }

        await wait(600);
        for (let n = 0; n <= snippet.run.length && !cancelled; n++) {
          setCommand(snippet.run.slice(0, n));
          await wait(reduceMotion ? 0 : 45);
        }
        await wait(450);
        if (!cancelled) {
          setOutput(snippet.output);
        }
        await wait(3000);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  const snippet = editorSnippets[index];

  return (
    <div className="editor">
      <div className="editor-top">
        <div className="window-dots" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </div>
        {editorSnippets.map((s) => (
          <span key={s.file} className={`editor-tab${s === snippet ? " on" : ""}`}>
            {s.file}
          </span>
        ))}
      </div>
      <pre className="editor-code" aria-label={`Code sample: ${snippet.file}`}>
        <TypedCode tokens={snippet.tokens} typed={typed} />
        <span className="caret" aria-hidden="true"></span>
      </pre>
      <div className="editor-term">
        <span className="accent">$</span> {command}
        {output && <span className="tok-f">{"  " + output}</span>}
      </div>
    </div>
  );
}
