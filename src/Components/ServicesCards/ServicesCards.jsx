import React from "react";
import {
  FaCode,
  FaRobot,
  FaServer,
  FaPalette,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { DiDatabase } from "react-icons/di";
import "./ServicesCards.css";
const ServicesCards = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      icon: <FaCode />,
      badge: "Expertise",
      description:
        "Custom, responsive websites and web applications built with modern technologies like React, Next.js, and Node.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
        "Cross-Browser Compatible",
      ],
      tech: ["React", "Tailwind CSS","Javascript", "HTML5 CSS3"],
    },
    {
      id: 2,
      title: "Generative AI & RAG Solutions",
      icon: <FaRobot />,
      badge: "Popular",
      description:
        "Building intelligent systems using LLMs (Llama 3), LangChain, and Vector Databases for business automation.",
      features: [
        "Custom RAG Pipelines",
        "AI Chatbots",
        "Document Analysis",
        "Prompt Engineering",
      ],
      tech: ["Python", "FastAPI", "Llama 3", "ChromaDB"],
    },
    {
      id: 3,
      title: "Backend & API Architecture",
      icon: <FaServer />,
      description:
        "Robust and scalable server-side solutions with RESTful APIs, secure authentication, and cloud integration.",
      features: [
        "Scalable Microservices",
        "Database Design",
        "Auth & Security",
      ],
      tech: ["Node.js", "Python", "MySQL", "MongoDB"],
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <FaPalette />,
      description:
        "User-centered design solutions focusing on aesthetics and functionality to create intuitive user interfaces.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
      tech: ["Figma", "Canva", "UI Design"],
    },
  ];

  return (
    <section className="services-content gap-2">
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card main-service" key={service.id}>
            <div className="service-icon-wrapper">
              <div className="service-icon">{service.icon}</div>
              {service.badge && (
                <div className={`service-badge ${service.badge.toLowerCase()}`}>
                  {service.badge}
                </div>
              )}
            </div>

            <h3>{service.title}</h3>

            <p className="service-description">{service.description}</p>

            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="service-tech">
              {service.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
