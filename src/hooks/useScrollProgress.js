import { useEffect } from 'react';

export function useScrollProgress() {
  useEffect(() => {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return;

    const updateScrollProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      scrollProgress.style.width = p + '%';
    };

    document.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      document.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);
}
