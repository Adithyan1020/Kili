import React, { useEffect, useRef } from 'react';

export default function WhyTrustUs() {
  const numberRef1 = useRef(null);
  
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const animateCount = (el) => {
      const raw = el.textContent.trim();
      const match = raw.match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2];
      if (reduced) { el.textContent = target + suffix; return; }
      
      let start = null;
      const dur = 1400;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    };

    const countEls = [numberRef1.current].filter(Boolean);
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    
    countEls.forEach((el) => {
      if (/^\d/.test(el.textContent.trim())) countIO.observe(el);
    });

    return () => countIO.disconnect();
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
            <div className="about-stat-badge">
              <span className="about-stat-num" ref={numberRef1}>500+</span>
              <span className="about-stat-label">Successful Placements Worldwide</span>
            </div>
          </div>
        </div>

        <div className="feature-grid reveal-stagger">
          {featureCards.map((f, i) => {
            const ref = React.createRef();
            return (
              <div 
                key={i} 
                className="feature-card" 
                ref={ref} 
                onMouseMove={(e) => handleMouseMove(e, ref)}
              >
                <span className="feature-num">{f.num}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
