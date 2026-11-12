import { useEffect, useRef } from 'react';

// Adds .in to the element once it scrolls into view. For picker designs that
// are loaded after the page-wide useScrollReveal has already run.
export function useRevealOnce() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// Brings the requirements panel into view after a tap (one scroll, user-initiated).
export function revealPanel(id, delay = 0) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
  }, delay);
}
