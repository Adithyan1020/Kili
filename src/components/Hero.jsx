import { useEffect, useState } from 'react';

// The flap board flips through each destination once, then stays on the last.
const WORDS = ['CANADA', 'THE UK', 'THE USA', 'AUSTRALIA', 'THE UAE', 'EUROPE'];
// Fixed tile count (longest word) so the board never changes width: no layout shift.
const TILES = 9;
const STEP_MS = 1700;

function FlapBoard({ word }) {
  return (
    <span className="flap" aria-hidden="true">
      {Array.from({ length: TILES }, (_, i) => {
        const ch = word[i] && word[i] !== ' ' ? word[i] : '';
        return (
          <span key={i} className={`flap-tile${ch ? '' : ' is-blank'}`}>
            {/* new key when the letter changes -> only that tile re-flips */}
            <span key={ch || '_'} className="flap-ch" style={{ '--i': i }}>
              {ch || ' '}
            </span>
          </span>
        );
      })}
    </span>
  );
}

function Stamp() {
  return (
    <svg className="hero-stamp" viewBox="0 0 160 160" aria-hidden="true" focusable="false">
      <defs>
        <path id="stampText" d="M80,80 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0" />
      </defs>
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="80" cy="80" r="66" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
      <text fontFamily="var(--font-mono)" fontSize="12.5" fontWeight="500" letterSpacing="3" fill="currentColor">
        <textPath href="#stampText">TRUVIQ · VISA SERVICES · ENTRY ·</textPath>
      </text>
      {/* small plane, pointing up-right */}
      <path
        transform="translate(80 74) rotate(-45) scale(.9)"
        fill="currentColor"
        d="M18,0 C18,-1.4 16.8,-2.2 14.8,-2.2 L4,-2.2 L-4,-15 L-7.6,-15 L-3.2,-2.2 L-11.2,-2.2 L-15.6,-7.2 L-18,-7.2 L-15.6,-1.2 L-16.8,-1 L-16.8,1 L-15.6,1.2 L-18,7.2 L-15.6,7.2 L-11.2,2.2 L-3.2,2.2 L-7.6,15 L-4,15 L4,2.2 L14.8,2.2 C16.8,2.2 18,1.4 18,0 Z"
      />
      <text x="80" y="104" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="500" letterSpacing="1.5" fill="currentColor">
        APPROVED
      </text>
    </svg>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // Reduced motion: no cycling, the first destination stays put.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer;
    const tick = () => {
      setIdx((i) => {
        const next = Math.min(i + 1, WORDS.length - 1);
        if (next < WORDS.length - 1) timer = setTimeout(tick, STEP_MS);
        return next;
      });
    };
    timer = setTimeout(tick, STEP_MS + 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="wrap hero-inner">
        <p className="eyebrow hero-kicker">Immigration &amp; Consultancy</p>

        <h1 className="hero-title">
          <span className="hero-line">Your visa to</span>
          <span className="visually-hidden"> Europe, the UK, the USA, Canada, Australia or the UAE</span>
          <FlapBoard word={WORDS[idx]} />
        </h1>

        <p className="hero-sub">Work permits and visas for Europe, the UAE, the UK, the USA, Canada and Australia.</p>

        <div className="hero-foot">
          <div className="hero-actions">
            <a href="#destinations" className="button">
              Pick your destination
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 4v16m0 0l-7-7m7 7l7-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="hero-note mono">Free first consultation</p>
          </div>
        </div>
        <Stamp />
      </div>
    </section>
  );
}
