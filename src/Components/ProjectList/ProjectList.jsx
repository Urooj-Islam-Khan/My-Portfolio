import React from "react";
import "./ProjectList.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectList = () => {
  const handleMouseEnter = (e) => {
    e.currentTarget.play().catch((err) => console.log("Video play blocked"));
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  };

  const projects = [
    {
      id: 1,
      title: "BizNova: The CEO You Can Afford",
      category: "ai",
      type: "Generative AI & RAG",
      video: "/videos/Biznova.mp4",
      github: "https://github.com/your-username/biznova", // Apna link yahan dalein
      demo: "",
      tech: ["Llama 3", "LangChain", "FastAPI", "ChromaDB", "Python", "React"],
      desc: "A high-end AI Virtual Assistant built for my thesis. It uses RAG to analyze business data (PDF/CSV) and provides conversational insights with ultra-fast inference via Groq.",
      featured: true,
    },
    {
      id: 2,
      title: "Car Showroom Platform",
      category: "web",
      type: "Frontend Website",
      video: "/videos/CarShowroom.mp4",
      github: "",
      demo: "https://uroojsportfolio.netlify.app/assets/websites/car%20showroom/",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      desc: "A premium vehicle management system featuring interactive views and a secure booking inquiry system for luxury dealerships.",
    },
    {
      id: 3,
      title: " Ecommerce Website",
      category: "web",
      type: "Full Stack Website",
      video: "/videos/Ecommerce.mp4",
      github: "",
      demo: "https://uroojsportfolio.netlify.app/assets/websites/myecommerce/",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      desc: "A complete e-commerce solution with user authentication, dynamic product filtering, and a real-time order tracking dashboard.",
    },
    {
      id: 4,
      title: "Hospital Management System",
      category: "web",
      type: "Management System",
      video: "/videos/Hospital.mp4",
      github: "https://github.com/your-username/hospital-system",
      demo: "",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
      desc: "A healthcare platform designed to streamline doctor-patient interactions and manage electronic health records (EHR) efficiently.",
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "web",
      type: "Frontend Web",
      video: "/videos/Restaurant.mp4",
      github: "",
      demo: "https://uroojsportfolio.netlify.app/assets/websites/my%20restaurant/",
      tech: ["HTML", "CSS", "JS", "Animation"],
      desc: "A modern dining solution featuring an interactive digital menu and a real-time table reservation system.",
    },
  ];

  return (
    <section className="wrapper projects-section">
      <div className="container">
        <h2 className="heading">Featured Projects</h2>
        <div className="all-projects-grid">
          {projects.map((project) => (
            <div
              className={`project-card-full ${project.featured ? "featured-card" : ""}`}
              key={project.id}
            >
              <div className="project-image-container">
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="project-video"
                />
                {project.featured && (
                  <span className="featured-badge">Hero Project</span>
                )}
              </div>

              <div className="project-info">
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
