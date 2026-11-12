import { useEffect, useId, useRef } from 'react';
import { toPath } from '../lib/ribbon';

const clamp = (v) => Math.min(1, Math.max(0, v));
const smooth = (t) => t * t * (3 - 2 * t);

/**
 * A thick ribbon that draws itself along a route as the host section scrolls
 * through the viewport: the head travels in, then the tail follows it out.
 * Place it as the first child of a position:relative section.
 *
 * points        route for desktop (see lib/ribbon.js)
 * mobilePoints  route below `mobileBreak`px (offsets in real px); null hides it
 * mobileWidth / mobileOpacity  thinner, softer ribbon on phones, where it
 *               has to pass behind text
 */
export default function ScrollRibbon({
  points,
  mobilePoints = points,
  mobileBreak = 720,
  width = 26,
  mobileWidth = 11,
  mobileOpacity = 0.55,
  colors = ['#1F6F5C', '#2E8C74', '#D0AD79'],
}) {
  const gradId = useId();
  const svgRef = useRef(null);
  const mainRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const host = svg.parentElement;
    const paths = [mainRef.current, shineRef.current];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let L = 0;
    let cur = 0;
    let target = 0;
    let raf = 0;

    const progress = () => {
      const r = host.getBoundingClientRect();
      const vh = window.innerHeight;
      return clamp((vh - r.top) / (vh + r.height));
    };

    const apply = (p) => {
      let head = L;
      let tail = 0;
      if (!reduced) {
        head = smooth(clamp((p - 0.04) / 0.56)) * L;
        tail = smooth(clamp((p - 0.5) / 0.5)) * L * 0.92;
      }
      const vis = Math.max(0, head - tail);
      for (const el of paths) {
        el.style.strokeDasharray = `${vis} ${L * 2}`;
        el.style.strokeDashoffset = `${-tail}`;
        el.style.opacity = vis < 1 ? '0' : '1';
      }
    };

    const build = () => {
      const w = host.offsetWidth;
      const h = host.offsetHeight;
      const mobile = w < mobileBreak;
      const route = mobile ? mobilePoints : points;
      svg.style.display = route ? '' : 'none';
      if (!route || !w || !h) return;

      const s = mobile ? 1 : Math.min(1, Math.max(0.6, w / 1440));
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.style.opacity = mobile ? String(mobileOpacity) : '';
      const d = toPath(route.map((p) => [p.x * w + (p.ox || 0) * s, p.y * h + (p.oy || 0) * s]));
      const sw = mobile ? mobileWidth : Math.max(14, width * s);
      paths[0].setAttribute('d', d);
      paths[1].setAttribute('d', d);
      paths[0].setAttribute('stroke-width', sw);
      paths[1].setAttribute('stroke-width', sw * 0.26);
      L = paths[0].getTotalLength();
      apply(cur);
    };

    // Ease toward the scroll position for a soft, trailing feel
    const tick = () => {
      cur += (target - cur) * 0.1;
      if (Math.abs(target - cur) < 0.0005) cur = target;
      apply(cur);
      raf = cur === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      target = progress();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    cur = target = progress();
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
  }, [points, mobilePoints, mobileBreak, width, mobileWidth, mobileOpacity]);

  return (
    <svg ref={svgRef} className="scroll-ribbon" aria-hidden="true" focusable="false" fill="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          {colors.map((c, i) => (
            <stop key={c + i} offset={i / (colors.length - 1)} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      {/* body */}
      <path ref={mainRef} stroke={`url(#${gradId})`} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0 }} />
      {/* soft highlight down the middle so it reads as a tube, not a flat line */}
      <path ref={shineRef} stroke="#ffffff" strokeOpacity="0.22" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0 }} />
    </svg>
  );
}
