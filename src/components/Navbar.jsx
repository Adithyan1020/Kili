import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Phone, Mail } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'var(--bg-secondary)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
        willChange: 'background-color, padding',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', padding: '8px 0', fontSize: '0.85rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--color-border)', marginBottom: '10px' }} className="top-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={14} />
            <span>+1 (234) 567-8900</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={14} />
            <span>contact@truviq.com</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
          {/* Logo */}
          <a href="#" onClick={(e) => scrollToSection(e, 'hero')} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/images.png" alt="TRUVIQ Logo" style={{ height: '40px', width: 'auto' }} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
            <div style={{ display: 'none', fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '1px' }}>
              TRU<span style={{ color: 'var(--color-accent)' }}>VIQ</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', color: 'var(--text-secondary)' }} className="desktop-nav">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">About</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav-link">Services</a>
            <a href="#countries" onClick={(e) => scrollToSection(e, 'countries')} className="nav-link">Countries</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-link">Contact</a>
          </div>

          {/* Right Side (Theme + Mobile Menu) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              className="hamburger-btn"
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-overlay"
          >
            <a href="#about" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'about'); setMobileMenuOpen(false); }}>About</a>
            <a href="#services" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'services'); setMobileMenuOpen(false); }}>Services</a>
            <a href="#countries" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'countries'); setMobileMenuOpen(false); }}>Countries</a>
            <a href="#contact" className="mobile-menu-link" onClick={(e) => { scrollToSection(e, 'contact'); setMobileMenuOpen(false); }}>Contact</a>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
};

export default Navbar;

