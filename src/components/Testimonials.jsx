import React from 'react';
import { m } from 'framer-motion';
import { SplitWord } from './AnimatedText';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Relocated to France",
    quote: "TRUVIQ made my family's move to Paris completely stress-free. Their team handled every single visa detail.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Work Visa in USA",
    quote: "I was overwhelmed by the immigration process until I found TRUVIQ. Professional, fast, and highly reliable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Student Visa in UK",
    quote: "The consultants at TRUVIQ guided me through every step of my university application and visa process. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-dark" style={{ padding: '100px 0', background: 'var(--color-bg-darker)' }}>
      <div className="container">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Success Stories
          </div>
          <m.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            style={{ color: 'var(--text-primary)', fontSize: '3rem', perspective: '1000px' }}
          >
            <SplitWord>What Our Clients Say</SplitWord>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
            style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
          >
            Don't just take our word for it. Read about the journeys of people who trusted us with their global relocation.
          </m.p>
        </m.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonials.map((t, index) => (
            <m.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: "-50px" }}
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div style={{ color: 'var(--color-accent)', fontSize: '2rem', lineHeight: '1' }}>"</div>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', flex: 1, fontStyle: 'italic' }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
                <img 
                  src={t.image} 
                  alt={t.name} 
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', margin: 0 }}>{t.name}</h4>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.role}</div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

