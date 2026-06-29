import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        backgroundColor: isScrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
        willChange: 'background-color, padding',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Replace '/images.png' with your actual logo path in the public folder */}
          <img src="/images.png" alt="Eli Immigration Logo" style={{ height: '40px' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <div style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 'bold', display: 'none' }}>
            TRU<span style={{ color: 'var(--color-accent)' }}>VIQ</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center', color: 'var(--text-secondary)' }} className="desktop-nav">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>About</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Services</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Testimonials</a>
          <a href="#countries" onClick={(e) => scrollToSection(e, 'countries')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Countries</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Contact</a>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
              <PhoneCall size={18} color="var(--color-accent)" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Service Center</span>
                <span style={{ fontWeight: '600' }}>0215 555 010</span>
              </div>
            </div>
            <button className="btn-primary" style={{ padding: '8px 20px' }}>Apply</button>
          </div>
          
          <button onClick={toggleTheme} style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', borderRadius: '50%', backgroundColor: 'var(--card-bg)' }}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button 
            className="hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
            <a href="#services" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'services'); setMobileMenuOpen(false); }}>Services</a>
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
