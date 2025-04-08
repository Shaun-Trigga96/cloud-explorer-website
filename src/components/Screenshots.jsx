// components/Screenshots.jsx
import React, { useState } from 'react';
// Import the screenshot images
import dashboardImage from './assets/screenshots/Dashboard.png';
import modulesImage from './assets/screenshots/ModuleScreen.png';
import quizzesImage from './assets/screenshots/Quizzes.png';
import examsImage from './assets/screenshots/Exams.png';

function Screenshots() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const screenshots = [
    {
      id: 1,
      image: dashboardImage, // Imported image variable
      title: 'Dashboard View',
      description: 'Interactive dashboard showing learning progress and achievements'
    },
    {
      id: 2,
      image: modulesImage, // Imported image variable
      title: 'Learning Module',
      description: 'Engaging content with visual aids for better understanding'
    },
    {
      id: 3,
      image: quizzesImage, // Imported image variable
      title: 'Quiz Interface',
      description: 'Test your knowledge with interactive quizzes'
    },
    {
      id: 4,
      image: examsImage, // Imported image variable
      title: 'Exam Interface',
      description: 'Test your knowledge with comprehensive exams'
    }
  ];

  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <div className="section-header">
          <h2>App Screenshots</h2>
          <p>See Cloud Explorer in action</p>
        </div>
        <div className="screenshot-viewer">
          <div className="screenshot-main">
            <img
              src={screenshots[activeScreenshot].image} // Use the imported variable
              alt={screenshots[activeScreenshot].title}
            />
            <div className="screenshot-info">
              <h3>{screenshots[activeScreenshot].title}</h3>
              <p>{screenshots[activeScreenshot].description}</p>
            </div>
          </div>
          <div className="screenshot-thumbnails">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`thumbnail ${activeScreenshot === index ? 'active' : ''}`}
                onClick={() => setActiveScreenshot(index)}
              >
                <img src={screenshot.image} alt={screenshot.title} /> {/* Use the imported variable */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
