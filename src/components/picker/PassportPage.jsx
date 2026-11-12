import { useState } from 'react';
import Flag from '../Flag';
import DestinationDetail from './DestinationDetail';
import { useRevealOnce, revealPanel } from './useRevealOnce';

// Countries are empty slots on a passport visa page. Tapping presses that
// country's stamp onto the page (scale + rotation, transform/opacity only);
// stamps already pressed stay. The ink bleed is a static SVG filter.

const INKS = ['var(--accent)', '#2B4C7E'];
const ROTATIONS = [-9, 7, -4, 11, -12, 5];
// short names so the top line fits inside every outline
const SHORT = { 'United Kingdom': 'UK', 'United States': 'USA' };
const WORD = { work: 'WORK PERMIT', seasonal: 'VISA · ENTRY', construction: 'EMPLOYMENT' };

// six different stamp outlines, all in a 120×120 box
function Outline({ kind }) {
  const s = { fill: 'none', stroke: 'currentColor' };
  switch (kind) {
    case 0: return <><circle cx="60" cy="60" r="56" {...s} strokeWidth="4" /><circle cx="60" cy="60" r="48" {...s} strokeWidth="1.5" /></>;
    case 1: return <><rect x="6" y="20" width="108" height="80" rx="12" {...s} strokeWidth="4" /><rect x="13" y="27" width="94" height="66" rx="7" {...s} strokeWidth="1.5" /></>;
    case 2: return <><path d="M38 6h44l32 32v44l-32 32H38L6 82V38z" {...s} strokeWidth="4" /><path d="M41 14h38l27 27v38l-27 27H41L14 79V41z" {...s} strokeWidth="1.5" /></>;
    case 3: return <><ellipse cx="60" cy="60" rx="56" ry="42" {...s} strokeWidth="4" /><ellipse cx="60" cy="60" rx="48" ry="34" {...s} strokeWidth="1.5" strokeDasharray="4 3" /></>;
    case 4: return <><circle cx="60" cy="60" r="56" {...s} strokeWidth="2" strokeDasharray="6 4" /><circle cx="60" cy="60" r="47" {...s} strokeWidth="4" /></>;
    default: return <><path d="M18 14h84l8 8v76l-8 8H18l-8-8V22z" {...s} strokeWidth="4" /><path d="M20 22h80v76H20z" {...s} strokeWidth="1.5" /></>;
  }
}

function Stamp({ d, i }) {
  return (
    <svg
      className="pp-stamp"
      viewBox="0 0 120 120"
      style={{ '--r': `${ROTATIONS[i % ROTATIONS.length]}deg`, color: INKS[i % INKS.length] }}
      aria-hidden="true"
      focusable="false"
    >
      <g filter="url(#ink-bleed)">
        <Outline kind={i % 6} />
        <text x="60" y="44" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500" letterSpacing="1" fill="currentColor">
          {(SHORT[d.name] || d.name).toUpperCase()}
        </text>
        <text x="60" y="70" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="24" fontWeight="500" letterSpacing="2" fill="currentColor">
          {d.iata}
        </text>
        <text x="60" y="86" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fontWeight="500" letterSpacing="1" fill="currentColor">
          {WORD[d.group]}
        </text>
      </g>
    </svg>
  );
}

export default function PassportPage({ list, visible, open, setOpen }) {
  const ref = useRevealOnce();
  const [stamped, setStamped] = useState(() => new Set());
  const selected = list.find((d) => d.code === open && visible.has(d.code));

  const press = (code) => {
    setStamped((s) => new Set(s).add(code));
    setOpen(code);
    revealPanel('passport-detail', 650);
  };

  return (
    <div className="passport-wrap" ref={ref}>
      {/* ink bleed: roughen and slightly soften stamp edges (static, not animated) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <filter id="ink-bleed" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" result="d" />
          <feGaussianBlur in="d" stdDeviation="0.35" />
        </filter>
      </svg>

      <div className="passport">
        <div className="passport-head mono" aria-hidden="true">
          <span>Passport · Visas</span>
          <span>Page 07</span>
        </div>
        <ul className="passport-grid">
          {list.map((d, i) => {
            const isSel = open === d.code;
            return (
              <li key={d.code} hidden={!visible.has(d.code)}>
                <button
                  type="button"
                  className={`pp-slot${isSel ? ' is-selected' : ''}`}
                  aria-pressed={isSel}
                  aria-controls="passport-detail"
                  onClick={() => press(d.code)}
                >
                  <span className="pp-mark" aria-hidden="true">
                    {stamped.has(d.code) ? <Stamp d={d} i={i} /> : (
                      <span className="pp-empty">
                        <Flag code={d.code} />
                        <span className="mono">Tap to stamp</span>
                      </span>
                    )}
                  </span>
                  <span className="pp-label">
                    <span className="pp-name">{d.name}</span>
                    <span className="pp-visa">{d.visa} · <span className="mono">{d.time}</span></span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="passport-mrz mono" aria-hidden="true">V&lt;TRUVIQ&lt;&lt;VISAS&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
      </div>

      <div className="passport-detail" id="passport-detail">
        {selected ? (
          <div key={selected.code} className="passport-detail-inner">
            <h3>{selected.name} <span className="pp-detail-visa">· {selected.visa}</span></h3>
            <DestinationDetail d={selected} />
          </div>
        ) : (
          <p className="passport-prompt">Tap a country to stamp your passport and see what you need.</p>
        )}
      </div>
    </div>
  );
}
