import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';
import ScrollVelocity from './components/ScrollVelocity';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize hooks
  useCustomCursor();
  useScrollProgress();
  useScrollReveal();

  useEffect(() => {
    // Add loaded class to hero once loader finishes
    if (!isLoading) {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            heroEl.classList.add('loaded');
          }, 120);
        });
      }
    }
  }, [isLoading]);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true"></div>
      
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className="scroll-progress" id="scrollProgress"></div>
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <div className="section-index" id="sectionIndex">
        <span className="section-index-num" id="sectionIndexNum">01</span>
        <span className="section-index-total">/ 06</span>
        <span className="section-index-label" id="sectionIndexLabel">Home</span>
      </div>

      <Navbar />

      <main id="top">
        <Hero />
        
        <ScrollVelocity
          texts={['GLOBAL OPPORTUNITIES', 'EXPERT IMMIGRATION']}
          velocity={60}
          className="custom-scroll-text"
        />

        <WhyTrustUs />
        <Services />
        <Process />
        <Destinations />
      </main>

      <Footer />
    </>
  );
}

export default App;
