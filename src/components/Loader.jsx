import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const assetsToPreload = [
  'https://flagcdn.com/w80/ca.png',
  'https://flagcdn.com/w80/au.png',
  'https://flagcdn.com/w80/gb.png',
  'https://flagcdn.com/w80/eu.png',
  '/map/ca.webp',
  '/map/au.webp',
  '/map/gb.webp',
  '/map/eu.webp'
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if loader has already run this session
    if (sessionStorage.getItem('loaderCompleted') === 'true') {
      setShouldRender(false);
      onComplete();
      return;
    }

    let loadedCount = 0;
    
    // Safety timeout in case some images fail to load
    const safetyTimeout = setTimeout(() => {
      finishLoading();
    }, 5000);

    const finishLoading = () => {
      clearTimeout(safetyTimeout);
      setIsFadingOut(true);
      setTimeout(() => {
        sessionStorage.setItem('loaderCompleted', 'true');
        onComplete();
      }, 800); // Wait for fade out animation
    };

    const handleImageLoad = () => {
      loadedCount++;
      setProgress(loadedCount / assetsToPreload.length);
      if (loadedCount >= assetsToPreload.length) {
        document.fonts.ready.then(() => {
          finishLoading();
        });
      }
    };

    if (assetsToPreload.length === 0) {
      document.fonts.ready.then(() => finishLoading());
    } else {
      assetsToPreload.forEach(src => {
        const img = new Image();
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // Continue even if one fails
        img.src = src;
      });
    }

    return () => clearTimeout(safetyTimeout);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <m.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--color-bg-darker, #0b1115)',
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

