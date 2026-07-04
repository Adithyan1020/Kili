import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import { CheckCircle2 } from 'lucide-react';

const countries = [
  { 
    id: 'eu', 
    name: 'Europe', 
    flag: 'https://flagcdn.com/w80/eu.png', 
    map: '/map/europe.webp',
    about: 'In Europe, securing a direct Work Permit is our primary aim. We focus on matching skilled professionals with long-term employment opportunities and navigating the work permit process.',
    perks: ['Direct Work Permits', 'Skilled Employment', 'Long-term Contracts', 'Application Processing', 'Employer Matching']
  },
  { 
    id: 'us', 
    name: 'USA', 
    flag: 'https://flagcdn.com/w80/us.png', 
    map: '/map/usa.webp',
    about: 'For the United States, our primary focus is on facilitating Seasonal Work programs and processing Visiting Visas for short-term stays and employment.',
    perks: ['Seasonal Work Programs', 'Visiting Visas', 'Temporary Permits', 'Application Processing', 'Compliance Support']
  },
  { 
    id: 'ca', 
    name: 'Canada', 
    flag: 'https://flagcdn.com/w80/ca.png', 
    map: '/map/canada.webp',
    about: 'In Canada, our primary focus is on facilitating Seasonal Work programs and processing Visiting Visas for short-term stays and employment.',
    perks: ['Seasonal Work Programs', 'Visiting Visas', 'Temporary Permits', 'Employer Matching', 'Compliance Support']
  },
  { 
    id: 'au', 
    name: 'Australia', 
    flag: 'https://flagcdn.com/w80/au.png', 
    map: '/map/australia.png',
    about: 'For Australia, our programs are strictly focused on Seasonal Work opportunities and Visiting Visas.',
    perks: ['Seasonal Work Programs', 'Visiting Visas', 'Temporary Permits', 'Employer Matching', 'Compliance Support']
  },
  { 
    id: 'ae', 
    name: 'UAE', 
    flag: 'https://flagcdn.com/w80/ae.png', 
    map: '/map/uae.webp',
    about: 'In the UAE, we are actively recruiting for large-scale Construction Work projects. We handle the recruitment, screening, and visa processing for workers heading to the Emirates.',
    perks: ['Construction Sector Recruitment', 'Employment Visa Processing', 'Skills Assessment', 'Contract Guidance', 'Relocation Support']
  },
];

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState('ca');

  return (
    <section className="section-light" id="countries" style={{ padding: '80px 0' }}>
      <div className="container">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Global Reach
          </div>
          <m.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            style={{ color: 'var(--text-primary)', fontSize: '2.5rem', perspective: '1000px', marginBottom: '15px' }}
          >
            <SplitWord>Choose Your Destination</SplitWord>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Explore the specialized recruitment and visa programs we facilitate across our primary operational regions.
          </m.p>
        </m.div>

        {/* Flag Selection */}
        <m.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px', flexWrap: 'wrap' }}
        >
          {countries.map((c) => (
            <m.button
              key={c.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCountry(c.id)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: selectedCountry === c.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                boxShadow: selectedCountry === c.id ? '0 10px 25px rgba(0,0,0,0.5)' : 'none',
                border: selectedCountry === c.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                fontSize: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <img src={c.flag} alt={`${c.name} flag`} style={{ width: '40px', height: 'auto', borderRadius: '4px' }} />
            </m.button>
          ))}
        </m.div>

        {/* Country Details */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
          <m.div
            className="grid-2-col"
            key={selectedCountry}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: '20px 0',
            }}
          >
            <div>
              {countries.find(c => c.id === selectedCountry)?.map && (
                <img 
                  src={countries.find(c => c.id === selectedCountry)?.map} 
                  alt={`${countries.find(c => c.id === selectedCountry)?.name} Map`} 
                  style={{ width: '100%', maxWidth: '400px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
                  onError={(e) => e.target.style.display = 'none'}
                />
              )}
            </div>
            <div>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: '5px' }}>About</div>
              <h3 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                {countries.find(c => c.id === selectedCountry)?.name.toUpperCase()}
              </h3>
              <m.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.8 }}
              >
                {countries.find(c => c.id === selectedCountry)?.about}
              </m.p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px' }}>
                {countries.find(c => c.id === selectedCountry)?.perks.map((perk, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={20} color="var(--color-accent)" />
                    <span style={{ fontWeight: '500' }}>{perk}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{ padding: '12px 30px' }}>Get Started</button>
            </div>
          </m.div>
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
};

export default Destinations;

