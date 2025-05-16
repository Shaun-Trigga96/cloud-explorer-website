// components/CookieConsentBanner/CookieConsentBanner.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieConsentBanner.module.css';

const COOKIE_CONSENT_KEY = 'cookieConsentGiven';

function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentGiven) {
      // Delay showing the banner slightly to allow page content to load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // 1 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.cookieBanner} ${isVisible ? styles.show : ''}`}>
      <div className={styles.cookieText}>
        <p>
          We use cookies to enhance your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies. Read our <Link to="/privacy-policy">Privacy Policy</Link> for more details.
        </p>
      </div>
      <div className={styles.cookieActions}>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
}

export default CookieConsentBanner;