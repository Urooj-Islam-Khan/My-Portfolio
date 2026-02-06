import React from "react";
import "./CallToAction.css";
const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Let’s Build Something Meaningful Together</h2>
        <p>
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="cta-buttons">
          <a href="mailto:uroojislamkhan124@gmail.com" className="btn primary">
            Contact Me
          </a>
          <a
            href="https://github.com/Urooj-Islam-Khan"
            target="_blank"
            className="btn secondary"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
