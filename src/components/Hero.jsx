import { useEffect, useState } from 'react';
import HeroPass from './HeroPass';

// The flap board (and the boarding pass beside it) loops through the destinations.
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

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // Reduced motion: no cycling, the first destination stays put.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer;
    const tick = () => {
      setIdx((i) => (i + 1) % WORDS.length);
      timer = setTimeout(tick, STEP_MS);
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
          </div>
        </div>

        <HeroPass idx={idx} />
      </div>
    </section>
  );
}
