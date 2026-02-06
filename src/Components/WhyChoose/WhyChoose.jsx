import React from "react";
import { FaBoltLightning, FaRobot } from "react-icons/fa6";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";
import { MdOutlineAutoGraph } from "react-icons/md";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="wrapper">
        <h2 className="heading">Why Work With Me</h2>

      <div className="why-choose-grid">
        {/* Card 1: AI & Engineering Expertise */}
        <div className="why-card">
          <div className="why-icon">
            <FaRobot />
          </div>
          <h3>AI-Powered Solutions</h3>
          <p>
            Sirf normal apps nahi, balki intelligent systems (RAG, LLMs) jo
            aapke data ko analyze karke business decisions mein madad karein.
          </p>
        </div>

        {/* Card 2: Performance & Speed */}
        <div className="why-card">
          <div className="why-icon">
            <FaBoltLightning />
          </div>
          <h3>High Performance</h3>
          <p>
            FastAPI aur React ka istemal karte hue aisi applications jo
            millisecond mein respond karein aur user experience ko seamless
            banayein.
          </p>
        </div>

        {/* Card 3: Quality First */}
        <div className="why-card">
          <div className="why-icon">
            <HiOutlineBadgeCheck />
          </div>
          <h3>Software Excellence</h3>
          <p>
            Software Engineering principles ke mutabiq clean code, taake future
            mein app ko scale karna aur maintain karna asaan ho.
          </p>
        </div>

        {/* Card 4: Business Results */}
        <div className="why-card">
          <div className="why-icon">
            <MdOutlineAutoGraph />
          </div>
          <h3>Scalable & Results-Driven</h3>
          <p>
            Mera focus sirf feature banane par nahi, balki aise product par hota
            hai jo aapke business goals aur growth ko hit karein.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
