// components/PrivacyPolicy.jsx
import React from 'react';
import styles from './PrivacyPolicy.module.css'; // Import the CSS module

function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.container}> {/* Or use global container */}
        <div className={styles.sectionHeader}>
          <h2>Privacy Policy</h2>
        </div>

        <section className={styles.privacySection}>
          <h3>Who We Are</h3>
          <p>
            Cloud Explorer is a mobile application designed to help users learn and master the Google Cloud Platform.
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </section>

        <section className={styles.privacySection}>
          <h3>Information Collection and Use</h3>
          <p>
            We collect information to provide and improve our services. The types of information we collect include:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> We may collect personal information such as your name, email address, and other contact details when you register for an account or contact us for support.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data on how you interact with our app, such as the features you use, the content you access, and the time spent on different sections.
            </li>
            <li>
              <strong>Device Information:</strong> We may collect information about the device you use to access our app, including the device type, operating system, and unique device identifiers.
            </li>
          </ul>
          <p>
            We use this information to:
          </p>
          <ul>
            <li>Provide and maintain our services.</li>
            <li>Improve and personalize your experience.</li>
            <li>Communicate with you about updates, offers, and support.</li>
            <li>Monitor and analyze usage and trends.</li>
          </ul>
        </section>

        <section className={styles.privacySection}>
          <h3>Sharing of Personal Information</h3>
          <p>
            We do not sell your personal information to third parties. We may share your information with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with third-party service providers who assist us in providing our services, such as hosting, analytics, and customer support.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </li>
          </ul>
        </section>

        <section className={styles.privacySection}>
          <h3>Cookies and Similar Technologies</h3>
          <p>
            We may use cookies and similar technologies to collect information about your usage of our app. Cookies are small files stored on your device that help us improve our services and your experience. You can manage your cookie preferences through your device settings.
          </p>
        </section>

        <section className={styles.privacySection}>
          <h3>Security</h3>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.privacySection}>
          <h3>Links to Other Sites</h3>
          <p>
            Our app may contain links to other websites or services that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className={styles.privacySection}>
          <h3>Children's Privacy</h3>
          <p>
            Our app is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.
          </p>
        </section>

        <section className={styles.privacySection}>
          <h3>Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section className={styles.privacySection}>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@cloudexplorer.com">support@cloudexplorer.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
