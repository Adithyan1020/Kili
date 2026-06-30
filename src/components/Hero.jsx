import React, { useState, useEffect } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import MilitaryMap from './MilitaryMap';

const Hero = ({ theme }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Detect low-end hardware, slow networks, or reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSlowConnection = navigator.connection && 
      (navigator.connection.saveData || navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
    
    // Use deviceMemory API: <= 4GB RAM strongly correlates with budget/older devices.
    // Safari doesn't support this (returns undefined), which perfectly prevents false positives on iPhones/Macs.
    const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    
    // We fall back to the lightweight static visual if any of these criteria match
    if (prefersReducedMotion || isSlowConnection || hasLowMemory) {
      setIsLowEnd(true);
    }
  }, []);

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div className="grid-2-col">
          
          {/* Left Text Content */}
            <m.div 
              className="hero-text-content"
              style={{ opacity, y }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >

            
            <m.h1 
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
              style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
                lineHeight: 1.4, 
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0px',
                perspective: '1000px'
              }}
            >
              <span style={{ color: 'var(--color-accent)' }}><SplitWord>TRUVIQ</SplitWord></span> <SplitWord>IMMIGRATION</SplitWord><br/>
              <SplitWord>& CONSULTANCY</SplitWord>
            </m.h1>

            <m.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '1.1rem',
                marginBottom: '40px',
                maxWidth: '550px',
                lineHeight: 1.8
              }}
            >
              <span style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: '600', display: 'block', marginBottom: '15px' }}>Your Trusted Gateway to Global Opportunities</span>
              Expert Immigration & Visa Solutions Designed Around Your Future.
            </m.p>
            
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <button className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>Book Expert Consultation</button>
            </m.div>

          </m.div>

          {/* Right Globe Content */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="hero-globe-container"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              aspectRatio: '1'
            }}
          >
            {isLowEnd ? (
              <div style={{ width: '100%', height: '100%', padding: '5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/static_globe.png" 
                  alt="Interactive Globe Static Fallback" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain',
                    filter: theme === 'light' ? 'none' : 'brightness(0.9) contrast(1.1)' 
                  }} 
                />
              </div>
            ) : (
              <MilitaryMap
                interaction={{
                  autoRotate: true,
                  autoRotateSpeed: 4,
                  rotateX: 0,
                  rotateY: 20,
                  rotateZ: -20,
                  enableDrag: true,
                  dragSensitivity: 0.4,
                  glowColor: theme === 'light' ? "#0E8392" : "#5BEEFC",
                  glowIntensity: 0.4,
                  showStars: true,
                  showLabels: true
                }}
                mapStyle={{
                  oceanColor: "transparent",
                  landFill: theme === 'light' ? "#F4F7F9" : "#1E2732",
                  landStroke: theme === 'light' ? "#0E8392" : "#151A1F",
                  strokeWidth: 0.8,
                  hoverColor: theme === 'light' ? "#0E8392" : "#5BEEFC",
                  disabledColor: theme === 'light' ? "#FFFFFF" : "#151A1F"
                }}
                countries={[
                  {code: "FRA", name: "France", enabled: true},
                  {code: "POL", name: "Poland", enabled: true},
                  {code: "DEU", name: "Germany", enabled: true},
                  {code: "USA", name: "USA", enabled: true},
                  {code: "ITA", name: "Italy", enabled: true},
                  {code: "GBR", name: "UK", enabled: true}
                ]}
                markers={[
                  { label: "France", description: "Visa & Immigration", latitude: 46.2276, longitude: 2.2137, color: theme === 'light' ? "#0E8392" : "#5BEEFC" },
                  { label: "Poland", description: "Visa & Immigration", latitude: 51.9194, longitude: 19.1451, color: theme === 'light' ? "#0E8392" : "#5BEEFC" },
                  { label: "Germany", description: "Visa & Immigration", latitude: 51.1657, longitude: 10.4515, color: theme === 'light' ? "#0E8392" : "#5BEEFC" },
                  { label: "USA", description: "Visa & Immigration", latitude: 37.0902, longitude: -95.7129, color: theme === 'light' ? "#0E8392" : "#5BEEFC" },
                  { label: "Italy", description: "Visa & Immigration", latitude: 41.8719, longitude: 12.5674, color: theme === 'light' ? "#0E8392" : "#5BEEFC" },
                  { label: "UK", description: "Visa & Immigration", latitude: 55.3781, longitude: -3.4360, color: theme === 'light' ? "#0E8392" : "#5BEEFC" },
                ]}
                tooltip={{ show: true, background: "rgba(18, 20, 23, 0.92)", textColor: "#e7ece9", borderColor: "rgba(140, 150, 145, 0.32)" }}
                grid={{ show: true, color: "#5b636a", opacity: 0.2 }}
                layout={{ cornerRadius: 0, padding: 0, showBorder: false, borderColor: "transparent" }}
              />
            )}
          </m.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

