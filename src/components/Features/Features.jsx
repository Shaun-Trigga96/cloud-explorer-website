// components/Features.jsx
import React from 'react';
import { FaLightbulb, FaQuestionCircle, FaCertificate, FaChartLine, FaRobot, FaShieldAlt } from 'react-icons/fa';
import styles from './Features.module.css';

function Features({ theme }) { // Accept theme prop
  const features = [
    {
      icon: FaLightbulb,
      title: 'Interactive Learning',
      description: 'Engaging modules that make learning GCP concepts easy and intuitive'
    },
    {
      icon: FaQuestionCircle,
      title: 'Knowledge Testing',
      description: 'Test your understanding with interactive quizzes at the end of each module'
    },
    {
      icon: FaCertificate,
      title: 'Certification Prep',
      description: 'Prepare for GCP certifications with comprehensive practice exams'
    },
    {
      icon: FaChartLine,
      title: 'Progress Tracking',
      description: 'Track your learning journey with detailed progress analytics'
    },
    {
      icon: FaRobot,
      title: 'AI-Enhanced Learning',
      description: 'Personalized content powered by advanced AI frameworks'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Environment',
      description: 'Firebase authentication ensures your data remains secure'
    }
  ];

  const featuresClasses = `
    ${styles.features}
    ${theme === 'dark' ? styles.darkMode : ''}
  `;

  return (
    <section id="features" className={featuresClasses}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose Cloud Explorer?</h2>
          <p>Our app offers a comprehensive learning experience for Google Cloud Platform</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.featureIcon}>
                <feature.icon />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;