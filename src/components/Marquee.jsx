import { marqueeRows } from "../data.js";

// Two crossing bands of scrolling text. Each row is rendered twice so the loop is seamless.
export default function Marquee() {
  return (
    <div className="bands" aria-hidden="true">
      {marqueeRows.map((words) => (
        <div key={words[0]} className="band">
          <div className="track">
            {[...words, ...words].map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
