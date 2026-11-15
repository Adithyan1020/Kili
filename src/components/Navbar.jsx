import { useState, useEffect } from 'react';

// Same anchors as before (existing links keep working), in page order.
const links = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#process', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');
// The theme set on <html> (a saved choice, applied in index.html), else the system's.
const isDarkNow = () => {
  const t = document.documentElement.dataset.theme;
  return t ? t === 'dark' : darkQuery().matches;
};

// Icons switch in CSS, so the right one shows from the first paint.
function ThemeToggle() {
  const [dark, setDark] = useState(false); // real value set after mount

  useEffect(() => {
    setDark(isDarkNow());
    // with no saved choice, follow the system if it changes
    const mq = darkQuery();
    const onChange = () => setDark(isDarkNow());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = isDarkNow() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage blocked: not remembered */ }
    setDark(next === 'dark');
  };

  return (
    <button type="button" className="theme-toggle" aria-label="Dark mode" aria-pressed={dark} onClick={toggle}>
      <svg className="i-moon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="i-sun" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}

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
        <div className="header-tools">
          {/* text link, not a button: one primary button per screen */}
          <a href="#contact" className="text-link nav-cta">Book Consultation</a>
          <ThemeToggle />
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
