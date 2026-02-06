import React from "react";
import { GiBullseye } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import './CareerGoals.css'
const CareerGoals = () => {
  return (
    <section className="career-goals wrapper">
      <h2 className="heading">Career Goals</h2>
      <div className="goals-grid">
        <div className="goal-card">
          <div className="goal-icon">
            <GiBullseye />
          </div>
          <h3>Technical Excellence</h3>
          <p>
            Aspiring to master the <strong>MERN stack</strong> and advanced
            <strong>AI/ML integration</strong>. My focus is on architecting
            intelligent systems like Biznova that solve complex real-world
            problems with high efficiency.
          </p>
        </div>

        <div className="goal-card">
          <div className="goal-icon">
            <FaStar />
          </div>
          <h3>Leadership & Mentorship</h3>
          <p>
            Building on my experience as an
            <strong>IT Trainer at PITP-II</strong>, I aim to lead development
            teams and mentor aspiring engineers, fostering a culture of
            <strong>clean code</strong> and innovative thinking.
          </p>
        </div>

        <div className="goal-card">
          <div className="goal-icon">
            <IoRocketSharp />
          </div>
          <h3>Innovation & Impact</h3>
          <p>
            Combining my <strong>Software Engineering</strong> foundation with
            emerging tech like <strong>LLMs and RAG</strong>
            to drive digital transformation and deliver high-quality,
            user-centric software solutions globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;
