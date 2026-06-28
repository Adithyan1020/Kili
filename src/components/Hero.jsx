import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import MilitaryMap from './MilitaryMap';

const Hero = ({ theme }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div className="grid-2-col">
          
          {/* Left Text Content */}
            <motion.div 
              className="hero-text-content"
              style={{ opacity, y }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >

            
            <motion.h1 
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
            </motion.h1>

            <motion.p 
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
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <button className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>Book Expert Consultation</button>
            </motion.div>

          </motion.div>

          {/* Right Globe Content */}
          <motion.div
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
            <MilitaryMap
              interaction={{
                autoRotate: true,
                autoRotateSpeed: 4,
                rotateX: 0,
                rotateY: 20,
                rotateZ: -20,
                enableDrag: true,
                dragSensitivity: 0.4,
                glowColor: "#754437",
                glowIntensity: 0.4,
                showStars: true,
                showLabels: true
              }}
              mapStyle={{
                oceanColor: "transparent",
                landFill: theme === 'light' ? "#C8BCA2" : "#1F2B3A",
                landStroke: theme === 'light' ? "#BDB197" : "#3C516D",
                strokeWidth: 0.8,
                hoverColor: "#754437",
                disabledColor: theme === 'light' ? "#D3C7AD" : "#28374A"
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
                { label: "France", description: "Visa & Immigration", latitude: 46.2276, longitude: 2.2137, color: "#754437" },
                { label: "Poland", description: "Visa & Immigration", latitude: 51.9194, longitude: 19.1451, color: "#754437" },
                { label: "Germany", description: "Visa & Immigration", latitude: 51.1657, longitude: 10.4515, color: "#754437" },
                { label: "USA", description: "Visa & Immigration", latitude: 37.0902, longitude: -95.7129, color: "#754437" },
                { label: "Italy", description: "Visa & Immigration", latitude: 41.8719, longitude: 12.5674, color: "#754437" },
                { label: "UK", description: "Visa & Immigration", latitude: 55.3781, longitude: -3.4360, color: "#754437" },
              ]}
              tooltip={{ show: true, background: "rgba(18, 20, 23, 0.92)", textColor: "#e7ece9", borderColor: "rgba(140, 150, 145, 0.32)" }}
              grid={{ show: true, color: "#5b636a", opacity: 0.2 }}
              layout={{ cornerRadius: 0, padding: 12, showBorder: false, borderColor: "rgba(120, 128, 126, 0.24)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
