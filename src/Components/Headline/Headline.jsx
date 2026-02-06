import React from "react";
import { FaAsterisk } from "react-icons/fa";
import "./Headline.css";
const Headline = () => {
  return (
    <section className="headline">
      <div className="moving-txt">
        <div className="heading-container">
          <h4>Website Development</h4>
          <FaAsterisk className="star" />
          <h4>Building AI</h4>
          <FaAsterisk className="star" />
          <h4>MERN Stack Development</h4>
          <FaAsterisk className="star" />
        </div>
        <div className="heading-container">
          <h4>Website Development</h4>
          <FaAsterisk className="star" />
          <h4>Building AI</h4>
          <FaAsterisk className="star" />
          <h4>MERN Stack Development</h4>
          <FaAsterisk className="star" />
        </div>
        <div className="heading-container">
          <h4>Website Development</h4>
          <FaAsterisk className="star" />
          <h4>Building AI</h4>
          <FaAsterisk className="star" />
          <h4>MERN Stack Development</h4>
          <FaAsterisk className="star" />
        </div>
      </div>
    </section>
  );
};

export default Headline;
