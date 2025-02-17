import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Employee Management System. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
