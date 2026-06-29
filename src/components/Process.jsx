import React from 'react';
import { m } from 'framer-motion';
import { SplitWord } from './AnimatedText';

const steps = [
  {
    number: '01',
    title: 'Discover Your Profile',
    desc: 'We understand your background, goals, and opportunities.'
  },
  {
    number: '02',
    title: 'Plan Your Pathway',
    desc: 'We identify the best immigration or study option.'
  },
  {
    number: '03',
    title: 'Prepare Your Application',
    desc: 'We support you with accurate documentation.'
  },
  {
    number: '04',
    title: 'Submit With Confidence',
    desc: 'We guide you through the application process.'
  },
  {
    number: '05',
    title: 'Begin Your New Journey',
    desc: 'Move closer to your global future.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section-dark" style={{ padding: '100px 0', background: 'var(--color-bg-dark)' }}>
      <div className="container">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            How It Works
          </div>
          <m.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            style={{ color: 'var(--text-primary)', fontSize: '3rem', perspective: '1000px' }}
          >
            <SplitWord>Our Simple 5-Step Process</SplitWord>
          </m.h2>
        </m.div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: 'var(--color-border)',
            zIndex: 0
          }} />

          {steps.map((step, index) => (
            <m.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: '60px',
                position: 'relative',
                zIndex: 1,
                width: '100%',
                paddingLeft: '60px'
              }}
            >
              {/* Center Dot */}
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '30px',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
                border: '4px solid var(--color-bg-dark)',
                boxShadow: '0 0 0 4px var(--color-accent-dim)'
              }} />

              {/* Content Box */}
              <div style={{ 
                background: 'var(--card-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '30px',
                position: 'relative',
                width: '100%'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-border)', lineHeight: 1, marginBottom: '10px' }}>
                  {step.number}
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

