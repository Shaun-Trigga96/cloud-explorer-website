// components/Hero.jsx
import React from 'react';
// Import light mode image
import DashboardLight from '../../assets/images/Dashboard.png';
// Import dark mode image (assuming it's named Dashboard-Dark.png)
import DashboardDark from '../../assets/images/Dashboard-Dark.png';
import styles from './Hero.module.css';

function Hero({ theme }) { // Accept theme prop
  const heroClasses = `
    ${styles.hero}
    ${theme === 'dark' ? styles.darkMode : ''}
  `;
  // Select the correct image based on the theme
  const heroImageSrc = theme === 'dark' ? DashboardDark : DashboardLight;

  return (
    <section className={heroClasses}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>Master GCP, AWS & Azure</h1>
          <p>Learn key cloud concepts through visually appealing informatics, engaging quizzes, and certification prep for the top platforms.</p>
          <div className={styles.heroButtons}>
            <a href="#download" className={`${styles.btn} ${styles.primaryBtn}`}>Download Now</a>
            <a href="#features" className={`${styles.btn} ${styles.secondaryBtn}`}>Learn More</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImageSrc} alt="Cloud Explorer App" />
        </div>
      </div>
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          {/* The fill color will be controlled by CSS variables */}
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;