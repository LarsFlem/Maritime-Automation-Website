import React from "react";
import "./Header.css";
import logo from "./_Pictures/Logo.png"; // Import the SVG logo

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Maritime Automation Logo" className="logo-image" />
        <span className="logo-text">Maritime Automation</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#services">Tjenester</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
