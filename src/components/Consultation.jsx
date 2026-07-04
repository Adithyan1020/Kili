import React from 'react';
import { m } from 'framer-motion';
import { SplitWord } from './AnimatedText';

const Consultation = () => {
  return (
    <section id="contact" className="section-dark" style={{ padding: '100px 0', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Top text and image - add flexWrap for mobile */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Left Text */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ flex: '1 1 500px', maxWidth: '600px' }}
          >
            <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Free Assessment
            </div>
            <m.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '30px', color: '#fff' }}
            >
              <SplitWord>Let's map out</SplitWord><br />
              <SplitWord>your journey</SplitWord>
            </m.h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '40px', maxWidth: '90%' }}>
              Speak with our certified immigration consultants to evaluate your profile, explore your options, and craft a tailored strategy to achieve your global ambitions.
            </p>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                Book Consultation
              </button>
              <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                Call Us Now
              </button>
            </div>
          </m.div>

          {/* Right Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ position: 'relative', flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ 
              width: '100%', 
              maxWidth: '450px', 
              aspectRatio: '1/1', 
              borderRadius: '30px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Immigration Consultation" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(21, 26, 31, 0.8), transparent)' }} />
            </div>
          </m.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          <m.div 
            whileHover={{ y: -10 }}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '20px', 
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              height: '300px',
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800")',
              backgroundSize: 'cover'
            }}
          >
            <h4 style={{ fontSize: '1.5rem', color: '#fff' }}>With Person</h4>
          </m.div>
          <m.div 
            whileHover={{ y: -10 }}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '20px', 
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              height: '300px',
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800")',
              backgroundSize: 'cover'
            }}
          >
            <h4 style={{ fontSize: '1.5rem', color: '#fff' }}>With Family</h4>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;

