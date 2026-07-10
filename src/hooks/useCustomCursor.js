import { useEffect } from 'react';

export function useCustomCursor() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;

    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursorDot || !cursorRing) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursorDot.style.left = mx + 'px';
      cursorDot.style.top = my + 'px';
    };

    let reqId;
    const raf = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
      reqId = requestAnimationFrame(raf);
    };

    document.addEventListener('mousemove', onMouseMove);
    reqId = requestAnimationFrame(raf);

    const hoverTargets = 'a, button, .dest-card, .feature-card, input, textarea';
    const onMouseOver = (e) => {
      if (e.target.closest(hoverTargets)) cursorRing.classList.add('hovering');
    };
    const onMouseOut = (e) => {
      if (e.target.closest(hoverTargets)) cursorRing.classList.remove('hovering');
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(reqId);
    };
  }, []);
}
