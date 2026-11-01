import { skillPanels } from "../data.js";
import { padIndex } from "../utils.js";
import SectionHeading from "./SectionHeading.jsx";
import SkillChips from "./SkillChips.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading label="// section_03" title="Technical Stack" file="// stack.json" />
        <div className="skills-grid">
          {skillPanels.map((panel, index) => (
            <article key={index} className="skill-panel fade-in">
              <div className="skill-panel-top">
                <span className="skill-index">{padIndex(index)}</span>
                <span className="skill-glyph" aria-hidden="true">
                  {"{ }"}
                </span>
              </div>
              {panel.groups ? (
                panel.groups.map((group, groupIndex) => (
                  <div key={group.title} className="skill-group">
                    <h3 className="skill-group-title">
                      <span className="skill-group-index">{padIndex(groupIndex)}</span>
                      <span className="skill-group-sep">/</span>
                      {group.title}
                    </h3>
                    <SkillChips skills={group.skills} />
                  </div>
                ))
              ) : (
                <>
                  <h3>{panel.title}</h3>
                  <SkillChips skills={panel.skills} />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
