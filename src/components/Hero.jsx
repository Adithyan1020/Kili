import { useEffect, useRef } from 'react';

const HERO_IMG = 'https://images.unsplash.com/photo-1771450092348-5f33e2cc2963?auto=format&fit=crop';

// Deterministic star field so server-rendered and client markup match.
function makeStars(count, seed) {
  let s = seed >>> 0;
  const rnd = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return Array.from({ length: count }, () => ({
    cx: +(rnd() * 1400).toFixed(1),
    cy: +(rnd() * 420).toFixed(1),
    r: +(rnd() * 1.3 + 0.3).toFixed(2),
    o: +(rnd() * 0.5 + 0.15).toFixed(2),
    d: +(0.5 + rnd() * 0.9).toFixed(2), // intro fade-in delay (s)
    t: +(3 + rnd() * 4).toFixed(2),     // twinkle period (s)
  }));
}
const STARS = makeStars(70, 1584243068);

export default function Hero() {
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ticking = false;
    const updateParallax = () => {
      ticking = false;
      if (!heroRef.current || !heroImgRef.current || !heroContentRef.current) return;
      const progress = Math.min(window.scrollY / heroRef.current.offsetHeight, 1);
      heroImgRef.current.style.transform = `scale(1.08) translateY(${progress * 60}px)`;
      heroContentRef.current.style.transform = `translateY(${progress * 70}px)`;
      heroContentRef.current.style.opacity = 1 - progress * 0.9;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(updateParallax); }
    };

    document.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="hero" data-idx="01" data-label="Home" ref={heroRef}>
      <div className="hero-cover">
        <img
          ref={heroImgRef}
          className="hero-photo"
          src={`${HERO_IMG}&w=1600&q=75`}
          srcSet={`${HERO_IMG}&w=800&q=70 800w, ${HERO_IMG}&w=1600&q=75 1600w, ${HERO_IMG}&w=2200&q=75 2200w`}
          sizes="100vw"
          fetchPriority="high"
          decoding="async"
          alt=""
        />
        <svg className="hero-overlay-svg" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <g opacity="0.5">
            {STARS.map((st, i) => (
              <circle
                key={i}
                className="hero-star"
                cx={st.cx} cy={st.cy} r={st.r} fill="#F6F3EC"
                style={{ '--o': st.o, '--d': `${st.d}s`, '--t': `${st.t}s` }}
              />
            ))}
          </g>
          <g opacity="0.5" transform="rotate(-90 1140 230)">
            <circle className="hero-ring" pathLength="1" cx="1140" cy="230" r="150" fill="none" stroke="#B8935B" strokeWidth="0.6" opacity="0.35" />
            <circle className="hero-ring" pathLength="1" cx="1140" cy="230" r="220" fill="none" stroke="#B8935B" strokeWidth="0.5" opacity="0.2" />
            <circle className="hero-ring" pathLength="1" cx="1140" cy="230" r="290" fill="none" stroke="#B8935B" strokeWidth="0.4" opacity="0.12" />
          </g>
        </svg>
      </div>
      <div className="hero-vignette"></div>

      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-kicker eyebrow">TRUVIQ · Immigration &amp; Consultancy</div>
        <h1 className="hero-title">
          <span className="line"><span>Work Permits &amp; Visas</span></span>
          <span className="line line-accent"><span>for Europe, UAE &amp; Beyond</span></span>
        </h1>
        <p className="hero-sub">Your Trusted Gateway to Global Opportunities</p>
        <p className="hero-desc">Expert immigration &amp; visa solutions designed around your future — from first consultation to the day you arrive.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">Book Expert Consultation <span className="btn-arrow" aria-hidden="true">→</span></a>
          <div className="hero-scroll-hint" aria-hidden="true"><span className="scroll-line"></span> Scroll</div>
        </div>
      </div>

      <div className="hero-meta-row">
        <div className="hero-meta-inner">
          <span>Focus — <b>Work · Seasonal · Visiting Visas</b></span>
          <span>Regions — <b>Europe · UK · USA · Canada · Australia · UAE</b></span>
          <span><b>500+</b> Successful Placements</span>
        </div>
      </div>
    </section>
  );
}
