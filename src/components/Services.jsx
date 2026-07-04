import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import { CheckCircle2, Globe2, GraduationCap, Plane, ArrowDown } from 'lucide-react';

const services = [
  {
    icon: <Globe2 size={24} />,
    title: 'European Work Permits',
    subtitle: 'Direct Employment Pathways',
    description: 'Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term settlement.',
    features: [
      { title: 'Work Permit Processing', badge: 'Direct', desc: 'End-to-end support for European work permits.' },
      { title: 'Employer Matching', badge: 'Full-Time', desc: 'Connecting skilled workers with European employers.' },
      { title: 'Contract Assistance', badge: 'Legal', desc: 'Guidance on long-term employment contracts.' },
      { title: 'Residency Pathways', badge: 'Settlement', desc: 'Navigating long-term settlement options in Europe.' }
    ]
  },
  {
    icon: <Plane size={24} />,
    title: 'Seasonal & Visiting Visas',
    subtitle: 'Short-Term & Seasonal Work',
    description: 'For the USA, Canada, UK, and Australia, we specialize in processing visiting visas and facilitating seasonal work programs.',
    features: [
      { title: 'Seasonal Work Programs', badge: 'Temporary', desc: 'Matching workers with seasonal employment opportunities.' },
      { title: 'Visiting Visas', badge: 'Short-Term', desc: 'Accurate preparation for tourist and visitor visas.' },
      { title: 'Temporary Permits', badge: 'Legal', desc: 'Processing documentation for short-term stays.' },
      { title: 'Compliance Support', badge: 'Guidance', desc: 'Ensuring strict adherence to temporary visa regulations.' }
    ]
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: 'Construction Recruitment',
    subtitle: 'UAE Sector Specialists',
    description: 'In the UAE, we are actively recruiting for large-scale construction work projects, handling recruitment, screening, and visa processing.',
    features: [
      { title: 'Sector Recruitment', badge: 'Construction', desc: 'Sourcing talent for major UAE projects.' },
      { title: 'Visa Processing', badge: 'Employment', desc: 'Handling all Emirates employment visa requirements.' },
      { title: 'Skills Assessment', badge: 'Vetting', desc: 'Ensuring candidates meet project requirements.' },
      { title: 'Relocation Support', badge: 'End-to-End', desc: 'Flight booking and onboarding assistance.' }
    ]
  }
];

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <m.div
      onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setIsExpanded(true)}
      onMouseLeave={() => window.matchMedia('(hover: hover)').matches && setIsExpanded(false)}
      onClick={() => !window.matchMedia('(hover: hover)').matches && setIsExpanded(!isExpanded)}
      style={{
        minWidth: 'min(400px, 90vw)',
        width: 'min(400px, 90vw)',
        position: 'relative',
        background: isExpanded ? 'var(--color-accent)' : 'var(--card-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: '24px',
        padding: '35px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.4s ease, transform 0.3s ease',
        cursor: 'pointer',
        scrollSnapAlign: 'start',
        flexShrink: 0,
        color: isExpanded ? 'var(--bg-primary)' : 'var(--text-primary)',
        boxShadow: isExpanded ? '0 20px 40px rgba(0,0,0,0.2)' : 'none'
      }}
      whileHover={{ y: -10 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <m.div 
            animate={{ color: isExpanded ? 'var(--bg-primary)' : 'var(--text-primary)' }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </m.div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '600', margin: 0 }}>
            {service.title}
          </h3>
        </div>
      </div>

      {/* Subtitle & Desc */}
      <h4 style={{ fontSize: '2.2rem', fontWeight: '700', lineHeight: 1.2, marginBottom: '20px' }}>
        {service.subtitle}
      </h4>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '25px' }}>
        {service.description}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: isExpanded ? 'rgba(255,255,255,0.3)' : 'var(--color-border)', marginBottom: '25px', width: '100%' }} />

      {/* Expandable Features list */}
      <AnimatePresence>
        {isExpanded && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
              {service.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ marginTop: '4px' }}>
                      <CheckCircle2 size={20} color="currentColor" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                          {feature.title}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.8, margin: 0 }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  {/* Internal divider for all except last */}
                  {i < service.features.length - 1 && (
                    <div style={{ height: '1px', background: isExpanded ? 'rgba(255,255,255,0.15)' : 'var(--color-border)', marginTop: '20px', marginLeft: '35px' }} />
                  )}
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Expand/Collapse Arrow */}
      <div style={{ flexGrow: 1 }} />
      <m.div
        animate={{ 
          backgroundColor: isExpanded ? 'rgba(255,255,255,0.2)' : 'var(--card-bg)',
          rotate: isExpanded ? 180 : 0
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 'auto',
          border: `1px solid ${isExpanded ? 'rgba(255,255,255,0.3)' : 'var(--color-border)'}`
        }}
      >
        <ArrowDown size={24} color="currentColor" />
      </m.div>
    </m.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-dark" style={{ padding: '100px 0' }}>
      <div className="container">
        <m.div 
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
            <m.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              style={{ color: 'var(--text-primary)', fontSize: '3rem', perspective: '1000px', margin: 0 }}
            >
              <SplitWord>Our Expertise</SplitWord>
            </m.h2>
          </div>
        </m.div>

        {/* Scroll affordance for mobile */}
        <div className="scroll-hint-mobile" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '15px', alignItems: 'center', gap: '8px' }}>
          <span>Swipe to explore services</span>
          <m.div 
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </m.div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '30px', 
            overflowX: 'auto', 
            paddingTop: '20px',
            marginTop: '-20px',
            paddingBottom: '40px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            alignItems: 'stretch'
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          {/* Spacer */}
          <div style={{ minWidth: '1px' }} />
        </div>
      </div>
    </section>
  );
};

export default Services;

