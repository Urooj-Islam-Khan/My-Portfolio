import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme preference
  }, [theme]);
  return (
    <header>
      <nav className="flex between  navbar">
        <NavLink to="/" className="logo">
          <span>U</span> Urooj Khan.
        </NavLink>

        {/* destop menu  */}
        <ul className="flex gap-2 desktop-menu">
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="link">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact Me
            </NavLink>
          </li>
        </ul>

        <div className="nav-right flex gap-2">
          <button
            onClick={toggleTheme}
            className="icon-box border-inverse theme-btn"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {theme === "light" ? (
              <FaMoon title="Switch to Dark" />
            ) : (
              <FiSun title="Switch to Light" />
            )}
          </button>
          <a href="mailto:uroojislamkhan124@gmail.com" className="nav-action">
            Let's Talk
          </a>
          <a href="#" className="hamburger-icon" onClick={toggleMenu}>
            {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
          </a>
        </div>

        {/* mobile menu  */}
        <ul
          className={`flex center gap-2 mobile-menu ${isMenuActive ? "mobile-menu-active" : ""}`}
        >
          <li>
            <NavLink to="/" className="link" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link" onClick={toggleMenu}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="link" onClick={toggleMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="link" onClick={toggleMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="link" onClick={toggleMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link" onClick={toggleMenu}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
