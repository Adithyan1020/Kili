import React, { useState, useEffect } from 'react';


export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="section-divider reveal">
        <span className="divider-line"></span>
        <span className="divider-ornament"></span>
        <span className="divider-line"></span>
      </div>

      <section className="services" id="services" data-idx="03" data-label="Services">
        <div className="wrap">
          <div className="services-head reveal">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Focused expertise across the routes that matter most.</h2>
            </div>
            <p>Three specialised practice areas, each handled by consultants who work exclusively within that region and route.</p>
          </div>

          <div className="modern-services-grid reveal-stagger">
            <div className="modern-service-card">
              <span className="modern-service-idx">EU</span>
              <h3>European Work Permits</h3>
              <span className="tag">Direct Employment Pathways</span>
              <p>Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.</p>
            </div>
            
            <div className="modern-service-card">
              <span className="modern-service-idx">US·CA·UK·AU</span>
              <h3>Seasonal &amp; Visiting Visas</h3>
              <span className="tag">Short-Term &amp; Seasonal Work</span>
              <p>For the USA, Canada, UK, and Australia, we specialize in processing visiting visas and facilitating seasonal work programs.</p>
            </div>
            
            <div className="modern-service-card">
              <span className="modern-service-idx">UAE</span>
              <h3>Construction Recruitment</h3>
              <span className="tag">UAE Sector Specialists</span>
              <p>In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider reveal">
        <span className="divider-line"></span>
        <span className="divider-ornament"></span>
        <span className="divider-line"></span>
      </div>
    </>
  );
}
