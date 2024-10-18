import React from "react";
import "./Footer.css"; // Make sure to create and import a CSS file for Footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Maritime Automation. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
