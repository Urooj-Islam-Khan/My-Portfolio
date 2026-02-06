import React from "react";
import "./EduAndExp.css";
const EduAndExp = () => {
  return (
    <section className="education-experience wrapper gap-2">
      <div className="timeline-section">
        <h2 className="heading">Education</h2>
        <div className="timeline">
          {/* Degree */}
          <div className="timeline-item">
            <div className="timeline-date">2022 - 2026</div>
            <div className="timeline-content">
              <h3>Bachelor of Software Engineering</h3>
              <p className="timeline-org">University of Sindh</p>
              <p>
                Maintaining a strong academic record with a <strong>CGPA of 3.67</strong>. Focused on Software Architecture,
                Database Management, and Advanced Programming.
              </p>
            </div>
          </div>
          {/* Intermediate */}
          <div className="timeline-item">
            <div className="timeline-date">2019 - 2021</div>
            <div className="timeline-content">
              <h3>Intermediate (Pre-Engineering)</h3>
              <p className="timeline-org">Hayat Girls College</p>
              <p>
                Completed with <strong>91.8%</strong>. Developed a solid
                foundation in Mathematics and Physics, fueling my passion for
                engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2 className="heading">Experience</h2>
        <div className="timeline">
          {/* Current Role */}
          <div className="timeline-item">
            <div className="timeline-date">Sept 2025 - Present</div>
            <div className="timeline-content">
              <h3>IT Trainer & Team Leader</h3>
              <p className="timeline-org">PITP-II (MUET)</p>
              <p>
                Leading training sessions for <strong>100+ students</strong> on
                Core Java and Web Development. Mentoring future developers and
                managing team-based projects.
              </p>
            </div>
          </div>
          {/* Previous Role */}
          <div className="timeline-item">
            <div className="timeline-date">July 2025 - Nov 2025</div>
            <div className="timeline-content">
              <h3>Junior Web Developer & Trainer</h3>
              <p className="timeline-org">Gexton Education</p>
              <p>
                Developed responsive web solutions using HTML, CSS, JS, and PHP.
                Provided hands-on coding examples and technical notes for
                students.
              </p>
            </div>
          </div>
          {/* Internship */}
          <div className="timeline-item">
            <div className="timeline-date">April 2025 - June 2025</div>
            <div className="timeline-content">
              <h3>Full Stack Intern</h3>
              <p className="timeline-org">Gexton Education</p>
              <p>
                Worked on backend systems using <strong>PHP PDO (OOP)</strong>
                and MySQL. Focused on building secure and scalable database
                architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduAndExp;
