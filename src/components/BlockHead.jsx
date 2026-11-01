import Reveal from "./Reveal.jsx";

export default function BlockHead({ title, cmd, cmdClassName = "" }) {
  return (
    <Reveal className="block-head">
      <h2>{title}</h2>
      <span className={`cmd ${cmdClassName}`}>{cmd}</span>
    </Reveal>
  );
}
