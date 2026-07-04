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
    
    // Better heuristic: check cores and memory if available, or if it's a mobile device to be safer
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
    const isMobileSafari = /iPhone|iPad|iPod/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent) && !/CriOS/i.test(navigator.userAgent);
    
    // We fall back to the lightweight static visual if any of these criteria match, or if it's an older iPhone
    if (prefersReducedMotion || isSlowConnection || lowCores || lowMemory || (isMobileSafari && window.screen.height < 800)) {
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
              style={{ opacity, y, textAlign: 'left' }}
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
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' }}
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
                  onError={(e) => {
                    e.target.style.display = 'none';
                    // Optional: show a glowing circle or just leave empty if image fails
                  }}
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
                  {code: "CAN", name: "Canada", enabled: true},
                  {code: "AUS", name: "Australia", enabled: true},
                  {code: "GBR", name: "UK", enabled: true},
                  {code: "FRA", name: "France", enabled: true},
                  {code: "DEU", name: "Germany", enabled: true}
                ]}
                markers={[
                  { label: "Canada", description: "Visa & Immigration", latitude: 56.1304, longitude: -106.3468, color: theme === 'light' ? "#0C707D" : "#5BEEFC" },
                  { label: "Australia", description: "Visa & Immigration", latitude: -25.2744, longitude: 133.7751, color: theme === 'light' ? "#0C707D" : "#5BEEFC" },
                  { label: "UK", description: "Visa & Immigration", latitude: 55.3781, longitude: -3.4360, color: theme === 'light' ? "#0C707D" : "#5BEEFC" },
                  { label: "Europe", description: "Visa & Immigration", latitude: 48.8566, longitude: 2.3522, color: theme === 'light' ? "#0C707D" : "#5BEEFC" }
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

