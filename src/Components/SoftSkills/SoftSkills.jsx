import React from "react";
import "./SoftSkills.css";
const SoftSkills = () => {
  return (
    <section className="wrapper">
      <h2 className="heading">Soft Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Leadership & Mentorship</h3>
          <p>
            As an <strong>IT Trainer and Team Lead</strong>, I possess the
            ability to guide 100+ students and coordinate with development teams
            to deliver quality results.
          </p>
        </div>

        <div className="skill-card">
          <h3>Effective Communication</h3>
          <p>
            Skilled in simplifying complex technical concepts for students and
            clients, ensuring clear project requirements and smooth
            collaborations.
          </p>
        </div>

        <div className="skill-card">
          <h3>Problem-Solving Mindset</h3>
          <p>
            My academic journey and hands-on coding have sharpened my ability to
            analyze issues critically and provide optimized, scalable solutions.
          </p>
        </div>

        <div className="skill-card">
          <h3>Adaptability & Learning</h3>
          <p>
            A consistent learner, as shown by my <strong>3.67 CGPA</strong> and
            certifications, quickly mastering new frameworks like LangChain and
            MERN stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
