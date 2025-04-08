// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from './assets/images/cloud_explorer.png'; // Import the logo

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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo"> {/* Make the logo a link */}
          <img src={logo} alt="Cloud Explorer" />
          <span>Cloud Explorer</span>
        </Link>
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="#features">Features</Link></li>
            <li><Link to="#architecture">Architecture</Link></li>
            <li><Link to="#screenshots">Screenshots</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><a href="#download" className="download-btn">Download App</a></li>
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
