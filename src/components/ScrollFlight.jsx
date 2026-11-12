import { useEffect, useId, useRef } from 'react';
import { pointY, toPath } from '../lib/flightPath';

const clamp = (v) => Math.min(1, Math.max(0, v));
const smooth = (t) => t * t * (3 - 2 * t);
const MAX_LEGS = 4;

// Top-down jet silhouette, nose pointing right (+x), centred on the origin.
const PLANE =
  'M22,0 C22,-1.6 20.5,-2.6 18,-2.6 L5,-2.6 L-5,-19 L-9.5,-19 L-4,-2.6 L-14,-2.6 ' +
  'L-19.5,-9 L-22.5,-9 L-19.5,-1.4 L-21,-1.2 L-21,1.2 L-19.5,1.4 L-22.5,9 L-19.5,9 ' +
  'L-14,2.6 L-4,2.6 L-9.5,19 L-5,19 L5,2.6 L18,2.6 C20.5,2.6 22,1.6 22,0 Z';

/**
 * A plane that flies along a route as the host section scrolls through the
 * viewport, turning with the curve and leaving a dotted flight-path trail.
 * Place it as the first child of a position:relative section.
 *
 * points       desktop route (see lib/flightPath.js) — one continuous flight
 *              across the whole section's scroll
 * mobileLegs   phone routes: an array of separate passes. Each pass plays
 *              while its own part of the page crosses the screen, so the
 *              plane is always visible while it flies. null hides it on phones.
 * trail        draw the dotted flight path behind the plane
 */
export default function ScrollFlight({
  points,
  mobileLegs = null,
  mobileBreak = 720,
  size = 1.25,
  mobileSize = 0.7,
  trail = true,
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const svgRef = useRef(null);
  const legRefs = useRef([]);    // measuring + trail paths
  const revealRefs = useRef([]); // mask paths that reveal each trail
  const planeRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const host = svg.parentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let legs = [];      // [{ el, reveal, L, anchorY }]
    let mobile = false;
    let k = size;
    let cur = null;     // smoothed host top (px, viewport coords)
    let raf = 0;

    const place = (leg, d) => {
      const at = leg.el.getPointAtLength(d);
      const ahead = leg.el.getPointAtLength(Math.min(leg.L, d + 2));
      const behind = leg.el.getPointAtLength(Math.max(0, d - 2));
      const deg = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
      planeRef.current.setAttribute('transform', `translate(${at.x} ${at.y}) rotate(${deg}) scale(${k})`);
      shadowRef.current.setAttribute(
        'transform',
        `translate(${at.x + 9 * k} ${at.y + 15 * k}) rotate(${deg}) scale(${k * 0.92})`,
      );
      planeRef.current.style.opacity = '';
      shadowRef.current.style.opacity = '';
    };

    // Progress (0..1) of every leg for a given host top position.
    const legProgress = (top) => {
      const vh = window.innerHeight;
      if (!mobile) {
        const p = clamp((vh - top) / (vh + host.offsetHeight));
        return [reduced ? 0.62 : smooth(clamp((p - 0.05) / 0.85))];
      }
      // Each pass flies while its line moves from 85% to 35% of the screen.
      return legs.map((leg, i) => {
        if (reduced) return i === 0 ? 0.6 : 0;
        return smooth(clamp((vh * 0.85 - (top + leg.anchorY)) / (vh * 0.5)));
      });
    };

    const apply = (top) => {
      if (!legs.length) return;
      const q = legProgress(top);
      legs.forEach((leg, i) => {
        if (leg.reveal) leg.reveal.style.strokeDasharray = `${q[i] * leg.L} ${leg.L + 20}`;
      });
      // The plane flies the first unfinished leg that has started; between
      // legs it waits at the end of the last finished one (off-screen).
      let i = q.findIndex((v) => v > 0 && v < 1);
      if (i === -1) {
        const done = q.lastIndexOf(1);
        i = done === -1 ? 0 : done;
      }
      place(legs[i], q[i] * legs[i].L);
    };

    const build = () => {
      const w = host.offsetWidth;
      const h = host.offsetHeight;
      mobile = w < mobileBreak;
      const routes = mobile ? mobileLegs : points ? [points] : null;
      svg.style.display = routes ? '' : 'none';
      legs = [];
      if (!routes || !w || !h) return;

      const s = mobile ? 1 : Math.min(1, Math.max(0.6, w / 1440));
      k = mobile ? mobileSize : size * s;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      legRefs.current.forEach((el, i) => {
        const reveal = revealRefs.current[i];
        const route = routes[i];
        if (!route) {
          el.setAttribute('d', '');
          if (reveal) reveal.setAttribute('d', '');
          return;
        }
        const P = route.map((pt) => [pt.x * w + (pt.ox || 0) * s, pointY(pt, host, h, s)]);
        const d = toPath(P);
        el.setAttribute('d', d);
        if (reveal) reveal.setAttribute('d', d);
        // a pass is cued by the height of its on-screen points
        const onScreen = P.filter(([x]) => x >= 0 && x <= w);
        const anchorY = (onScreen.length ? onScreen : P).reduce((a, [, y]) => a + y, 0) /
          (onScreen.length || P.length);
        legs.push({ el, reveal, L: el.getTotalLength(), anchorY });
      });
      apply(cur ?? host.getBoundingClientRect().top);
    };

    // Ease toward the real scroll position for a soft, gliding feel
    const tick = () => {
      const target = host.getBoundingClientRect().top;
      cur += (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.5) cur = target;
      apply(cur);
      raf = cur === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    cur = host.getBoundingClientRect().top;
    build();
    const ro = new ResizeObserver(build);
    ro.observe(host);
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      ro.disconnect();
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [points, mobileLegs, mobileBreak, size, mobileSize]);

  const slots = Array.from({ length: MAX_LEGS }, (_, i) => i);

  return (
    <svg ref={svgRef} className="scroll-flight" aria-hidden="true" focusable="false" fill="none">
      <defs>
        <filter id={`blur${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        {trail &&
          slots.map((i) => (
            // reveals each trail only up to where the plane has flown
            <mask key={i} id={`mask${uid}${i}`} maskUnits="userSpaceOnUse" x="-9999" y="-9999" width="99999" height="99999">
              <path
                ref={(el) => { revealRefs.current[i] = el; }}
                stroke="#fff"
                strokeWidth="24"
                style={{ strokeDasharray: '0 99999' }}
              />
            </mask>
          ))}
      </defs>

      {slots.map((i) => (
        <path
          key={i}
          ref={(el) => { legRefs.current[i] = el; }}
          className={trail ? 'scroll-flight-trail' : undefined}
          stroke={trail ? undefined : 'none'}
          mask={trail ? `url(#mask${uid}${i})` : undefined}
          strokeLinecap="round"
        />
      ))}

      {/* hidden until positioned on the client */}
      <g ref={shadowRef} className="scroll-flight-shadow" filter={`url(#blur${uid})`} style={{ opacity: 0 }}>
        <path d={PLANE} />
      </g>
      <g ref={planeRef} className="scroll-flight-plane" style={{ opacity: 0 }}>
        <path d={PLANE} />
        {/* brass cheat-line along the fuselage */}
        <path d="M-17,0 L16,0" className="scroll-flight-stripe" />
      </g>
    </svg>
  );
}
