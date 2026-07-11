import React, { useState, useEffect, useRef } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export default function WhyTrustUs() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    cardRef.current.style.setProperty('--my', (e.clientY - r.top) + 'px');
  };

  const featureCards = [
    { num: '01', title: 'Trusted Expertise', desc: 'Reliable advice based on your profile, goals, and eligibility.' },
    { num: '02', title: 'Complete Support', desc: 'From your first consultation to final application preparation.' },
    { num: '03', title: 'Clear Communication', desc: 'No confusion, no hidden steps — only a smooth and guided process.' },
    { num: '04', title: 'Personalized Strategy', desc: 'Every journey is different. We create solutions designed specifically for you.' }
  ];

  return (
    <section className="about" id="about" data-idx="02" data-label="About">
      <div className="wrap">
        <div className="about-intro">
          <div className="about-text reveal">
            <span className="eyebrow">Professional Guidance. Transparent Process. Personal Commitment.</span>
            <h2>We turn complex immigration pathways into a clear, guided journey — built around who you are and where you're headed.</h2>
            <div className="about-cols">
              <p><b>At TRUVIQ, we help individuals, students, and families achieve their international goals</b> with strategic guidance, transparent processes, and personalized support. Every case is assessed on its own merits, never handled as a template.</p>
              <p>Whether you are planning to study abroad, work overseas, migrate permanently, or visit your loved ones, our experts guide you at every stage of your journey — from the first conversation to the day you land.</p>
            </div>
          </div>
          <div className="about-image reveal">
            <div className="about-image-card img-wipe">
              <img src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?auto=format&fit=crop&w=1200&q=80" alt="TRUVIQ consultant reviewing an application with a client" />
            </div>
          </div>
        </div>

        <div className="feature-grid-stack reveal-stagger" style={{ marginTop: '60px' }}>
          <ScrollStack 
            useWindowScroll={true} 
            itemDistance={isMobile ? 20 : 40} 
            baseScale={0.9} 
            itemScale={0.05} 
            itemStackDistance={isMobile ? 20 : 40}
            blurAmount={2}
          >
            {featureCards.map((f, i) => {
              const ref = React.createRef();
              return (
                <ScrollStackItem key={i} itemClassName="feature-card">
                  <div 
                    ref={ref} 
                    onMouseMove={(e) => handleMouseMove(e, ref)}
                    style={{ height: '100%' }}
                  >
                    <span className="feature-num">{f.num}</span>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
