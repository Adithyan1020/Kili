import React from 'react';
import { motion } from 'framer-motion';

const Consultation = () => {
  return (
    <section className="section-dark" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: 'var(--color-accent)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Free Consultation
            </h2>
            <h3 style={{ fontSize: '3rem', color: '#fff' }}>
              FOR YOUR<br/>IMMIGRATION
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '20px', maxWidth: '400px' }}>
              Lorem ipsum dolor sit amet consectetur. Amet sed ut cursum sed laoreet urna.
            </p>
            <button className="btn-primary" style={{ marginTop: '30px' }}>Apply</button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
              width: '400px', 
              height: '400px', 
              background: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800") center/cover',
              borderRadius: '50% 50% 50% 10%',
              boxShadow: '0 0 50px rgba(0, 255, 163, 0.2)'
            }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          <motion.div 
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
          </motion.div>
          <motion.div 
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
