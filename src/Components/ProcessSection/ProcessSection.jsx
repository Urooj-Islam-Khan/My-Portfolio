import React from "react";
import "./ProcessSection.css";
const ProcessSection = () => {
  return (
    <section className="wrapper container">
      <h2 class="heading"> My Process
      </h2>
      <div class="process-timeline">
        <div class="process-step">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>Discovery & Planning</h3>
            <p>
              Understanding your requirements, goals, and target audience.
              Creating a detailed project roadmap and timeline.
            </p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>Design & Prototype</h3>
            <p>
              Creating wireframes and interactive prototypes. Designing the user
              interface and user experience.
            </p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>Development</h3>
            <p>
              Writing clean, efficient code following best practices. Regular
              updates and progress reviews.
            </p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">04</div>
          <div class="step-content">
            <h3>Testing & QA</h3>
            <p>
              Comprehensive testing across devices and browsers. Bug fixes and
              performance optimization.
            </p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">05</div>
          <div class="step-content">
            <h3>Launch & Support</h3>
            <p>
              Deployment to production and post-launch monitoring. Ongoing
              maintenance and support as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
