import React from "react";
import "./SkillsHighlight.css";
const SkillsHighlight = () => {
  return (
    <section className="wrapper">
      <div className="skills">
        <h2 className="heading"> Skills Highlights</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SQLite</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Javascript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHighlight;
