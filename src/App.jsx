import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div style={{ minHeight: '100vh', transition: 'background-color var(--transition-speed)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <WhyTrustUs />
      <Services />
      <Process />
      <Destinations />
      <Testimonials />
      <Footer />
        </div>
      )}
    </>
  );
}

export default App;
