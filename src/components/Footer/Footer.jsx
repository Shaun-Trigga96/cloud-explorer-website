// components/Footer.jsx
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';
import logo from '../../assets/images/cloud_explorer.png'; // Corrected logo path
import styles from './Footer.module.css'; // Import the CSS module

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
             <img src={logo} alt="Cloud Explorer" /> 
            <h3>Cloud Explorer</h3>
            <p>Master GCP, AWS & Azure with ease</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>App</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#architecture">Architecture</a></li>
                <li><a href="#screenshots">Screenshots</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#download" className={styles.downloadBtn}>Download</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#contribute">Contribute</a></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <ul className={styles.socialLinks}>
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
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Cloud Explorer. All rights reserved.</p>
          <p>Built with React. Licensed under MIT.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;