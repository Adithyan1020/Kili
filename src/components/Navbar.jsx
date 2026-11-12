import { useState, useEffect } from 'react';

// Same anchors as before (existing links keep working), in page order.
const links = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // While the mobile menu is open: close on Escape
  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMobileNavOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileNavOpen]);

  const close = () => setMobileNavOpen(false);

  return (
    <header id="siteHeader" className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand-mark">
          <span className="brand-glyph" aria-hidden="true">TQ</span>
          <span className="brand-word">TRUVIQ</span>
          <span className="visually-hidden">, back to top</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        {/* text link, not a button: one primary button per screen */}
        <a href="#contact" className="text-link nav-cta">Book Consultation</a>
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
