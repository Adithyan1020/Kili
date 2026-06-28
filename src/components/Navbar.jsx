import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '15px 0' : '25px 0',
        backgroundColor: isScrolled ? 'rgba(18, 22, 28, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Replace '/images.png' with your actual logo path in the public folder */}
          <img src="/images.png" alt="Eli Immigration Logo" style={{ height: '40px' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', display: 'none' }}>
            TRU<span style={{ color: 'var(--color-accent)' }}>VIQ</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }} className="desktop-nav">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>About</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Testimonials</a>
          <a href="#countries" onClick={(e) => scrollToSection(e, 'countries')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Countries</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Contact</a>
        </div>

        {/* Contact Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
            <PhoneCall size={18} color="var(--color-accent)" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Service Center</span>
              <span style={{ fontWeight: '600' }}>0215 555 010</span>
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '8px 20px' }}>Apply</button>
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="hamburger-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-overlay"
          >
            <a href="#about" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'about'); setMobileMenuOpen(false); }}>About</a>
            <a href="#testimonials" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'testimonials'); setMobileMenuOpen(false); }}>Testimonials</a>
            <a href="#countries" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'countries'); setMobileMenuOpen(false); }}>Countries</a>
            <a href="#contact" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'contact'); setMobileMenuOpen(false); }}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
