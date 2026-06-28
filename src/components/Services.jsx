import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import { CheckCircle2, Globe2, GraduationCap, Plane, Plus } from 'lucide-react';

const services = [
  {
    icon: <Globe2 size={32} />,
    title: 'Immigration Solutions',
    description: 'Helping you explore the right opportunities for your future.',
    features: [
      'Permanent Residency Pathways',
      'Skilled Migration Programs',
      'Work Visa Assistance',
      'Family Sponsorship Guidance',
      'Business Immigration Support'
    ]
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Study Abroad Services',
    description: 'Helping students choose the right global education pathway.',
    features: [
      'University & Course Selection',
      'Admission Assistance',
      'Student Visa Support',
      'Documentation Guidance',
      'Scholarship Assistance'
    ]
  },
  {
    icon: <Plane size={32} />,
    title: 'Visitor Visa Services',
    description: 'Making international travel easier and smoother.',
    features: [
      'Tourist Visas',
      'Business Visitor Visas',
      'Family Visit Visas'
    ]
  }
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        minWidth: '350px',
        width: '350px',
        position: 'relative',
        background: isHovered ? 'var(--color-accent)' : 'var(--card-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: '24px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'background 0.4s ease, transform 0.3s ease',
        cursor: 'pointer',
        scrollSnapAlign: 'start',
        flexShrink: 0
      }}
      whileHover={{ y: -10 }}
    >
      {/* Icon */}
      <motion.div 
        animate={{ color: isHovered ? 'var(--bg-primary)' : 'var(--color-accent)' }}
        transition={{ duration: 0.3 }}
        style={{ marginBottom: '20px' }}
      >
        {service.icon}
      </motion.div>

      {/* Title & Desc */}
      <motion.h3 
        animate={{ color: isHovered ? 'var(--bg-primary)' : 'var(--text-primary)' }}
        style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: '600' }}
      >
        {service.title}
      </motion.h3>
      
      <motion.p 
        animate={{ color: isHovered ? 'var(--bg-primary)' : 'var(--text-secondary)' }}
        style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: 1.6 }}
      >
        {service.description}
      </motion.p>

      {/* Expandable Features */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '10px', paddingBottom: '30px' }}>
              {service.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ marginTop: '3px' }}>
                    <CheckCircle2 size={18} color="currentColor" />
                  </div>
                  <span style={{ color: 'var(--bg-primary)', fontSize: '1.05rem', lineHeight: 1.4, fontWeight: '500' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Plus Button Micro Interaction */}
      <div style={{ flexGrow: 1 }} />
      <motion.div
        animate={{ 
          backgroundColor: isHovered ? 'var(--bg-primary)' : 'var(--card-bg)',
          color: isHovered ? 'var(--color-accent)' : 'var(--text-primary)',
          rotate: isHovered ? 45 : 0
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-end',
          marginTop: 'auto'
        }}
      >
        <Plus size={24} />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-dark" style={{ padding: '100px 0', background: 'var(--color-bg-dark)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Turn Your International Dreams Into Reality
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              style={{ color: 'var(--text-primary)', fontSize: '3rem', perspective: '1000px', margin: 0 }}
            >
              <SplitWord>Our Expertise</SplitWord>
            </motion.h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px', margin: 0, lineHeight: 1.6 }}>
              Every successful journey begins with the right advice. TRUVIQ provides end-to-end immigration solutions.
            </p>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div 
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '30px', 
            overflowX: 'auto', 
            paddingBottom: '40px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          {/* Spacer to allow scrolling past the last item on mobile */}
          <div style={{ minWidth: '1px' }} />
        </div>
      </div>
    </section>
  );
};

export default Services;
