import React from 'react';
import { m } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, rotateX: -90, y: 20 },
  visible: { 
    opacity: 1, 
    rotateX: 0, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Reusable component that takes a string and splits it into motion.span letters
export const SplitWord = ({ children, style }) => {
  if (typeof children !== 'string') return null;
  
  // Split the string into words so we can handle word wrapping properly
  const words = children.split(' ');

  return (
    <span style={{ display: 'inline-block', ...style }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => (
            <m.span 
              key={charIndex} 
              variants={letterVariants} 
              style={{ display: 'inline-block', transformOrigin: '50% 50%' }}
            >
              {char}
            </m.span>
          ))}
          {/* Add a non-breaking space after each word, except the last one */}
          {wordIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

