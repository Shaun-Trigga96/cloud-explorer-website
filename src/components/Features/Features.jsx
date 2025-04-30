// components/Features.jsx
import React from 'react';
import { FaLightbulb, FaQuestionCircle, FaCertificate, FaChartLine, FaRobot, FaShieldAlt } from 'react-icons/fa'; // Import icons from react-icons/fa
import styles from './Features.module.css'; // Import the CSS module

function Features() {
  const features = [
    {
      icon: FaLightbulb, // React Icon component
      title: 'Interactive Learning',
      description: 'Engaging modules that make learning GCP concepts easy and intuitive'
    },
    {
      icon: FaQuestionCircle, // React Icon component
      title: 'Knowledge Testing',
      description: 'Test your understanding with interactive quizzes at the end of each module'
    },
    {
      icon: FaCertificate, // React Icon component
      title: 'Certification Prep',
      description: 'Prepare for GCP certifications with comprehensive practice exams'
    },
    {
      icon: FaChartLine, // React Icon component
      title: 'Progress Tracking',
      description: 'Track your learning journey with detailed progress analytics'
    },
    {
      icon: FaRobot, // React Icon component
      title: 'AI-Enhanced Learning',
      description: 'Personalized content powered by advanced AI frameworks'
    },
    {
      icon: FaShieldAlt, // React Icon component
      title: 'Secure Environment',
      description: 'Firebase authentication ensures your data remains secure'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}> {/* Or use a global container class */}
        <div className={styles.sectionHeader}>
          <h2>Why Choose Cloud Explorer?</h2>
          <p>Our app offers a comprehensive learning experience for Google Cloud Platform</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.featureIcon}>
                <feature.icon /> {/* Render the imported React Icon component */}
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
