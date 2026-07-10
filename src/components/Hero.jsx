import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const updateParallax = () => {
      if (!heroRef.current || !heroImgRef.current || !heroContentRef.current) return;
      const heroH = heroRef.current.offsetHeight;
      const y = window.scrollY;
      const progress = Math.min(y / heroH, 1);
      
      heroImgRef.current.style.transform = `scale(1.08) translateY(${progress * 60}px)`;
      heroContentRef.current.style.transform = `translateY(${progress * 70}px)`;
      heroContentRef.current.style.opacity = 1 - progress * 0.9;
    };

    document.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
    
    return () => document.removeEventListener('scroll', updateParallax);
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 70; i++) {
      const sx = Math.random() * 1400;
      const sy = Math.random() * 420;
      const sr = Math.random() * 1.3 + 0.3;
      const opacity = (Math.random() * 0.5 + 0.15).toFixed(2);
      stars.push(
        <circle key={i} cx={sx} cy={sy} r={sr} fill="#F6F3EC" opacity={opacity} />
      );
    }
    return stars;
  };

  return (
    <section className="hero" id="hero" data-idx="01" data-label="Home" ref={heroRef}>
      <div className="hero-cover" id="heroCover">
        <img 
          id="heroImg" 
          ref={heroImgRef}
          className="hero-photo" 
          src="https://images.unsplash.com/photo-1771450092348-5f33e2cc2963?auto=format&fit=crop&w=2200&q=80" 
          alt="" 
        />
        <svg className="hero-overlay-svg" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
          <g id="starLayer" opacity="0.5">
            {renderStars()}
          </g>
          <g id="parallaxFar" opacity="0.5">
            <circle cx="1140" cy="230" r="150" fill="none" stroke="#B8935B" strokeWidth="0.6" opacity="0.35"/>
            <circle cx="1140" cy="230" r="220" fill="none" stroke="#B8935B" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="1140" cy="230" r="290" fill="none" stroke="#B8935B" strokeWidth="0.4" opacity="0.12"/>
          </g>
        </svg>
      </div>
      <div className="hero-vignette"></div>

      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-kicker eyebrow">Immigration &amp; Consultancy</div>
        <h1 className="hero-title">
          <span className="line"><span>TRUVIQ</span></span>
        </h1>
        <p className="hero-sub">Your Trusted Gateway to Global Opportunities</p>
        <p className="hero-desc">Expert immigration &amp; visa solutions designed around your future — from first consultation to the day you arrive.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">Book Expert Consultation <span className="btn-arrow">→</span></a>
          <div className="hero-scroll-hint"><span className="scroll-line"></span> Scroll</div>
        </div>
      </div>

      <div className="hero-meta-row">
        <div className="hero-meta-inner">
          <span>Est. <b>Global Practice</b></span>
          <span>Regions — <b>Europe · UK · USA · Canada · Australia · UAE</b></span>
          <span><b>500+</b> Successful Placements</span>
        </div>
      </div>
    </section>
  );
}
