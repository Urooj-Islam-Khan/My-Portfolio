import React from "react";
import "./ContactForm.css";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
const ContactForm = () => {
  return (
    <section className="wrapper container">
      <div className="page-header">
        <h2 className="heading">Get In Touch</h2>
        <p className="page-subtitle">Let's discuss your next project</p>
      </div>

      <div className="contact-content gap-2">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat about technology.
          </p>

          <div className="contact-methods gap-2">
            <a
              href="mailto:uroojislamkhan124@gmail.com"
              className="contact-method"
            >
              <div className="contact-icon">
                <FaRegEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>uroojislamkhan124@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Urooj-Islam-Khan"
              target="_blank"
              className="contact-method"
            >
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>@Urooj-Islam-Khan</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/uroojislamkhan/"
              target="_blank"
              className="contact-method"
            >
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/uroojislamkhan/</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Username" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="email" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Purpose of mail" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Type your message"
                rows="6"
                required
              ></textarea>
            </div>
            <a
              href="mailto::uroojislamkhan124@gmail.com"
              className="btn btn-primary flex center submit"
            >
              <span>Send Message</span>
              <FiSend />
            </a>
          </form>
          <div className="form-status"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
