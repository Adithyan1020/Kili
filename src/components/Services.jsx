import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export default function Services() {
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

          <div style={{ marginTop: '60px' }}>
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={40} 
              baseScale={0.9} 
              itemScale={0.05} 
              itemStackDistance={40}
              blurAmount={2}
            >
              <ScrollStackItem itemClassName="service-card-stack">
                <span className="service-idx">EU</span>
                <div className="service-name">
                  <h3>European Work Permits</h3>
                  <span className="tag">Direct Employment Pathways</span>
                </div>
                <div className="service-desc">
                  <p>Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.</p>
                </div>
              </ScrollStackItem>
              
              <ScrollStackItem itemClassName="service-card-stack">
                <span className="service-idx">US·CA·UK·AU</span>
                <div className="service-name">
                  <h3>Seasonal &amp; Visiting Visas</h3>
                  <span className="tag">Short-Term &amp; Seasonal Work</span>
                </div>
                <div className="service-desc">
                  <p>For the USA, Canada, UK, and Australia, we specialize in processing visiting visas and facilitating seasonal work programs.</p>
                </div>
              </ScrollStackItem>
              
              <ScrollStackItem itemClassName="service-card-stack">
                <span className="service-idx">UAE</span>
                <div className="service-name">
                  <h3>Construction Recruitment</h3>
                  <span className="tag">UAE Sector Specialists</span>
                </div>
                <div className="service-desc">
                  <p>In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.</p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
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
