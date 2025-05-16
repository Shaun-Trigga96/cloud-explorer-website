// App.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Architecture from './components/Architecture/Architecture';
import Screenshots from './components/Screenshots/Screenshots';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import CookieConsentBanner from './components/CookieConsentBanner/CookieConsentBanner'; // Import the banner
import ScrollToTop from './components/shared/ScrollToTop';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Add/remove .dark-mode class on body
  useEffect(() => {
    document.body.className = theme + '-mode'; // e.g., 'light-mode' or 'dark-mode'
  }, [theme]);

  return (
    <Router>
      {/* Pass theme and toggleTheme to the main div if needed for global context,
          or directly to components like Header */}
      <div className={`App`}> {/* Removed theme class from here, handled by body tag now */}
        <ScrollToTop />
        <Header theme={theme} toggleTheme={toggleTheme} /> {/* Pass theme and toggle function */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero theme={theme} /> {/* Pass theme to Hero */}
              <Features theme={theme} /> {/* Pass theme to Features */}
              <Architecture theme={theme} /> {/* Pass theme to Architecture */}
              <Screenshots theme={theme} /> {/* Pass theme to Screenshots */}
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Add other routes here if needed */}
        </Routes>
        <Footer />
        <CookieConsentBanner /> {/* Add the banner here */}
      </div>
    </Router>
  );
}

export default App;