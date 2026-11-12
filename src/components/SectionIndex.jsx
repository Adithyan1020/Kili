import { useEffect, useState } from 'react';

// Fixed "01 / 07 — Home" indicator that follows the section currently in view.
// Sections opt in with data-idx / data-label attributes.
export default function SectionIndex() {
  const [current, setCurrent] = useState({ idx: '01', label: 'Home', total: '07' });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-idx]'));
    if (!sections.length) return;
    const total = String(sections.length).padStart(2, '0');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { idx, label } = entry.target.dataset;
            setCurrent({ idx, label, total });
          }
        });
      },
      // Trigger when a section crosses the middle band of the viewport
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="section-index" aria-hidden="true">
      <span className="section-index-num">{current.idx}</span>
      <span className="section-index-total">/ {current.total}</span>
      <span className="section-index-label">{current.label}</span>
    </div>
  );
}
