import React from 'react';
import { motion } from 'framer-motion';
import { SplitWord } from './AnimatedText';

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
          className="grid-sidebar"
          style={{ marginBottom: '60px' }}
        >
          <motion.div variants={itemVariants}>
            <h2 style={{ fontSize: '2rem', margin: 0, color: '#fff' }}>
              WHY?
            </h2>
            <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-accent)', marginTop: '15px' }} />
          </motion.div>
          
          <motion.div variants={itemVariants} style={{ perspective: '1000px' }}>
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
              style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: '600', color: '#fff' }}
            >
              <SplitWord>Why should you trust TRUVIQ?</SplitWord>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false }}
              style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px' }}
            >
              Lorem ipsum dolor sit amet consectetur. Amet sed ut cursum sed laoreet urna condimentum et sed. Ut finibus nisl magna proin eu. Arcu sed proin cras tempus.
            </motion.p>
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
            <motion.div variants={itemVariants} style={{ perspective: '1000px' }}>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              style={{ fontSize: '2.5rem', marginBottom: '15px', fontStyle: 'italic' }}
            >
              <SplitWord>According</SplitWord><br/>
              <SplitWord>to your</SplitWord><br/>
              <span style={{ color: 'var(--color-accent)' }}><SplitWord>ability!!</SplitWord></span>
            </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false }}
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                Lorem ipsum dolor sit amet consectetur. Amet sed ut cursum sed laoreet urna condimentum et sed.
              </motion.p>
            </motion.div>
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
