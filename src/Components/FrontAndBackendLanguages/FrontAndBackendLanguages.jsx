import React from "react";
import "./FrontAndBackendLanguages.css";

const frontendSkills = [
  { name: "React.js", level: "Advanced", value: 90 },
  { name: "JavaScript", level: "Advanced", value: 80 },
  { name: "HTML5 & CSS3", level: "Expert", value: 95 },
  { name: "Tailwind CSS", level: "Advanced", value: 50 },
];

const backendSkills = [
  { name: "Node.js", level: "Advanced", value: 60 },
  { name: "Python", level: "Advanced", value: 70 },
  { name: "FastAPI", level: "Intermediate", value: 75 },
  { name: "MySQL", level: "Advanced", value: 80 },
  { name: "MongoDB", level: "Advanced", value: 65 },
];

const SkillItem = ({ name, level, value }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div className="skill-section">
    <h2>{title}</h2>
    <div className="skill-items">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </div>
);

const FrontAndBackendLanguages = () => {
  return (
    <section className="container wrapper">
      <h2 className="heading">Skills & Expertise</h2>

      <div className="skills-content">
        <SkillSection title="Frontend Development" skills={frontendSkills} />
        <SkillSection title="Backend Development" skills={backendSkills} />
      </div>
    </section>
  );
};

export default FrontAndBackendLanguages;
