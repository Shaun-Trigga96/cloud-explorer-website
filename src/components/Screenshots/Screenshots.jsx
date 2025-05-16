// components/Screenshots/Screenshots.jsx
import { useState, useEffect, useCallback } from 'react';
// Import light mode screenshot images
import dashboardImageLight from '../../assets/screenshots/Dashboard.png';
import modulesImageLight from '../../assets/screenshots/Modules.png';
import quizzesImageLight from '../../assets/screenshots/Quizzes.png';
import examsImageLight from '../../assets/screenshots/Exams.png';
import learningPathsImageLight from '../../assets/screenshots/LearningPaths.png';
import currentPathImageLight from '../../assets/screenshots/CurrentPath.png';
import quizProgressImageLight from '../../assets/screenshots/QuizProgress.png';
import quizResultsImageLight from '../../assets/screenshots/QuizResults.png';
import examStartImageLight from '../../assets/screenshots/ExamStart.png';
import examProgressImageLight from '../../assets/screenshots/ExamProgress.png';
import examResultsImageLight from '../../assets/screenshots/ExamResults.png';
import communityPostsImageLight from '../../assets/screenshots/CommunityPosts.png';
import communityUsersImageLight from '../../assets/screenshots/CommunityUsers.png';
import communityEventsImageLight from '../../assets/screenshots/CommunityEvents.png';
import settingsImageLight from '../../assets/screenshots/Settings.png';
import profileImageLight from '../../assets/screenshots/Profile.png';

// Import dark mode screenshot images
import dashboardImageDark from '../../assets/screenshots/Dashboard-Dark.png';
import modulesImageDark from '../../assets/screenshots/Modules-Dark.png';
import quizzesImageDark from '../../assets/screenshots/Quizzes-Dark.png';
import examsImageDark from '../../assets/screenshots/Exams-Dark.png';
import learningPathsImageDark from '../../assets/screenshots/LearningPaths-Dark.png';
import currentPathImageDark from '../../assets/screenshots/CurrentPath-Dark.png';
import quizProgressImageDark from '../../assets/screenshots/QuizProgress-Dark.png';
import quizResultsImageDark from '../../assets/screenshots/QuizResults-Dark.png';
import examStartImageDark from '../../assets/screenshots/ExamStart-Dark.png';
import examProgressImageDark from '../../assets/screenshots/ExamProgress-Dark.png';
import examResultsImageDark from '../../assets/screenshots/ExamResults-Dark.png';
import communityPostsImageDark from '../../assets/screenshots/CommunityPosts-Dark.png';
import communityUsersImageDark from '../../assets/screenshots/CommunityUsers-Dark.png';
import communityEventsImageDark from '../../assets/screenshots/CommunityEvents-Dark.png';
import settingsImageDark from '../../assets/screenshots/Settings-Dark.png';
import profileImageDark from '../../assets/screenshots/Profile-Dark.png';

import styles from './Screenshots.module.css';

function Screenshots({ theme }) { // Accept theme as a prop
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Original data with both light and dark image references
  const rawScreenshotsData = [
    {
      id: 1,
      imageLight: dashboardImageLight,
      imageDark: dashboardImageDark,
      title: 'Dashboard View',
      description: 'Interactive dashboard showing learning progress and achievements'
    },
    {
      id: 2,
      imageLight: modulesImageLight,
      imageDark: modulesImageDark,
      title: 'Learning Module',
      description: 'Engaging content with visual aids for better understanding'
    },
    {
      id: 3,
      imageLight: quizzesImageLight,
      imageDark: quizzesImageDark,
      title: 'Quiz Interface',
      description: 'Test your knowledge with interactive quizzes'
    },
    {
      id: 4,
      imageLight: examsImageLight,
      imageDark: examsImageDark,
      title: 'Exam Interface',
      description: 'Test your knowledge with comprehensive exams'
    },
    {
      id: 5,
      imageLight: learningPathsImageLight,
      imageDark: learningPathsImageDark,
      title: 'Learning Paths',
      description: 'Explore curated learning paths tailored to your goals'
    },
    {
      id: 6,
      imageLight: currentPathImageLight,
      imageDark: currentPathImageDark,
      title: 'Current Learning Path',
      description: 'Track your progress within your active learning path'
    },
    {
      id: 7,
      imageLight: quizProgressImageLight,
      imageDark: quizProgressImageDark,
      title: 'Quiz Progress',
      description: 'Monitor your quiz attempts and scores'
    },
    {
      id: 8,
      imageLight: quizResultsImageLight,
      imageDark: quizResultsImageDark,
      title: 'Quiz Results',
      description: 'Review detailed feedback on your quiz performance'
    },
    {
      id: 9,
      imageLight: examStartImageLight,
      imageDark: examStartImageDark,
      title: 'Exam Start Screen',
      description: 'Prepare to test your comprehensive knowledge'
    },
    {
      id: 10,
      imageLight: examProgressImageLight,
      imageDark: examProgressImageDark,
      title: 'Exam in Progress',
      description: 'Navigate through the exam questions'
    },
    {
      id: 11,
      imageLight: examResultsImageLight,
      imageDark: examResultsImageDark,
      title: 'Exam Results',
      description: 'View your final exam score and performance breakdown'
    },
    {
      id: 12,
      imageLight: communityPostsImageLight,
      imageDark: communityPostsImageDark,
      title: 'Community Forum',
      description: 'Engage with fellow learners and share insights'
    },
    {
      id: 13,
      imageLight: communityUsersImageLight,
      imageDark: communityUsersImageDark,
      title: 'Community Members',
      description: 'Connect with other users in the Cloud Explorer community'
    },
    {
      id: 14,
      imageLight: communityEventsImageLight,
      imageDark: communityEventsImageDark,
      title: 'Community Events',
      description: 'Discover and participate in upcoming community events'
    },
    {
      id: 15,
      imageLight: settingsImageLight,
      imageDark: settingsImageDark,
      title: 'Account Settings',
      description: 'Manage your account preferences and settings'
    },
    {
      id: 16,
      imageLight: profileImageLight,
      imageDark: profileImageDark,
      title: 'User Profile',
      description: 'Test your knowledge with comprehensive exams'
    }
  ];

  // Derive the screenshots array with the correct image based on the current theme
  const screenshots = rawScreenshotsData.map(s => ({
    ...s,
    image: theme === 'dark' ? s.imageDark : s.imageLight,
  }));

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