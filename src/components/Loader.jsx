import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const assetsToPreload = [
  'https://flagcdn.com/w80/fr.png',
  '/map/France_map.svg',
  'https://flagcdn.com/w80/pl.png',
  '/map/Poland_map_flag.svg.png',
  'https://flagcdn.com/w80/de.png',
  '/map/german_map.png',
  'https://flagcdn.com/w80/us.png',
  '/map/USA_Flag_Map.svg',
  'https://flagcdn.com/w80/it.png',
  '/map/map-of-italy-and-flag.jpg',
  'https://flagcdn.com/w80/gb.png',
  '/map/Map-of-UK-Cartoon-Style-580x386.jpg',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg'
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    
    // Safety timeout in case some images fail to load
    const safetyTimeout = setTimeout(() => {
      finishLoading();
    }, 5000);

    const finishLoading = () => {
      clearTimeout(safetyTimeout);
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for fade out animation
    };

    const handleImageLoad = () => {
      loadedCount++;
      setProgress(loadedCount / assetsToPreload.length);
      if (loadedCount >= assetsToPreload.length) {
        finishLoading();
      }
    };

    assetsToPreload.forEach(src => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if one fails
      img.src = src;
    });

    return () => clearTimeout(safetyTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <m.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--color-bg-darker)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            color: '#fff'
          }}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}
          >
            {/* Simple Spinning Ring */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              style={{
                width: '60px',
                height: '60px',
                border: '3px solid rgba(255, 255, 255, 0.1)',
                borderTopColor: 'var(--color-accent)',
                borderRadius: '50%',
              }}
            />

            {/* Logo */}
            <div style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '2px' }}>
              TRU<span style={{ color: 'var(--color-accent)' }}>VIQ</span>
            </div>
            
            {/* Progress Percentage */}
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontVariantNumeric: 'tabular-nums' }}>
              {Math.round(progress * 100)}%
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

