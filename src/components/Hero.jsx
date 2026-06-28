import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MilitaryMap from './MilitaryMap';

const Hero = () => {
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
        background: 'var(--color-bg-darker)',
        color: '#fff',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          {/* Left Text Content */}
            <motion.div 
              style={{ opacity, y }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >

            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
              lineHeight: 1.4, 
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0px'
            }}>
              <span style={{ color: 'var(--color-accent)' }}>TRUVIQ</span> IMMIGRATION<br/>& CONSULTANCY
            </h1>

            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.4rem',
              marginBottom: '40px',
              maxWidth: '450px',
              fontWeight: '500'
            }}>
              Your Journey. Our Commitment.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <button className="btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>Get Started</button>
              <button className="btn-secondary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>Learn More</button>
            </div>
          </motion.div>

          {/* Right Globe Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              aspectRatio: '1',
              transform: 'scale(1.2)' // Scale up slightly to make it more prominent
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
                glowColor: "#ff9d00",
                glowIntensity: 0.4,
                showStars: true,
                showLabels: true
              }}
              mapStyle={{
                oceanColor: "transparent",
                landFill: "#2a2f35",
                landStroke: "#424b54",
                strokeWidth: 0.8,
                hoverColor: "#ff9d00",
                disabledColor: "#1a1e22"
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
                { label: "France", description: "Visa & Immigration", latitude: 46.2276, longitude: 2.2137, color: "#ff9d00" },
                { label: "Poland", description: "Visa & Immigration", latitude: 51.9194, longitude: 19.1451, color: "#ff9d00" },
                { label: "Germany", description: "Visa & Immigration", latitude: 51.1657, longitude: 10.4515, color: "#ff9d00" },
                { label: "USA", description: "Visa & Immigration", latitude: 37.0902, longitude: -95.7129, color: "#ff9d00" },
                { label: "Italy", description: "Visa & Immigration", latitude: 41.8719, longitude: 12.5674, color: "#ff9d00" },
                { label: "UK", description: "Visa & Immigration", latitude: 55.3781, longitude: -3.4360, color: "#ff9d00" },
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
