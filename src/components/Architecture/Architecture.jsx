// components/Architecture.jsx
import React, { useState } from 'react';
import appArchitectureImage from '../../assets/images/CloudExplorer-App-Architecture.svg';
import cloudArchitectureImage from '../../assets/images/CloudExplorer-Cloud-Architecture.svg';
import styles from './Architecture.module.css';

function Architecture({ theme }) { // Accept theme prop
  const [activeTab, setActiveTab] = useState('app');

  const architectureClasses = `
    ${styles.architecture}
    ${theme === 'dark' ? styles.darkMode : ''}
  `;

  return (
    <section id="architecture" className={architectureClasses}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>System Architecture</h2>
          <p>Built with modern technologies for optimal performance and security</p>
        </div>
        <div className={styles.architectureTabs}>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${activeTab === 'app' ? styles.active : ''}`}
              onClick={() => setActiveTab('app')}
            >
              Application Architecture
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'cloud' ? styles.active : ''}`}
              onClick={() => setActiveTab('cloud')}
            >
              Cloud Architecture
            </button>
          </div>
          <div className={styles.architectureContent}>
            <div className={styles.architectureImage}>
              {/* Apply a background to the image container if SVGs are transparent and need contrast in dark mode */}
              {activeTab === 'app' && <img src={appArchitectureImage} alt="Application Architecture" />}
              {activeTab === 'cloud' && <img src={cloudArchitectureImage} alt="Cloud Architecture" />}
            </div>
            <div className={styles.architectureDetails}>
              {activeTab === 'app' && (
                <h3>Application Components</h3>
              )}
              {activeTab === 'cloud' && (
                <h3>Cloud Components</h3>
              )}
              <ul>
                {activeTab === 'app' && (
                  <>
                    <li><strong>Frontend:</strong> React Native for cross-platform compatibility</li>
                    <li><strong>Backend:</strong> Node.js with Express.js for API handling</li>
                    <li><strong>State Management:</strong> Redux for efficient state management</li>
                    <li><strong>Navigation:</strong> React Navigation for seamless UX</li>
                    <li><strong>Authentication:</strong> Firebase Authentication for security</li>
                  </>
                )}
                {activeTab === 'cloud' && (
                  <>
                    <li><strong>Compute:</strong> Google Compute Engine</li>
                    <li><strong>Storage:</strong> Google Cloud Storage</li>
                    <li><strong>Database:</strong> Google Firestore for real-time data</li>
                    <li><strong>CI/CD:</strong> Google Cloud Build for deployment</li>
                    <li><strong>Hosting:</strong> Google Cloud Run for containerized apps</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;