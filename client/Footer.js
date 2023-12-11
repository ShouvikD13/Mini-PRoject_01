
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";

export default function footer(){
    const Footer = () => {
        return (
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; {new Date().getFullYear()}MyBlog</p>
              <nav className="footer-nav">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/terms">Terms</a></li>
                  {/* Add more links as needed */}
                </ul>
              </nav>
            </div>
          </footer>
        );
      };
      

}
