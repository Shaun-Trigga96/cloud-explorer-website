// components/Footer.jsx
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons
import logo from './assets/images/cloud_explorer.png'; // Import the logo
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Cloud Explorer" /> {/* Use the imported logo */}
            <h3>Cloud Explorer</h3>
            <p>Master Google Cloud Platform with ease</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>App</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#architecture">Architecture</a></li>
                <li><a href="#screenshots">Screenshots</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="#download">Download</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#contribute">Contribute</a></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <ul className="social-links">
                <li>
                  <a href="#github">
                    <FaGithub /> {/* GitHub icon */}
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <FaTwitter /> {/* Twitter icon */}
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <FaLinkedin /> {/* LinkedIn icon */}
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cloud Explorer. All rights reserved.</p>
          <p>Built with React. Licensed under MIT.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
