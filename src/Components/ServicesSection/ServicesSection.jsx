import React from "react";
import ServicesCards from "../ServicesCards/ServicesCards";
import "./ServicesSection.css";
const ServicesSection = () => {
  return (
    <section className="wrapper container">
      <h2 className="heading">Services</h2>
      <p className="page-subtitle">What I can do for you and your business</p>
      <ServicesCards />
    </section>
  );
};

export default ServicesSection;
