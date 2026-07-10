import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header id="siteHeader" className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap header-inner">
          <a href="#top" className="brand-mark">
            <span className="brand-glyph">TQ</span>
            <span className="brand-word">TRUVIQ</span>
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#destinations">Destinations</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-ghost nav-cta">Book Consultation</a>
          <button 
            className="menu-toggle" 
            id="menuToggle" 
            aria-label="Toggle menu" 
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span></span><span></span>
          </button>
        </div>
        <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`} id="mobileNav">
          <a href="#about" onClick={() => setMobileNavOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileNavOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMobileNavOpen(false)}>Process</a>
          <a href="#destinations" onClick={() => setMobileNavOpen(false)}>Destinations</a>
          <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
        </div>
      </header>
    </>
  );
}
