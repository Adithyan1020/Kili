import { useRef } from 'react';
import { DESTINATIONS } from '../data/destinations';

// Boarding-pass printer for the hero's free space (wide screens). A pass
// feeds out of the printer slot for the destination on the headline's flap
// board; on each flip the old pass drops away and the next one prints.
// Decorative: the headline carries the text.

// Same order as WORDS in Hero.jsx.
const ORDER = ['YYZ', 'LHR', 'JFK', 'SYD', 'DXB', 'FRA'];
const PASSES = ORDER.map((iata) => DESTINATIONS.find((d) => d.iata === iata));

const PLANE =
  'M18,0 C18,-1.4 16.8,-2.2 14.8,-2.2 L4,-2.2 L-4,-15 L-7.6,-15 L-3.2,-2.2 L-11.2,-2.2 L-15.6,-7.2 L-18,-7.2 L-15.6,-1.2 L-16.8,-1 L-16.8,1 L-15.6,1.2 L-18,7.2 L-15.6,7.2 L-11.2,2.2 L-3.2,2.2 L-7.6,15 L-4,15 L4,2.2 L14.8,2.2 C16.8,2.2 18,1.4 18,0 Z';

// Vertical barcode, different for each code (deterministic, not a real code).
function Barcode({ seed }) {
  let x = 0;
  const bars = [];
  for (let i = 0; i < 26; i++) {
    const c = seed.charCodeAt(i % seed.length) * (i + 7);
    const w = 1 + (c % 3);
    if (i % 2 === 0) bars.push(<rect key={i} y={x} width="28" height={w} />);
    x += w + 1;
  }
  return (
    <svg className="bp-barcode" viewBox={`0 0 28 ${x}`} preserveAspectRatio="none" focusable="false">
      <g fill="currentColor">{bars}</g>
    </svg>
  );
}

function Pass({ d, n, className }) {
  return (
    <div className={`bp ${className}`}>
      <div className="bp-main">
        <div className="bp-top mono">
          <span>Boarding pass</span>
          <span>TRV {String(n + 1).padStart(3, '0')}</span>
        </div>
        <div className="bp-route">
          <span className="bp-from mono">HOME</span>
          <svg className="bp-plane" viewBox="-20 -20 40 40" focusable="false">
            <path fill="currentColor" d={PLANE} />
          </svg>
          <span className="bp-to mono">{d.iata}</span>
        </div>
        <p className="bp-city">{d.name}</p>
        <div className="bp-meta">
          <span><span className="bp-label mono">Passenger</span>You</span>
          <span><span className="bp-label mono">Visa</span>{d.visa}</span>
          <span><span className="bp-label mono">Boarding</span>Now</span>
        </div>
      </div>
      <div className="bp-stub">
        <span className="bp-label mono">Seat</span>
        <span className="bp-seat mono">{n + 1}A</span>
        <Barcode seed={d.iata + d.name} />
      </div>
    </div>
  );
}

export default function HeroPass({ idx }) {
  // remember the pass that was showing, so it can drop away as the next prints
  const prev = useRef({ shown: idx, leaving: null });
  if (prev.current.shown !== idx) prev.current = { shown: idx, leaving: prev.current.shown };
  const { leaving } = prev.current;

  return (
    <div className="hero-bp" aria-hidden="true">
      <div className="bp-printer">
        <span className="bp-led" />
        <span className="mono">Truviq · Gate 01</span>
        <span className="bp-slot" />
      </div>
      <div className="bp-feed">
        {leaving !== null && <Pass key={`out-${leaving}`} d={PASSES[leaving]} n={leaving} className="is-leaving" />}
        <Pass key={idx} d={PASSES[idx]} n={idx} className="is-printing" />
      </div>
    </div>
  );
}
