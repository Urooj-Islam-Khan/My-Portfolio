import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left-content">
          <a href="#" className="logo">
            <span>U</span> Urooj Khan
          </a>

          <p className="footer-tagline">
            Building smart digital experiences with clean code and creative
            design.
          </p>

          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/uroojislamkhan/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Urooj-Islam-Khan" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/engr_urooj_islam/"
              target="_blank"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        <div className="footer-right-content">
          <h6>Let’s Connect</h6>
          <p>Have a project or idea in mind?</p>
          <a href="mailto:uroojislamkhan124@gmail.com" className="footer-mail">
            Mail Me
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Urooj Khan — Built with passion & code.</p>
      </div>
    </footer>
  );
};

export default Footer;
