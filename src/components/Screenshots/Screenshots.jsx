// components/Screenshots/Screenshots.jsx
import { useState, useEffect, useCallback } from 'react';
// Import the screenshot images
import dashboardImage from '../../assets/screenshots/Dashboard.png';
import modulesImage from '../../assets/screenshots/ModuleScreen.png';
import quizzesImage from '../../assets/screenshots/Quizzes.png';
import examsImage from '../../assets/screenshots/Exams.png';
import styles from './Screenshots.module.css';

function Screenshots() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const screenshots = [
    {
      id: 1,
      image: dashboardImage,
      title: 'Dashboard View',
      description: 'Interactive dashboard showing learning progress and achievements'
    },
    {
      id: 2,
      image: modulesImage,
      title: 'Learning Module',
      description: 'Engaging content with visual aids for better understanding'
    },
    {
      id: 3,
      image: quizzesImage,
      title: 'Quiz Interface',
      description: 'Test your knowledge with interactive quizzes'
    },
    {
      id: 4,
      image: examsImage,
      title: 'Exam Interface',
      description: 'Test your knowledge with comprehensive exams'
    }
  ];

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveScreenshot((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, screenshots.length]);

  // Function to move to the previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveScreenshot((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, screenshots.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, nextSlide]);

  // Pause autoplay when hovering over slideshow
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section id="screenshots" className={styles.screenshots}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>App Screenshots</h2>
          <p>See Cloud Explorer in action</p>
        </div>
        
        <div 
          className={styles.screenshotViewer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.navigation}>
            <button 
              className={styles.navButton}
              onClick={prevSlide}
              aria-label="Previous screenshot"
            >
              &#10094;
            </button>
            <button 
              className={styles.navButton}
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              &#10095;
            </button>
          </div>
          
          <div className={styles.screenshotMain}>
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.id}
                className={`${styles.slide} ${
                  index === activeScreenshot ? styles.activeSlide : ''
                } ${isTransitioning ? styles.transitioning : ''}`}
                style={{ 
                  opacity: index === activeScreenshot ? 1 : 0,
                  zIndex: index === activeScreenshot ? 2 : 1
                }}
              >
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className={styles.mainImage}
                />
                <div className={styles.screenshotInfo}>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.screenshotThumbnails}>
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`${styles.thumbnail} ${activeScreenshot === index ? styles.active : ''}`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveScreenshot(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
              >
                <img src={screenshot.image} alt={screenshot.title} />
              </div>
            ))}
          </div>
          
          <div className={styles.indicators}>
            {screenshots.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${
                  index === activeScreenshot ? styles.activeIndicator : ''
                }`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveScreenshot(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;