import React from "react";
import "./AboutSnapshot.css";
import { NavLink } from "react-router-dom";

const AboutSnapshot = () => {
  return (
    <section className="snapshot wrapper flex ">
      <div className="snapshot-content flex">
        <h2 className="heading">
          About Me
          <span className="sub-heading">About Urooj Islam Khan</span>
        </h2>
        <p className="about-content">
          I am a <span>Software Engineer</span> and{" "}
          <span>Full-Stack Developer</span> with over <span>2 years</span> of
          experience in crafting high-performance web applications and training
          the next generation of developers. With a strong academic background
          <span> (3.67 CGPA)</span> and certifications from <span>Meta</span>{" "}
          and <span>Google</span> , I specialize in the MERN stack, PHP, and
          Java. As an <span>IT Trainer</span> at <span>PITP-II</span>, I have
          successfully mentored <span>100+</span> students, bridging the gap
          between theory and industry-standard coding practices. My portfolio
          includes <span>25+</span> frontend projects and complex systems like
          an <span>AI-powered</span> chatbot and an{" "}
          <span>E-commerce platform</span>. I am driven by the goal of building
          scalable, user-centric solutions that combine cutting-edge AI/ML
          technologies with robust backend architecture.
        </p>
        <NavLink to="/about" className="btn">
          Know More About Me
        </NavLink>
      </div>
      <div className="statsbars flex between gap-2">
        <div className="statsbar">
          <p>
            <span>2+</span> Years Experience
          </p>
        </div>
        <div className="statsbar">
          <p>
            <span>100+</span> Students Trained
          </p>
        </div>
        <div className="statsbar">
          <p>
            <span>50+</span> Projects Delivered
          </p>
        </div>
        <div className="statsbar">
          <p>
            <span>3.67</span> Bachelor's CGPA
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
