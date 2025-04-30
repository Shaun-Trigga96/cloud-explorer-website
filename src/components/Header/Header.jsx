// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../../assets/images/cloud_explorer.png'; // Corrected logo import path
import styles from './Header.module.css'; // Import the CSS Module

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}> {/* Assuming you might want a container style specific to header */}
        <Link to="/" className={styles.logo}> {/* Make the logo a link */}
          <img src={logo} alt="Cloud Explorer" />
          <span>Cloud Explorer</span>
        </Link>
        <nav className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><a href="#download" className={styles.downloadBtn}>Download App</a></li>
          </ul>
        </nav>
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
