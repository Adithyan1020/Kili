import React from 'react';
import { m } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import { ShieldCheck, Target, HeartHandshake, MessageSquare } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const WhyTrustUs = () => {
  const points = [
    {
      icon: <ShieldCheck size={32} color="var(--color-accent)" />,
      title: "Trusted Expertise",
      desc: "Reliable advice based on your profile, goals, and eligibility."
    },
    {
      icon: <Target size={32} color="var(--color-accent)" />,
      title: "Personalized Strategy",
      desc: "Every journey is different. We create solutions designed specifically for you."
    },
    {
      icon: <HeartHandshake size={32} color="var(--color-accent)" />,
      title: "Complete Support",
      desc: "From your first consultation to final application preparation."
    },
    {
      icon: <MessageSquare size={32} color="var(--color-accent)" />,
      title: "Clear Communication",
      desc: "No confusion. No hidden steps. Only a smooth and guided process."
    }
  ];

  return (
    <section id="about" className="section-dark" style={{ position: 'relative', padding: '100px 0', background: 'var(--color-bg-darker)' }}>
      <div className="container">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Professional Guidance. Transparent Process. Personal Commitment.
          </div>
          <m.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            style={{ color: 'var(--text-primary)', fontSize: '3rem', perspective: '1000px', marginBottom: '20px' }}
          >
            <SplitWord>Why Choose TRUVIQ?</SplitWord>
          </m.h2>

          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}
          >
            At TRUVIQ, we help individuals, students, and families achieve their international goals with strategic guidance, transparent processes, and personalized support.<br/><br/>
            Whether you are planning to study abroad, work overseas, migrate permanently, or visit your loved ones, our experts guide you at every stage of your journey.
          </m.p>
        </m.div>

        <m.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bento-grid"
        >
          {points.map((point, index) => (
            <m.div 
              key={index} 
              variants={itemVariants}
              className={`bento-item-${index}`}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '24px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transition: 'transform 0.3s ease, background 0.3s ease'
              }}
              whileHover={{ scale: 0.98, background: 'var(--card-bg-hover)' }}
            >
              <div style={{ marginBottom: '15px' }}>{point.icon}</div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '8px' }}>{point.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  {point.desc}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
};

export default WhyTrustUs;

