export default function SkillChips({ skills }) {
  return (
    <div className="skill-chips">
      {skills.map((skill) => (
        <span key={skill} className="skill-chip">
          {skill}
        </span>
      ))}
    </div>
  );
}
