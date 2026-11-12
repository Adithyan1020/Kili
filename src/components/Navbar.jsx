import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll and close on Escape
  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMobileNavOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileNavOpen]);

  const close = () => setMobileNavOpen(false);

  return (
    <header id="siteHeader" className={`header ${scrolled || mobileNavOpen ? 'scrolled' : ''}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand-mark" aria-label="TRUVIQ — back to top">
          <span className="brand-glyph" aria-hidden="true">TQ</span>
          <span className="brand-word">TRUVIQ</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a href="#contact" className="btn btn-ghost nav-cta">Book Consultation</a>
        <button
          className={`menu-toggle ${mobileNavOpen ? 'open' : ''}`}
          aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileNavOpen}
          aria-controls="mobileNav"
          onClick={() => setMobileNavOpen((o) => !o)}
        >
          <span></span><span></span>
        </button>
      </div>
      <nav
        className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}
        id="mobileNav"
        aria-label="Mobile"
        inert={!mobileNavOpen || undefined}
      >
        {links.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        <a href="#contact" className="mobile-nav-cta" onClick={close}>Book Consultation</a>
      </nav>
    </header>
  );
}
