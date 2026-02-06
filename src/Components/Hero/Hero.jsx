import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import HeroImage from "../../assets/laptop.png";
import Resume from "../../assets/Urooj_Resume.pdf";
const Hero = () => {
  return (
    <section className="hero-section wrapper flex between">
      <div className="hero-content">
        <span className="tag">Software Engineer</span>
        <h1>
          Hy! <span className="color-txt"> I'm Urooj Islam Khan </span>
          Crafting Scalable Web Solutions & AI Experiences
        </h1>
        <p className="para">
          I'm an experienced Full-Stack developer with 2+ year in this field. I
          have successfully trained 100+ students in modern IT skills and
          delivered 50+ frontend projects , focusing on building scalable,
          performance-driven web applications
        </p>

        <div className="flex gap-2 action-btns" >
          <NavLink to="/projects" className="btn">
            View My Work
          </NavLink>
          <a href={Resume} download="Urooj's Resume" className="btn border-btn">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-box">
          <img src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
