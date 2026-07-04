import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <LazyMotion features={domAnimation}>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div style={{ minHeight: '100vh', transition: 'background-color var(--transition-speed)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <WhyTrustUs />
      <Services />
      <Process />
      <Destinations />
      <Footer />
        </div>
      )}
    </LazyMotion>
  );
}

export default App;
