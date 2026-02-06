import React from "react";
import "./ToolsAndTech.css";
const ToolsAndTech = () => {
  return (
    <section className="tools-tech wrapper">
      <h2 className="heading">Tools & Technologies</h2>
      <div className="tools-grid gap-2">
        <div className="tool-category">
          <h3>Development</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className="tool-category">
          <h3>Design</h3>
          <ul>
            <li>Figma</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTech;
