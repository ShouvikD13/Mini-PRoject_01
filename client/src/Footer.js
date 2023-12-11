
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MyBlog</p>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;