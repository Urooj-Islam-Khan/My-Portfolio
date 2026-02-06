import React from "react";
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <h2 className="heading"> About Me</h2>

        <div className="about-content flex">
          <div className="bio-section gap-2">
            <div className="bio-text">
              <h2>
                Hello, I'm Urooj Khan
                <span> Crafting the Future of Web & AI </span>
              </h2>

              <p>
                I am a final-year
                <strong>
                  Software Engineering student at the University of Sindh
                </strong>{" "}
                and a passionate
                <strong> Full-Stack Developer</strong> with over 2+ years of
                hands-on experience. My journey in tech is driven by a 3.67 CGPA
                academic excellence and a deep-rooted desire to build scalable,
                impactful digital solutions. I specialize in bridging the gap
                between elegant UI/UX design and robust backend architecture.
              </p>

              <p>
                My expertise spans across the modern web stack, including
                <strong> React.js, JavaScript, and Bootstrap</strong> for
                frontend brilliance, coupled with{" "}
                <strong>
                  PHP (OOP, PDO), Python (FastAPI, Flask), and MySQL
                </strong>{" "}
                for powerful backend systems. Beyond the web, I have mastered{" "}
                <strong>Core Java and Android App Development</strong>, allowing
                me to build versatile applications across different platforms.
              </p>

              <p>
                Currently, I am at the forefront of innovation, developing
                AI-powered solutions like <strong>Biznova</strong>—an
                intelligent chatbot platform utilizing{" "}
                <strong>LLMs, LangChain, and RAG</strong>. Whether it's
                predicting health conditions with Machine Learning or managing
                complex databases, I approach every challenge with a focus on
                problem-solving and quality delivery.
              </p>

              <p>
                As an <strong>IT Trainer at PITP-II (MUET)</strong> and a
                Freelance Team Lead, I don't just write code; I mentor the next
                generation of developers. Having trained{" "}
                <strong>100+ students</strong>
                in Java and Web Development, I believe in the power of shared
                knowledge, clean maintainable code, and staying ahead of the
                technology curve.
              </p>
            </div>
            <div className="bio-stats">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3.67</div>
                <div className="stat-label">Bachelor's CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
