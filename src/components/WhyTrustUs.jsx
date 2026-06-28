import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const WhyTrustUs = () => {
  return (
    <section id="about" className="section-dark" style={{ position: 'relative', padding: '100px 0', background: 'var(--color-bg-darker)' }}>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr', 
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          <motion.div variants={itemVariants}>
            <h2 style={{ fontSize: '2rem', margin: 0, color: '#fff' }}>
              WHY?
            </h2>
            <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-accent)', marginTop: '15px' }} />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: '600', color: '#fff' }}>Why should you trust TRUVIQ?</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px' }}>
              Lorem ipsum dolor sit amet consectetur. Amet sed ut cursum sed laoreet urna condimentum et sed. Ut finibus nisl magna proin eu. Arcu sed proin cras tempus.
            </p>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-50px" }}
          style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600" 
            alt="London Bridge Placeholder" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px',
            background: 'linear-gradient(to top, rgba(12,16,21,0.9), transparent)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            color: '#fff'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontStyle: 'italic' }}>
                According<br/>to your<br/><span style={{ color: 'var(--color-accent)' }}>ability!!</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Lorem ipsum dolor sit amet consectetur. Amet sed ut cursum sed laoreet urna condimentum et sed.
              </p>
            </div>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Read More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
