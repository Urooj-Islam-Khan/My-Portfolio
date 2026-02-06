import React from "react";
import "./FeaturedProjects.css";
import { FaGithub } from "react-icons/fa6";
const FeaturedProjects = () => {
  return (
    <section className="wrapper">
      <div className="featured-projects">
        <h2 className="heading">Featured Work</h2>
        <div className="featured-projects-grid gap-2">
          <div className="project-card">
            <span className="project-type">Web Application</span>
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-description">
              A comprehensive e-commerce solution with advanced product
              filtering, secure checkout process, and seamless user experience
              across all devices.
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JS</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="project-card">
            <span className="project-type">AI/ML </span>
            <h3 className="project-title">AI Business Assistant</h3>
            <p className="project-description">
              An AI-powered business assistant that analyzes data and delivers
              smart, actionable insights for better decision-making.
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>JS</span>
              <span>Python</span>
              <span>Fast API</span>
              <span>LLM</span>
              <span>RAG</span>
              <span>SQLite</span>
            </div>
          </div>

          <div className="project-card">
            <span className="project-type">Web Application</span>
            <h3 className="project-title">Hospital Management System</h3>
            <p className="project-description">
              This is a responsive multi-page hospital website designed to
              provide secure access to medical services and information. 
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
