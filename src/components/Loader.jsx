import React, { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  
  useEffect(() => {
    document.body.classList.add('is-loading');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const finishPreload = () => {
      document.body.classList.remove('is-loading');
      setDone(true);
      setTimeout(() => {
        onComplete();
      }, 700); // Wait for transition
    };

    if (reduced) {
      finishPreload();
      return;
    }

    let currentPct = 0;
    const loadTimer = setInterval(() => {
      currentPct += Math.random() * 18 + 6;
      if (currentPct >= 100) {
        currentPct = 100;
        clearInterval(loadTimer);
        setPct(100);
        setTimeout(finishPreload, 420);
        return;
      }
      setPct(Math.floor(currentPct));
    }, 220);

    return () => clearInterval(loadTimer);
  }, [onComplete]);

  const CIRC = 188.5;
  const strokeDashoffset = CIRC - (CIRC * pct / 100);

  return (
    <div className={`preloader ${done ? 'done' : ''}`} id="preloader">
      <div className="preloader-inner">
        <svg className="preloader-mark" width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="rgba(246,243,236,0.16)" strokeWidth="1"/>
          <circle 
            id="preloaderRing" 
            cx="32" cy="32" r="30" 
            stroke="#B8935B" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeDasharray="188.5" 
            style={{ strokeDashoffset, transition: 'stroke-dashoffset .25s linear' }}
            transform="rotate(-90 32 32)"
          />
          <text x="32" y="38" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#F6F3EC">TQ</text>
        </svg>
        <div className="preloader-word">TRUVIQ</div>
        <div className="preloader-count"><span id="preloaderPct">{pct}</span>%</div>
      </div>
    </div>
  );
}
