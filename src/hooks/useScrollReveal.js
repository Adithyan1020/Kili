import { useEffect } from 'react';

// Adds .in once when an element scrolls into view. Elements opt in with
// .reveal / .reveal-stagger (fade + rise) or [data-reveal] (section-specific
// CSS keyed off .in: board letter flips, route line, stat reels).
export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger, [data-reveal]');
    if (!revealEls.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
