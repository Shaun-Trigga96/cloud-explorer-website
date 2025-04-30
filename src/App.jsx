// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Architecture from './components/Architecture/Architecture';
import Screenshots from './components/Screenshots/Screenshots';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from './components/shared/ScrollToTop'; // Import ScrollToTop
import './styles/global.css'; // Import global styles from the styles directory

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Architecture />
              <Screenshots />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
