export default function SectionHeading({ label, title, file }) {
  return (
    <div className="section-heading fade-in">
      <div className="section-heading-main">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <span className="section-file">{file}</span>
    </div>
  );
}
